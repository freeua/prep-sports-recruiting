<?php

namespace App\Http\Controllers;

use App\PayPal\CreatePayment;
use App\PayPal\ExecutePayment;
use Illuminate\Http\Request;
use App\Plan;

class PaymentController extends Controller
{
    public function index()
    {
        $plans = Plan::all();
        return view('admin.paypal', compact('plans'));
    }

    public function create(Request $request)
    {
        $plan = Plan::where('id', '=', $request->id)->first();
        $payment = new CreatePayment();

        return $payment->create($plan);
    }

    public function execute()
    {
        $payment = new ExecutePayment();

        return $payment->execute();
    }
}
