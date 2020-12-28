<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * Indicates whether the XSRF-TOKEN cookie should be set on the response.
     *
     * @var bool
     */
    protected $addHttpCookie = true;

   /**
	* The URIs that should be excluded from CSRF verification.
	*
	* @var array
	*/
   protected $except = [
	   // 'send_mail',
	   // 'create-payment',
	   // 'get-coaches',
	   // 'auth/login',
	   // 'auth/me',
	   // 'auth/logout',
	   'password/email',
	   'password/reset',
	   // 'account/get-account-data'
   ];
}
