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
Route::get('/admin', 'Admin\AdminController@index');
Route::get('/admin/blog', 'Admin\AdminBlogController@index');
Route::get('/admin/admin-blog/create', 'Admin\AdminBlogController@create');
Route::post('/admin/admin-blog/store', 'Admin\AdminBlogController@store')->name('admin-blog-store');
