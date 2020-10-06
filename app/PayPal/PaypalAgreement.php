<?php


namespace App\PayPal;

use PayPal\Api\Plan;
use PayPal\Api\Payer;
use PayPal\Api\Agreement;
use PayPal\Api\ShippingAddress;
use PayPal\Exception\PayPalConnectionException;
//use PayPal\Exception;
use Exception;
use Carbon\Carbon;

class PaypalAgreement extends Paypal
{
    public function create($id)
    {
        return redirect($this->agreement($id));
    }

    /**
     * @param $id
     * @return string
     */
    protected function agreement($id): string
    {
        $dateFormat = 'c';
        $date = Carbon::now()->addDays(1);
        $agreement = new Agreement();
        $agreement->setName('Base Agreement')
            ->setDescription('Basic Agreement')
            ->setStartDate($date->format($dateFormat));
//            ->setStartDate('2020-10-22T09:13:49Z');

        $agreement->setPlan($this->plan($id));
        $agreement->setPayer($this->payer());


        $agreement->setShippingAddress($this->shippingAddress());
        try {
            $agreement->create($this->apiContext);
        } catch (PayPalConnectionException $ex) {
            echo $ex->getCode(); // Prints the Error Code
            echo $ex->getData(); // Prints the detailed error message
            dd($ex, 'test1');
        } catch (Exception $ex) {
            dd($ex, 'test2');
        }

        return $agreement->getApprovalLink();

    }

    /**
     * @param $id
     * @return Plan
     */
    protected function plan($id): Plan
    {
        $plan = new Plan();
        $plan->setId($id);
        return $plan;
    }

    /**
     * @return Payer
     */
    protected function payer(): Payer
    {
        $payer = new Payer();
        $payer->setPaymentMethod('paypal');
        return $payer;
    }

    /**
     * @return ShippingAddress
     */
    protected function shippingAddress(): ShippingAddress
    {
        $shippingAddress = new ShippingAddress();
        $shippingAddress->setLine1('111 First Street')
            ->setCity('Saratoga')
            ->setState('CA')
            ->setPostalCode('95070')
            ->setCountryCode('US');
        return $shippingAddress;
    }

    public function execute($token)
    {
        $agreement = new Agreement();
        $agreement->execute($token, $this->apiContext);

    }
}
