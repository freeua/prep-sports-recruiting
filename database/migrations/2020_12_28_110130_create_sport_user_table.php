<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSportUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sport_user', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
			$table->unsignedInteger('sport_id');
			$table->unsignedInteger('user_id');
            $table->unsignedInteger('count')->nullable();
			$table->foreign('user_id')->references('id')->on('users');
			$table->foreign('sport_id')->references('id')->on('sports');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
		Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('sport_user');
    }
}
