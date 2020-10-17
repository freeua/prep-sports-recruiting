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
