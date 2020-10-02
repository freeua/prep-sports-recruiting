<?php

namespace App\Http\Controllers;

use App\PayPal\PaypalAgreement;
use App\PayPal\SubscriptionPlan;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function createPlan()
    {
        $plan = new SubscriptionPlan();

        $plan->create();

    }

    public function listPlan()
    {
        $plan = new SubscriptionPlan();

        return $plan->listPlan();
    }

    public function showPlan($id)
    {
        $plan = new SubscriptionPlan();

        return $plan->planDetails($id);
    }

    public function activatedPlan($id)
    {
        $plan = new SubscriptionPlan();

        $plan->activate($id);
    }

    public function createAgreement($id)
    {
        $agreement = new PaypalAgreement();
        return $agreement->create($id);
    }

    public function executeAgreement($status)
    {
//        dd($status);
        if($status == 'success'){
            $agreement = new PaypalAgreement();
            $agreement->execute(request('token'));
            return 'DONE';
        }
    }
}
