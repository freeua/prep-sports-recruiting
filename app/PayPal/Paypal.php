<?php


namespace App\PayPal;

use PayPal\Auth\OAuthTokenCredential;
use PayPal\Rest\ApiContext;

class Paypal
{
    protected $apiContext;
    private $client_id;
    private $secret;

    public function __construct()
    {
        // Detect if we are running in live mode or sandbox
        if(config('paypal.settings.mode') == 'live'){
            $this->client_id = config('paypal.live_client_id');
            $this->secret = config('paypal.live_secret');
//            $this->plan_id = env('PAYPAL_LIVE_PLAN_ID', '');
        } else {
            $this->client_id = config('paypal.sandbox_client_id');
            $this->secret = config('paypal.sandbox_secret');
//            $this->plan_id = env('PAYPAL_SANDBOX_PLAN_ID', '');
        }
        $this->apiContext = new ApiContext(new OAuthTokenCredential(
            $this->client_id, $this->secret
        ));

        // Set the Paypal API Context/Credentials
//        $this->apiContext->setConfig(config('paypal.settings'));
    }
}
