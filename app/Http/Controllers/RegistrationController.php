<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegistrationController extends Controller
{

    public function createRegistration(Request $request)
    {
        $valid = User::where('email', '=', $request->input('email'));
        if (!isset($valid)) {
        $user = new User();
        $user->name = $request->input('username');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->birthday = $request->input('birthday');
        $user->country = $request->input('country');
        $user->remember_token = $request->input('_token');

        $user->save();

        return response('Registration success');
    } else {
            return response('Registration error');
        }
    }

}
