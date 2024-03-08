<?php

use App\Http\Controllers\BejegyzesekController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\TevekenysegController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route:: get('/bejegyzesek',[BejegyzesekController::class,'index']);
Route:: get('/osztalyok',[Controller::class,'index']);
Route:: get('/bejegyzesek/{osztaly_id}',[BejegyzesekController::class,'show']);
Route:: get('/tevekenysegek',[TevekenysegController::class,'index']);
Route:: post('/bejegyzes',[BejegyzesekController::class,'store']);

