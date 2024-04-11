<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('cors')->group(function () {
    Route::post('register', [UserController::class, 'register']);
    Route::post('login', [UserController::class, 'login']);

    Route::middleware('auth:api')->group(function () {
        Route::get('refresh', [UserController::class, 'refreshToken']);
        Route::get('logout', [UserController::class, 'logout']);
        Route::get('user', [UserController::class, 'getUser']);
    });
});
