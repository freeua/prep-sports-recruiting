<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => env('SES_REGION', 'us-east-1'),
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'paypal' => [
        'id' => env('PAYPAL_SANDBOX_CLIENT_ID'),
        'secret' => env('PAYPAL_SANDBOX_SECRET'),
        'url' => [
            'redirect' => 'http://prep-sports-recruiting/execute-payment',
            'cancel' => 'http://prep-sports-recruiting/cancel',
            'executeAgreement' => [
                'success' => 'http://prep-sports-recruiting/execute-agreement/true',
                'failure' => 'http://prep-sports-recruiting/execute-agreement/false'
            ]
        ]
    ],

    'elastic_email' => [
        'key' => env('ELASTIC_KEY'),
        'account' => env('ELASTIC_ACCOUNT')
    ]

];
