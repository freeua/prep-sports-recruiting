<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Plan;

class AccountController extends Controller
{
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
}
