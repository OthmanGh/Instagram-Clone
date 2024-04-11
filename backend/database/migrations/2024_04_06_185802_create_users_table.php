<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{



    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('full_name', 255)->nullable();
            $table->string('username')->unique()->nullable();
            $table->string('email', 255)->unique()->index();
            $table->string('profile_picture', 255)->nullable();
            $table->string('password', 255);
            $table->string('bio', 500)->nullable();
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
