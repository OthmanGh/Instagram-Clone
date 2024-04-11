<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;


class FeedController extends Controller
{
    public function getPosts()
    {
        $posts = Post::all();

        if ($posts->isEmpty()) {
            return response()->json([
                "message" => "No posts Found",
                'posts' => [],
            ]);
        }

        $formattedPosts = $posts->map(function ($post) {

            $user = User::find($post->user_id);

            return [
                "id" => $post->id,
                "caption" => $post->caption,
                "image" => $post->image,
                "user" => [
                    'username' => $user->username,
                    'profile_picture' => $user->profile_picture,
                ]
            ];
        });


        return response()->json([
            'message' => 'Posts retrieved successfully',
            'posts' => $formattedPosts
        ]);
    }
}
