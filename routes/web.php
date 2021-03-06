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
    return view('home');
});

Route::get('/', ["uses" => "HomeController@index"]);

Route::post("/login", ["uses" => "Auth\LoginController@login"]);

Route::post("/save_personal_data", ["uses" => "UserController@savePersonalData"]);
Route::post("/save_professional_data", ["uses" => "UserController@saveProfessionalData"]);
Route::post("/save_interests", ["uses" => "UserController@saveUserInterests"]);
Route::get("/create_sample_user", ["uses" => "UserController@createSampleUser"]);
