<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 20; $i++) {
            User::create([
                'full_name' => $faker->name,
                'username' => $faker->userName,
                'email' => $faker->unique()->safeEmail,
                'password' => bcrypt('password'),
                'profile_picture' => $faker->imageUrl,
                'bio' => $faker->paragraph,
            ]);
        }
    }
}
