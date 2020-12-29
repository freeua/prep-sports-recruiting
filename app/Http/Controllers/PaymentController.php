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
        $this->middleware('auth:api');
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
        Session::put('jwt_token', $request->header('Authorization'));
        Session::put('plans', $plan);
        Session::put('sport_id', $request->sport_id);
        return $payment->create($plan);
    }

    public function execute()
    {
        $payment = new ExecutePayment();
        $plan = Session::get('plans');
        $token = Session::get('jwt_token');
        $transaction_plan = $payment->execute($plan);
        foreach ($transaction_plan->transactions as $transaction) {
            foreach($transaction->item_list->items as $item) {
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
		if ($user->sports->isNotEmpty($user->sports()->where($sportId))) {
			// $userSport = $user->sports()->where($sportId)
		}


        $user->plans()->attach($transaction_plan_id, [ 'sport_id' => Session::get('sport_id')]);

//        return $transaction_plan;
        return response()->json(['msg' => 'transaction successeful', 'data' => $user->id, 'status' => 'Successeful']);
    }
}
