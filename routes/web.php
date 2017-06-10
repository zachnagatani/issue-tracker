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
Auth::routes();

// Api
Route::get('/api/issues', 'IssuesController@getAll');
Route::get('/api/issues/{id}', 'IssuesController@getSingle');
Route::post('/api/issues/add', 'IssuesController@add');
Route::post('/api/issues/close/{id}', 'IssuesController@close');

// Web Routes
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/', 'AppController@index')->name('app');
Route::get('/metrics', 'AppController@index')->name('app');
Route::get('/issues', 'AppController@index')->name('app');
Route::get('/issues/{id}', 'AppController@index')->name('app');
Route::get('/main', 'AppController@index')->name('app');
