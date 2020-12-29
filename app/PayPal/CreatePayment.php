<?php


namespace App\PayPal;

use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\RedirectUrls;
use PayPal\Api\Transaction;
use PayPal\Exception\PayPalConnectionException;

class CreatePayment extends Paypal
{
    /**
     * @param $plan
     */
    public function create($plan)
    {
        $item = new Item();
        $item->setName($plan->name)
            ->setCurrency('USD')
            ->setQuantity(1)
            ->setSku($plan->id)
            ->setPrice($plan->price);
        $itemList = new ItemList();
        $itemList->setItems(array($item));
        $payment = $this->payment($itemList);

        try {
            $payment->create($this->apiContext);
        } catch (PayPalConnectionException $ex) {
            echo $ex->getCode(); // Prints the Error Code
            echo $ex->getData(); // Prints the detailed error message
            dd($ex, 'test1');
        } catch (Exception $ex) {
            dd($ex, 'test2');
        }

        return redirect($payment->getApprovalLink());
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
     * @return Details
     */

    protected function details($price): Details
    {
        $details = new Details();
//        $details->setShipping(0)
//            ->setTax(0)
//            ->setSubtotal(17.50);
        $details->setSubtotal($price);

        return $details;
    }

    /**
     * @return Amount
     */

    protected function amount($itemList): Amount
    {
        $price = '';
        foreach ($itemList->getItems() as $items) {
            $price = $items->getPrice();
        }
        $amount = new Amount();
        $amount->setCurrency("USD")
            ->setTotal($price)
            ->setDetails($this->details($price));
        return $amount;
    }

    /**
     * @param $itemList
     *
     * @return Transaction
     */

    protected function transaction($itemList): Transaction
    {
        $transaction = new Transaction();
        $transaction->setAmount($this->amount($itemList))
            ->setItemList($itemList)
            ->setDescription("Payment description")
            ->setInvoiceNumber(uniqid());

        return $transaction;
    }

    /**
     * @param $itemList
     *
     * @return Transaction
     */

    protected function payment($itemList): Payment
    {
        $payment = new Payment();
        $payment->setIntent("sale")
            ->setPayer($this->payer())
            ->setRedirectUrls($this->redirectUrls())
            ->setTransactions(array($this->transaction($itemList)));

        return $payment;
    }

    /**
     * @return Transaction
     */

    protected function redirectUrls(): RedirectUrls
    {
        $redirectUrls = new RedirectUrls();
        $redirectUrls->setReturnUrl(env('APP_URL') . '/api/execute-payment')
            ->setCancelUrl(env('APP_URL') . '/api/cancel');

        return $redirectUrls;
    }

}
