<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Post;

class PostsTableSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 6; $i++) {
            Post::create([
                'caption' => $faker->sentence,
                'image' => $faker->imageUrl(),
                'user_id' => $faker->numberBetween(1, 3),
            ]);
        }
    }
}
