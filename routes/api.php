<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('contacts', 'API\ContactController');

Route::post('/registration', 'RegistrationController@createRegistration');

Route::group(['prefix' => 'auth', 'middleware' => 'api'], function () {

  Route::post('login', 'AuthController@login');
  Route::post('logout', 'AuthController@logout');
  Route::post('refresh', 'AuthController@refresh');
  Route::post('me', 'AuthController@me');

});

Route::group(['prefix' => 'account', 'middleware' => 'api'], function () {
  Route::post('get-account-data', 'AccountController@getAccountData')->name('get-account-data');
  Route::post('get-coaches', 'AccountController@getCoaches')->name('get-coaches');
  Route::post('get-log', 'AccountController@getLog')->name('get-log');
  Route::get('get-sports', 'AccountController@getSports')->name('get-sports');
  Route::get('get-plans', 'AccountController@getPlans')->name('get-plans');
  Route::get('get-sports-plans', 'AccountController@getSportsPlans')->name('get-sports-plans');
});

Route::group(['prefix' => 'blog'], function ($router) {
  Route::post('articles', 'BlogPageController@getArticles');
  Route::post('article', 'BlogPageController@getArticle');
  Route::post('articles-pagination', 'BlogPageController@articlesPagination');
  Route::get('articles-sidebar', 'BlogPageController@articlesSidebar');
});

/* This rout for test page form email */
Route::get('indexForm', 'MailController@indexForm');
/* end */

Route::post('send_mail', 'MailController@sendMail')->name('send-mail');

Route::get('/payment', 'PaymentController@index');
Route::get('/execute-payment', 'PaymentController@execute')->name('execute');
Route::post('/create-payment', 'PaymentController@create')->name('create-payment');

//Route::get('plan/create', 'SubscriptionController@createPlan');
//Route::get('plan/list', 'SubscriptionController@listPlan');
//Route::get('plan/{id}', 'SubscriptionController@showPlan');
//Route::get('plan/{id}/activate', 'SubscriptionController@activatedPlan');
//Route::post('plan/{id}/agreement/create', 'SubscriptionController@createAgreement')->name('create-agreement');
//
//Route::get('/execute-agreement/{success}', 'SubscriptionController@executeAgreement');
// filling sport_id in coach table in db
/* Route::post('/cadabra', function () {
 *     $countChange = 0;
 *     $coaches = \App\Coach::all();
 *     $sports = \App\Sport::all();
 *     foreach ($coaches as $item) {
 *         foreach ($sports as $sport) {
 *             if ($item->sport == $sport->name) {
 *                 $item->sport_id = $sport->id;
 *                 $item->save();
 *                 $countChange ++;
 *             }
 *         }
 *     }
 *     return ['good!' => $countChange];
 * }); */
