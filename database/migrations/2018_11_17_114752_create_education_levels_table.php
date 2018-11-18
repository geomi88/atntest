<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEducationLevelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education_levels', function (Blueprint $table) {
            //
            $table->increments('id');
            $table->string("name");

        });

        $levels = ["High school graduate, diploma", "Bachelor’s degree", "Master’s degree", "Other"];

        foreach($levels as $level)
        {
            \DB::table("education_levels")->insert(["name" => $level]);

        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('education_levels');
    }
}
