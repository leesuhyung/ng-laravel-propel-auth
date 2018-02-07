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

use Illuminate\Support\Facades\Route;

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
    Route::put('/{id}', 'UserController@update')->where('id', '[0-9]+');
    Route::get('/profile', 'UserController@profile');
    Route::post('/', 'UserController@store');
    Route::delete('/{id}', 'UserController@destroy');
});

Route::group([
    'prefix' => 'board',
    'namespace' => 'Api'
], function () {
    Route::get('/', 'BoardController@index');
    Route::get('/{id}', 'BoardController@show')->where('id', '[0-9]+');
    Route::put('/{id}', 'BoardController@update')->where('id', '[0-9]+');
    Route::post('/', 'BoardController@store');
    Route::delete('/{id}', 'BoardController@destroy');
});

Route::group([
    'prefix' => 'charts',
    'namespace' => 'Api'
], function () {
    Route::get('/', 'ChartController@index');
    Route::get('/data', 'ChartController@data');
});