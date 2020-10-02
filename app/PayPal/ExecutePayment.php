<?php


namespace App\PayPal;


use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Payment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\Transaction;

class ExecutePayment extends Paypal
{
    public function execute ()
    {
        $payment = $this->GetThePayment();

        $execution = $this->CreateExecution();

        $execution->addTransaction($this->transaction());

        $result = $payment->execute($execution, $this->apiContext);

        return $result;
    }

    /**
     * @return Payment
     */

    protected function GetThePayment(): Payment
    {
        $paymentId = request('PaymentId');

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
     * @return Transaction
     */

    protected function transaction(): Transaction
    {
        $transaction = new Transaction();
        $transaction->setAmount($this->amount());
//            ->setItemList($itemList)
//            ->setDescription("Payment description")
//            ->setInvoiceNumber(uniqid());

        return $transaction;
    }
}
