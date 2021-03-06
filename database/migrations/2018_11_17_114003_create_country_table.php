<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCountryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            //
            $table->increments('id');
            $table->string("name");

        });

        $countries = ["United Arab Emirates", "United Kingdom", "United States", "Uruguay"];
        foreach($countries as $country)
        {
            \DB::table("countries")->insert(["name" => $country]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('countries');
    }
}
