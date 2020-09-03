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
Route::get('/admin/blog', 'Admin\AdminBlogController@index')->name('admin-blog');
Route::get('/admin/blog/create', 'Admin\AdminBlogController@create')->name('admin-blog-create');
Route::post('/admin/blog/store', 'Admin\AdminBlogController@store')->name('admin-blog-store');
Route::get('/admin/blog/edit/{id}', 'Admin\AdminBlogController@edit')->name('admin-blog-edit');
Route::post('/admin/blog/update/', 'Admin\AdminBlogController@update')->name('admin-blog-update');
//Route::get('/admin/blog/show/', 'Admin\AdminBlogController@show')->name('admin-blog-show');
Route::get('/admin/blog/show/{param}', 'Admin\AdminBlogController@show')->name('admin-blog-show');
Route::get('/admin/blog/delite/{id}', 'Admin\AdminBlogController@destroy')->name('admin-blog-delite');
