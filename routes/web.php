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
});

Route::post('/registration', 'RegistrationController@createRegistration');

Route::group([ 'prefix' => 'admin' ], function ($router) {
    Route::get('/', 'Admin\AdminController@index');
    Route::get('/blog', 'Admin\AdminBlogController@index')->name('admin-blog');
    Route::get('/blog/create', 'Admin\AdminBlogController@create')->name('admin-blog-create');
    Route::post('/blog/store', 'Admin\AdminBlogController@store')->name('admin-blog-store');
    Route::get('/blog/edit/{id}', 'Admin\AdminBlogController@edit')->name('admin-blog-edit');
    Route::post('/blog/update/', 'Admin\AdminBlogController@update')->name('admin-blog-update');
    Route::get('/blog/show/{param}', 'Admin\AdminBlogController@show')->name('admin-blog-show');
    Route::get('/blog/delite/{id}', 'Admin\AdminBlogController@destroy')->name('admin-blog-delite');
});
