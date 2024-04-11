<?php

use App\Http\Controllers\FeedController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('cors')->group(function () {
    Route::post('register', [UserController::class, 'register']);
    Route::post('login', [UserController::class, 'login']);

    Route::middleware('auth:api')->group(function () {
        Route::get('refresh', [UserController::class, 'refreshToken']);
        Route::get('logout', [UserController::class, 'logout']);
        Route::get('user', [UserController::class, 'getUser']);

        Route::post('profile', [ProfileController::class, 'addPost']);
        Route::put('profile', [ProfileController::class, 'updateProfile']);

        Route::get('posts', [FeedController::class, 'getPosts']);
    });
});

// Route::group(['prefix' => 'auth', 'middleware' => 'cors'], function () {
//     Route::post('/login', 'UserController');
//     Route::post('/register', 'UserController');
// });
