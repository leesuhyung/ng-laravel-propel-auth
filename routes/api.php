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
Route::group([
    'prefix' => 'auth',
    'namespace' => 'Auth'
], function () {
    Route::post('login', 'LoginController@login');
    Route::post('logout', 'LoginController@logout');
    Route::post('refresh', 'LoginController@refresh');
    Route::post('me', 'LoginController@me');
});

Route::group([
    'middleware' => 'auth:api',
    'prefix' => 'user',
    'namespace' => 'Api'
], function () {
    Route::get('/', 'UserController@index');
    Route::get('/{id}', 'UserController@show');
    Route::post('/', 'UserController@store');
    Route::delete('/', 'UserController@destroy');
});

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
