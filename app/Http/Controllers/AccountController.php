<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Plan;
use App\Sport;
use App\Coach;
use GuzzleHttp\ClientInterface;
use Chocoholics\LaravelElasticEmail\ElasticTransport;
use GuzzleHttp\Client as Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Handler\MockHandler;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Psr7;
use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Exception\RequestException;
use Psr\Http\Message\ResponseInterface;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Carbon\Carbon;

class AccountController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
      $this->middleware('auth:api');
    }

    public function getAccountData(Request $request)
    {
        $user = User::where('id', '=', $request->id)->first();
        $plans = $user->plans()->get();
        $data = new \stdClass();
        $data->user_name = $user->name;
        $data->user_email = $user->email;
        $data->user_birthday = $user->birthday;
        $data->user_country = $user->country;
        $data->plans = $plans;

        return response()->json(['msg' => 'Account data', 'data' => $data, 'status' => 'Successeful']);
    }

    /**
     * @param  \Illuminate\Http\Request  $request (user_id, sport_id, plan_id)
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function getCoaches(Request $request) {
        $user = User::where('id', '=', $request->id)->first();
        $sport = Sport::findOrFail($request->sport_id);
        $selectedPlan = Plan::findOrFail($request->plan_id);
        $userPlans = $user->plans;
        if ($userPlans->isNotEmpty()) {
            foreach ($userPlans as $plan){
                if ($plan->pivot->sport_id == $sport->id && $plan->pivot->count < $selectedPlan->term) {
                    $coaches = $sport->coaches;
                    return response()->json(['msg' => 'Coaches', 'data'=>$coaches, 'status' => 'Successeful']);
                }
            }
        }
        return response()->json(['msg' => 'No Coaches', 'status' => 'error']);
    }

    public function getLog(Request $request)
    {
      $header = $request->header();
      $token = str_replace('Bearer ', '', $header['authorization'][0]);
      JWTAuth::setToken($token);
      $user = JWTAuth::toUser();
      $date = Carbon::now();
      $client = new Client([
        'headers' => [
          'Content-type' => 'application/json; charset=utf-8'
        ],
      ]);
      $url = 'https://api.elasticemail.com/v2/log/load?apikey='. env('ELASTIC_KEY') . '&statuses=6&from='. $user->created_at->toDateTimeString() .'&to='. $date->toDateTimeString() .'&limit=5&includeEmail=true&email=';

      try {
        $request_opened = $client->post($url, []);
      } catch (ClientException $e) {
        if ($e->hasResponse()) {
          dd(Psr7\str($e->getResponse()));
        }
      }

      $result_opened = [];
      if (!empty($request_opened)) {
        $request_opened_to_array = json_decode($request_opened->getBody()->getContents(), true);
        foreach ($request_opened_to_array['data']['recipients'] as &$value) {
          if ($value['fromemail'] == $user->email) {
            $value['coach_info'] = Coach::where('head_coach_email', $value['to'])->first();
            if (!empty($value['coach_info'])) {
              $sports = $value['coach_info']->sport()->get();
              foreach ($sports as $sport) {
                $value['coach_info']['sport'] = $sport['name'];
              }
            }
            $result_opened[] = $value;
          }
        }
      }
      $url_sent = 'https://api.elasticemail.com/v2/log/load?apikey='. env('ELASTIC_KEY') . '&statuses=5&from='. $user->created_at->toDateTimeString() .'&to='. $date->toDateTimeString() .'&limit=5&includeEmail=true&email=';

      try {
        $request_sent = $client->post($url_sent, []);
      } catch (ClientException $e) {
        if ($e->hasResponse()) {
          dd(Psr7\str($e->getResponse()));
        }
      }
      $result_sent = [];
      if (!empty($request_sent)) {
        $request_sent_to_array = json_decode($request_sent->getBody()->getContents(), true);
        foreach ($request_sent_to_array['data']['recipients'] as &$value) {
          if ($value['fromemail'] == $user->email) {
            $value['coach_info'] = Coach::where('head_coach_email', $value['to'])->first();
            if (!empty($value['coach_info'])) {
              $sports = $value['coach_info']->sport()->get();
              foreach ($sports as $sport) {
                $value['coach_info']['sport'] = $sport['name'];
              }
            }
            $result_sent[] = $value;
          }
        }
      }

      $result = ['opened'=>$result_opened, 'sent'=>$result_sent];

      return $result;
    }

    public function getSports()
    {
        $sports = Sport::all();

        return \response()->json(['msg' => 'Sports', 'data'=>$sports, 'status' => 'Successeful']);
    }

    public function getPlans()
    {
        $plans = Plan::all();

        return \response()->json(['msg' => 'Plans', 'data'=>$plans, 'status' => 'Successeful']);
    }

    public function getSportsPlans()
    {
        $sports_plans = [];
        $sports = Sport::all();
        $plans = Plan::all();
        $sports_plans[] = $sports;
        $sports_plans[] = $plans;

        return \response()->json(['msg' => 'Plans', 'data'=>$sports_plans, 'status' => 'Successeful']);
    }
}
