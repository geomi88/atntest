<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInterestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('interests', function (Blueprint $table) {
            //
            $table->increments('id');
            $table->string("title");
        });

        $interests = ["Technology", "Sports, Fitness, Health & Wellness", "Photography, Film & Media", "Food & Beverages", "Writing, Book Clubs", "Society, Language & Culture", "Music", "Sci-Fi & Games", "Arts & Crafts", "Fashion & Beauty", "Learning, Profession , Career & Business", "Volunteering"];

        foreach($interests as $interest)
        {
            \DB::table("interests")->insert(["title" => $interest]);
        }     
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('interests');
    }
}
