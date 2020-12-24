<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class RegistrationController extends Controller
{
    public function createRegistration(Request $request)
    {
        $image = $request->file('avatar');
        $is_user = User::where('email', '=', $request->input('email'))->first();
        if (!isset($is_user)) {
            $user = new User();
            $user->name = $request->input('username');
            $user->email = $request->input('email');
            $user->password = Hash::make($request->input('password'));
            $user->birthday = Carbon::parse($request->input('birthday'))->format('Y/m/d');
            $user->country = $request->input('country');
            $user->avatar = !empty($image) ? $request->file('avatar')->store('uploads/avatar', 'public') : '';
            $user->remember_token = $request->input('_token');

            $user->save();

            return response()->json(['success' => true, 'message' => 'User created'],200);

        } else {

            return response()->json(['success'=> false, 'message'=>'This email is already exists']);

        }
    }
}
