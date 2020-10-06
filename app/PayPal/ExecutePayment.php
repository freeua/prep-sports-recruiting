<?php


namespace App\PayPal;


use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Payment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\Transaction;

class ExecutePayment extends Paypal
{
    public function execute ($plan)
    {
        $payment = $this->GetThePayment();
        $execution = $this->CreateExecution();
        $execution->addTransaction($this->transaction($plan));
        $result = $payment->execute($execution, $this->apiContext);

        return $result;
    }

    /**
     * @return Payment
     */

    protected function GetThePayment(): Payment
    {
        $paymentId = request('paymentId');
        $payment = Payment::get($paymentId, $this->apiContext);

        return $payment;
    }

    /**
     * @return PaymentExecution
     */

    protected function CreateExecution(): PaymentExecution
    {
        $execution = new PaymentExecution();
        $execution->setPayerId(request('PayerID'));

        return $execution;
    }

    /**
     * @param $plan
     * @return Transaction
     */

    protected function transaction($plan): Transaction
    {
        $transaction = new Transaction();
        $transaction->setAmount($this->amount($plan));
//            ->setItemList($itemList)
//            ->setDescription("Payment description")
//            ->setInvoiceNumber(uniqid());

        return $transaction;
    }
    /**
     * @param $plan
     * @return Details
     */

    protected function details($plan): Details
    {
        $details = new Details();
//        $details->setShipping(1.2)
//            ->setTax(1.3)
//            ->setSubtotal(7.50);
        $details->setSubtotal($plan->price);

        return $details;
    }

    /**
     * @param $plan
     * @return Amount
     */

    protected function amount($plan): Amount
    {
        $amount = new Amount();
        $amount->setCurrency("USD")
            ->setTotal($plan->price)
            ->setDetails($this->details($plan));

        return $amount;
    }
}
