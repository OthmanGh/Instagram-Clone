<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    // public function up(): void
    // {
    //     Schema::create("comments", function (Blueprint $t) {
    //         $t->id("comment_id");
    //         $t->string("content");
    //         $t->unsignedBigInteger("user_id");
    //         $t->unsignedBigInteger("post_id");

    //         // Specify custom column names in the references method
    //         $t->foreign('user_id')->references('id')->on('users');
    //         $t->foreign('post_id')->references('id')->on('posts');
    //     });
    // }

    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->string('content');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('post_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('post_id')->references('id')->on('posts');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists("comments");
    }
};
