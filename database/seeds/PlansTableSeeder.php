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
                'name' => '6 Months',
                'details' => 'test',
                'price' => 1.5,
                ],
            [
                'name' => '1 year',
                'details' => 'test1',
                'price' => 2.5,
            ],
            [
                'name' => '3 years',
                'details' => 'test2',
                'price' => 3.5,
            ],
            [
                'name' => '5 years',
                'details' => 'test3',
                'price' => 4.5,
            ],
            [
                'name' => 'free',
                'details' => 'test',
                'price' => 5.5,
            ],
        ]);
    }
}
