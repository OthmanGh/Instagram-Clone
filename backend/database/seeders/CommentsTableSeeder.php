<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Comment;
use Faker\Factory as Faker;

class CommentsTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 6; $i++) {
            Comment::create([
                'content' => $faker->sentence,
                'user_id' => $faker->numberBetween(1, 6),
                'post_id' => $faker->numberBetween(1, 6),
            ]);
        }
    }
}
