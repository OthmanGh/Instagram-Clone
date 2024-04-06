<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

    // public function up(): void
    // {
    //     Schema::create("users", function (Blueprint $t) {
    //         $t->id();
    //         $t->string("name", 255);
    //         $t->string("email", 255)->unique()->index(); // index creates an index on the specified column, which can improve query performance.
    //         // unique:  ensures that the values in the specified column are unique across all rows in the table.
    //         $t->string("profile_picture");
    //         $t->string("password", 255);
    //         $t->string("bio", 255)->nullable(); // When a column is marked as nullable, it means that the column can accept NULL values.

    //         $t->timestamps(); //  timestamps() method is used to add two timestamp columns, created_at and updated_at, to the table being created or modified. These columns automatically track the creation and last update times of records in the table.
    //     });
    // }



    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('email', 255)->unique()->index();
            $table->string('profile_picture', 255)->nullable(); // Adjust the length as needed
            $table->string('password', 255);
            $table->string('bio', 255)->nullable();
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
