<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// Used to process plans
use PayPal\Api\ChargeModel;
use PayPal\Api\Currency;
use PayPal\Api\MerchantPreferences;
use PayPal\Api\PaymentDefinition;
//use PayPal\Api\Plan;
use PayPal\Api\Patch;
use PayPal\Api\PatchRequest;
use PayPal\Common\PayPalModel;
use PayPal\Rest\ApiContext;
//use PayPal\Auth\OAuthTokenCredential;

use PayPal\Auth\OAuthTokenCredential;

// use to process billing agreements
use PayPal\Api\Agreement;
use PayPal\Api\Payer;
use PayPal\Api\Plan;
use PayPal\Api\ShippingAddress;

class PlansController extends Controller
{
    private $apiContext;
    private $mode;
    private $client_id;
    private $secret;
    private $plan_id;

    // Create a new instance with our paypal credentials
    public function __construct()
    {
        // Detect if we are running in live mode or sandbox
        if(config('paypal.settings.mode') == 'live'){
            $this->client_id = config('paypal.live_client_id');
            $this->secret = config('paypal.live_secret');
            $this->plan_id = env('PAYPAL_LIVE_PLAN_ID', '');
        } else {
            $this->client_id = config('paypal.sandbox_client_id');
            $this->secret = config('paypal.sandbox_secret');
            $this->plan_id = env('PAYPAL_SANDBOX_PLAN_ID', '');
        }

        // Set the Paypal API Context/Credentials
        $this->apiContext = new ApiContext(new OAuthTokenCredential($this->client_id, $this->secret));
        $this->apiContext->setConfig(config('paypal.settings'));
    }

    public function create_plan(Request $request){

        // Create a new billing plan
        $plan = new Plan();
        $plan->setName('App Name Monthly Billing')
            ->setDescription('Monthly Subscription to the App Name')
            ->setType('infinite');

        // Set billing plan definitions
        $paymentDefinition = new PaymentDefinition();
        $paymentDefinition->setName('Regular Payments')
            ->setType('REGULAR')
            ->setFrequency('Month')
            ->setFrequencyInterval('1')
            ->setCycles('0')
            ->setAmount(new Currency(array('value' => 1, 'currency' => 'USD')));

        // Set merchant preferences
        $merchantPreferences = new MerchantPreferences();
        $merchantPreferences->setReturnUrl('http://prep-sports-recruiting/subscribe/paypal/return')
            ->setCancelUrl('https://prep-sports-recruiting/subscribe/paypal/return')
            ->setAutoBillAmount('yes')
            ->setInitialFailAmountAction('CONTINUE')
            ->setMaxFailAttempts('0');

        $plan->setPaymentDefinitions(array($paymentDefinition));
        $plan->setMerchantPreferences($merchantPreferences);

        //create the plan
        try {
            $createdPlan = $plan->create($this->apiContext);

            try {
                $patch = new Patch();
                $value = new PayPalModel('{"state":"ACTIVE"}');
                $patch->setOp('replace')
                    ->setPath('/')
                    ->setValue($value);
                $patchRequest = new PatchRequest();
                $patchRequest->addPatch($patch);
                $createdPlan->update($request->id, $this->apiContext);
                $plan = Plan::get($createdPlan->getId(), $this->apiContext);

                // Output plan id
                echo 'Plan ID:' . $plan->getId();
            } catch (PayPal\Exception\PayPalConnectionException $ex) {
                echo $ex->getCode();
                echo $ex->getData();
                die($ex);
            } catch (Exception $ex) {
                die($ex);
            }
        } catch (PayPal\Exception\PayPalConnectionException $ex) {
            echo $ex->getCode();
            echo $ex->getData();
            die($ex);
        } catch (Exception $ex) {
            die($ex);
        }

    }
}
