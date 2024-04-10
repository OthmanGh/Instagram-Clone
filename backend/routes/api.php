<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group([
    "middleware" => 'cors'
], function () {
    Route::post('register', [UserController::class, 'register']);
    Route::post('login', [UserController::class, 'login']);
});


Route::group([
    "middleware" => ['auth:api']
], function () {
    Route::get('logout', [UserController::class, 'logout']);
    Route::get('refresh', [UserController::class, 'refreshToken']);
});
