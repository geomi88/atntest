<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserPersonalDetails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_personal_details', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->foreign("user_id")
                    ->on("users")
                    ->references("id")
                    ->OnUpdate("cascade")
                    ->onDelete("cascade");
            
            $table->string("en_first_name");
            $table->string("en_last_name");
            $table->string("en_middle_name");
            $table->string("ar_first_name");
            $table->string("ar_last_name");
            $table->string("ar_middle_name");
            $table->date("dob");
            $table->enum("gender", ["Female","Male"]);
            $table->string("phone",20);   
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_personal_details');
    }
}
