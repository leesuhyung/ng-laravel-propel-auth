<?php
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
    Route::get('refresh', 'LoginController@refresh');
});

Route::group([
    'prefix' => 'user',
    'namespace' => 'Api'
], function () {
    Route::get('/', 'UserController@index');
    Route::get('/{id}', 'UserController@show')->where('id', '[0-9]+');
    Route::get('/profile', 'UserController@profile');
    Route::post('/', 'UserController@store');
    Route::delete('/', 'UserController@destroy');
});
