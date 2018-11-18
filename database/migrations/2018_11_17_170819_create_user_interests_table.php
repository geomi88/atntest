<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserInterestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_interests', function (Blueprint $table) {
            //
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->foreign("user_id")
                    ->on("users")
                    ->references("id")
                    ->OnUpdate("cascade")
                    ->onDelete("cascade");
            $table->unsignedInteger('interest_id');
            $table->foreign("interest_id")
                    ->on("interests")
                    ->references("id")
                    ->OnUpdate("cascade")
                    ->onDelete("cascade");
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
        Schema::dropIfExists('user_interests');
    }
}
