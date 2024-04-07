<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 6; $i++) {
            User::create([
                "name" => $faker->name,
                "email" => $faker->unique()->safeEmail,
                "password" => bcrypt('secret'),
                "profile_picture" => null,
                "bio" => $faker->paragraph,
            ]);
        }
    }
}
