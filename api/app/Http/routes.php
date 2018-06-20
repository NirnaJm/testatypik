<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/','HomeController@index');

//Pour tester api dans le navigateur méthode GET
//$app->get('/login','UserController@login');

$app->post('/login','UserController@login');
