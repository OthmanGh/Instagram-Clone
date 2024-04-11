<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function addPost(Request $request)
    {
        $request->validate([
            'caption' => 'required|string|max:255',
            'image' => 'image|mimes:jpgeg, png, jpg|max:2048',
        ]);

        $user = Auth::user();

        if (!$user) {
            return response()->json([
                "status" => 'error',
                "message" => "User not found",
            ], 404);
        }

        if ($request->hasFile('image')) {

            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $fileName = time() . '.' . $extension;
            $file->move(public_path('/post_images'), $fileName);
            $imagePath = '/post_images/' . $fileName;
        } else {
            return response()->json([
                "status" => "error",
                "message" => "Image not provided",
            ], 400);
        }

        $post = new Post();
        $post->cation = $request->input('caption');
        $post->image = $imagePath;
        $post->user_id = $user->id;
        $post->save();

        return response()->json([
            "status" => "success",
            "message" => "Post Created successfully",
            "post" => $post,
        ], 201);
    }



    public function updateProfile(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'bio' => 'nullable|string|max:255',
            'profile_picture' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $userId = Auth::id();

        $user = User::find($userId);

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found',
            ], 404);
        }

        $userData = [
            'username' => $request->input('username'),
            'bio' => $request->input('bio'),
        ];

        if ($request->hasFile('profile_picture')) {
            $file = $request->file('profile_picture');
            $extension = $file->getClientOriginalExtension();
            $fileName = time() . '.' . $extension;
            $file->move(public_path('/profile_pictures/'), $fileName);

            if ($user->profile_picture) {
                $oldImagePath = public_path('/profile_pictures/') . basename($user->profile_picture);
                if (file_exists($oldImagePath)) {
                    unlink($oldImagePath);
                }
            }

            $userData['profile_picture'] = '/profile_pictures/' . $fileName;
        }

        $user->update($userData);

        $token = Auth::login($user);

        return response()->json([
            'status' => 'success',
            'message' => 'Profile updated successfully',
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }
}
