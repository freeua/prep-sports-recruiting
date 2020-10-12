<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::post('/registration', 'RegistrationController@createRegistration');

Auth::routes();

Route::group(['prefix' => 'auth', 'middleware' => 'api'], function () {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});
Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function () {

    Route::get('/', 'Admin\AdminController@index');
    Route::get('/blog', 'Admin\AdminBlogController@index')->name('admin-blog');
    Route::get('/blog/create', 'Admin\AdminBlogController@create')->name('admin-blog-create');
    Route::post('/blog/store', 'Admin\AdminBlogController@store')->name('admin-blog-store');
    Route::get('/blog/edit/{id}', 'Admin\AdminBlogController@edit')->name('admin-blog-edit');
    Route::post('/blog/update/', 'Admin\AdminBlogController@update')->name('admin-blog-update');
    Route::get('/blog/show/{param}', 'Admin\AdminBlogController@show')->name('admin-blog-show');
    Route::get('/blog/delete/{id}', 'Admin\AdminBlogController@destroy')->name('admin-blog-delete');
    Route::get('/send', 'Admin\AdminController@send')->name('send-mail');
    Route::get('/user-account-management', 'Admin\AdminUserAccountManagementController@index');
    Route::get('/user-account-management/show/{param}', 'Admin\AdminUserAccountManagementController@show');
    Route::post('/user-account-management/search', 'Admin\AdminUserAccountManagementController@search');
});

Route::group(['prefix' => 'blog'], function ($router) {
    Route::post('articls', 'BlogPageController@getArticls');
    Route::post('articl', 'BlogPageController@getArticl');
    Route::post('articls-pagination', 'BlogPageController@articlsPagination');
});

Route::post('get-account-data', 'AccountController@getAccountData')->name('get-account-data');

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
