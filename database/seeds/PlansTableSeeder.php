<?php

use Illuminate\Database\Seeder;

class PlansTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('plans')->insert([
            [
                'name' => 'trial',
                'term' => 10,
                'price' => 1.5,
                ],
            [
                'name' => 'hundred',
                'term' => 100,
                'price' => 2.5,
            ],
            [
                'name' => 'unlimited',
                'term' => null,
                'price' => 3.5,
            ],
        ]);
    }
}
