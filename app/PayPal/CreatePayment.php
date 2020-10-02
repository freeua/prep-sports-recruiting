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

class CreatePayment extends Paypal
{
    /**
     * @param $plan
     */
    public function create($plan)
    {
//        dd($plan->id, gettype($plan));
        $item = new Item();
        $item->setName($plan->name)
            ->setCurrency('USD')
            ->setQuantity(1)
            ->setSku("123123") // Similar to `item_number` in Classic API
            ->setPrice($plan->price);
//        $item2 = new Item();
//        $item2->setName('Granola bars')
//            ->setCurrency('USD')
//            ->setQuantity(5)
//            ->setSku("321321") // Similar to `item_number` in Classic API
//            ->setPrice(2);

        $itemList = new ItemList();
//        $itemList->setItems(array($item1, $item2));
        $itemList->setItems(array($item));

        $payment = $this->payment($itemList);

        $payment->create($this->apiContext);

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
     * @param $itemList
     *
     * @return Transaction
     */

    protected function transaction($itemList): Transaction
    {
        $transaction = new Transaction();
        $transaction->setAmount($this->amount())
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
        $redirectUrls->setReturnUrl('http://prep-sports-recruiting/execute-payment')
            ->setCancelUrl('http://prep-sports-recruiting/cancel');

        return $redirectUrls;
    }

}
