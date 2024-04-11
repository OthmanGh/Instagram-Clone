<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Follower;
use Faker\Factory as Faker;

class FollowersTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 6; $i++) {
            Follower::create([
                'user_id' => $faker->numberBetween(1, 6),
            ]);
        }
    }
}
