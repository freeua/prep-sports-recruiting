<?php

namespace App\Http\Controllers;

use App\PayPal\CreatePayment;
use App\PayPal\ExecutePayment;
use App\User;
use Illuminate\Http\Request;
use App\Plan;
use App\Sport;
use Illuminate\Support\Facades\Session;
use Tymon\JWTAuth\Facades\JWTAuth;

class PaymentController extends Controller
{
  /**
   * PaymentController constructor.
   */
     public function __construct()
     {
        $this->middleware('auth:api', ['except' => ['execute']]);
     }

    public function index()
    {
        $plans = Plan::all();
        return view('admin.paypal', compact('plans'));
    }

    /**
     * @param  \Illuminate\Http\Request  $request (id, sport_id)
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function create(Request $request)
    {
        $plan = Plan::where('id', '=', $request->id)->first();
        $payment = new CreatePayment();
        $header = $request->header();
        $token = str_replace('Bearer ', '', $header['authorization'][0]);
        Session::put('jwt_token', $token);
        Session::put('plans', $plan);
        Session::put('sport_id', $request->sport_id);
        return $payment->create($plan);
    }

    public function execute()
    {
      if(!empty(Session::get('jwt_token'))) {
        $payment = new ExecutePayment();
        $plan = Session::get('plans');
        $token = Session::get('jwt_token');
        $transaction_plan = $payment->execute($plan);
        foreach ($transaction_plan->transactions as $transaction) {
          foreach ($transaction->item_list->items as $item) {
            $transaction_plan_id = $item->sku;
          }
        }
        /*
         * This code is needed to get a user without a front end and requires further modification since it is not safe to store the token in the session
         */
        // $token = Session::get('token');
        /* end */
        JWTAuth::setToken($token);
        $transaction_user = JWTAuth::toUser($token);

        $user = User::where('id', '=', $transaction_user->id)->first();

        $sportId = Session::get('sport_id');
        $term = $plan->term;
        if ($user->sports->isNotEmpty() && $user->sports()->where('sport_user.sport_id', $sportId)->get()->isNotEmpty()) {
			$userSport = $user->sports()->where('sport_user.sport_id', $sportId)->first();
			if (null !== $userSport->pivot->count) {
				if (null === $term) {
				$user->sports()->updateExistingPivot($sportId, ['count' => $term]);
				}
				else {
				$user->sports()->updateExistingPivot($sportId, ['count' => $userSport->pivot->count + $term]);
				}
			}
		}
		else {
			$user->sports()->attach($sportId, ['count' => $term]);
		}

//        return $transaction_plan;
        return response()->json(['msg' => 'transaction successeful', 'data' => $user->id, 'status' => 'Successeful']);
	  }
	  else {
        return null;
      }
    }
}
