<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Comment;

class CommentsTableSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        $numUsers = 6;
        $numPosts = 6;

        for ($i = 0; $i < 6; $i++) {
            Comment::create([
                "content" => $faker->sentence,
                "user_id" => $faker->numberBetween(1, $numUsers),
                "post_id" => $faker->numberBetween(1,  $numPosts),
            ]);
        }
    }
}
