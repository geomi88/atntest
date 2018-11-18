<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserProfessionalDetails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_professional_details', function (Blueprint $table) {
            //
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->foreign("user_id")
                    ->on("users")
                    ->references("id")
                    ->OnUpdate("cascade")
                    ->onDelete("cascade");
            $table->unsignedInteger('country_id');
            $table->foreign("country_id")
                    ->on("countries")
                    ->references("id")
                    ->OnUpdate("cascade")
                    ->onDelete("cascade");

            $table->string("emirate")->nullable();
            $table->unsignedInteger('education_level_id');
            $table->foreign("education_level_id")
                    ->on("education_levels")
                    ->references("id")
                    ->OnUpdate("cascade")
                    ->onDelete("cascade");
            $table->string("field_of_study",100);
            $table->integer("is_working"); //1=> true 0 => false
            $table->string("emirate_id_no",255)->nullable();

            $table->string("emirate_id_card_file")->nullable();
            $table->string("personal_photo_file")->nullable();
            $table->string("passport_front_file")->nullable();
            $table->string("passport_back_file")->nullable();  
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
        Schema::dropIfExists('user_professional_details');
    }
}
