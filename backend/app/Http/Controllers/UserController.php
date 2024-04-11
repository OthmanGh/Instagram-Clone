<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Exception;

use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;



class UserController extends Controller
{
    public function register(Request $request)
    {
        try {
            $request->validate([
                "full_name" => "required",
                "username" => "required|unique:users",
                "email" => "required|email|unique:users",
                "password" => "required|string|min:8",
            ]);

            $defaultProfilePicture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZTCX8XqSIC1QUe5HyP7SJ5__Ms7DdpKtYw&s';

            $user =  User::create([
                "full_name" => $request->full_name,
                "username" => $request->username,
                "email" => $request->email,
                "password" => Hash::make($request->password),
                "profile_picture" => $defaultProfilePicture,
            ]);

            $token = JWTAuth::fromUser($user);

            return response()->json([
                "status" => 201,
                "message" => "User registered successfully",
                "token" => $token,
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {

            return response()->json([
                "error" => $e->errors(),
                "message" => "Validation failed. Please check your input.",
            ], 400);
        } catch (\Exception $e) {
            return response()->json([
                "error" => $e->getMessage(),
                "message" => "An error occurred while registering the user.",
            ], 500);
        }
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                "email" => "required|email",
                "password" => "required"
            ]);

            $token = JWTAuth::attempt([
                "email" => $request->email,
                "password" => $request->password,
            ]);

            if (!empty($token)) {
                return response()->json([
                    "status" => 200,
                    "message" => "User logged in successfully",
                    "token" => $token,
                ]);
            } else {
                throw new \Exception("Invalid login details.");
            }
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                "error" => $e->errors(),
                "message" => "Validation failed. Please check your input.",
            ], 400);
        } catch (\Exception $e) {
            return response()->json([
                "error" => $e->getMessage(),
                "message" => "An error occurred during login.",
            ], 500);
        }
    }

    public function refreshToken()
    {
        $newToken = JWTAuth::refresh();

        return response()->json([
            "status" => true,
            "message" => "New Access token generated",
            "token" => $newToken,
        ]);
    }

    public function logout()
    {
        auth()->logout();
        return response()->json([
            "status" => true,
            "message" => "User logged out successfully"
        ]);
    }

    public function getUser()
    {
        $user = Auth()->user();
        return response()->json([
            "user" => $user,
        ]);
    }
}
