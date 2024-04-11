<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;
use Faker\Factory as Faker;

class PostsTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 6; $i++) {
            Post::create([
                'caption' => $faker->sentence,
                'image' => $faker->imageUrl(),
                'user_id' => $faker->numberBetween(1, 6),
            ]);
        }
    }
}
