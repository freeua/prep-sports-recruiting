<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Tymon\JWTAuth\Facades\JWTAuth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /*
         * This code is needed to get a user without a front end and requires further modification since it is not safe to store the token in the session
         */
        $token = Session::get('token');
        /* end */
        JWTAuth::setToken($token);
        $user = JWTAuth::toUser();

        if (isset($user) && $user->is_admin == 1) {
            return $next($request);
        }
        return redirect()->route('welcome');
    }
}
