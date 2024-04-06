<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    // public function up(): void
    // {
    //     Schema::create('likes', function (Blueprint $table) {
    //         $table->id('like_id');
    //         $table->unsignedBigInteger('user_id');
    //         $table->unsignedBigInteger('post_id');
    //         $table->timestamps();

    //         $table->foreign('user_id')->references('id')->on('users');
    //         $table->foreign('post_id')->references('id')->on('posts');
    //     });
    // }

    public function up(): void
    {
        Schema::create('likes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('post_id');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('post_id')->references('id')->on('posts');
        });
    }

    public function down(): void

    {
        Schema::dropIfExists("likes");
    }
};
