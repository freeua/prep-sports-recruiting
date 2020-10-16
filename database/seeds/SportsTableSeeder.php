<?php

use Illuminate\Database\Seeder;

class SportsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sports')->insert([
            [
                'name' => 'BASEBALL',
            ],
            [
                'name' => 'BASKETBALL - MEN',
            ],
            [
                'name' => 'BASKETBALL - WOMEN',
            ],
            [
                'name' => 'CROSS COUNTRY - MEN',
            ],
            [
                'name' => 'CROSS COUNTRY - WOMEN',
            ],
            [
                'name' => 'FIELD HOCKEY - MEN',
            ],
            [
                'name' => 'FIELD HOCKEY - WOMEN',
            ],
            [
                'name' => 'FOOTBALL',
            ],
            [
                'name' => 'GOLF - MEN',
            ],
            [
                'name' => 'GOLF - WOMEN',
            ],
            [
                'name' => 'GYMNASTICS',
            ],
            [
                'name' => 'ICE HOCKEY - MEN',
            ],
            [
                'name' => 'ICE HOCKEY - WOMEN',
            ],
            [
                'name' => 'LACROSSE - MEN',
            ],
            [
                'name' => 'LACROSSE - WOMEN',
            ],
            [
                'name' => 'RUGBY - MEN',
            ],
            [
                'name' => 'RUGBY - WOMEN',
            ],
            [
                'name' => 'SOCCER - MEN',
            ],
            [
                'name' => 'SOCCER - WOMEN',
            ],
            [
                'name' => 'SOFTBALL',
            ],
            [
                'name' => 'SWIMMING/DIVING - MEN',
            ],
            [
                'name' => 'SWIMMING/DIVING - WOMEN',
            ],
            [
                'name' => 'TENNIS - MEN',
            ],
            [
                'name' => 'TENNIS - WOMEN',
            ],
            [
                'name' => 'TRACK & FIELD - MEN',
            ],
            [
                'name' => 'TRACK & FIELD - WOMEN',
            ],
            [
                'name' => 'VOLLEYBALL - MEN',
            ],
            [
                'name' => 'VOLLEYBALL - WOMEN',
            ],
            [
                'name' => 'WATER POLO - MEN',
            ],
            [
                'name' => 'WATER POLO - WOMEN',
            ],
            [
                'name' => 'WRESTLING - MEN',
            ],
            [
                'name' => 'WRESTLING - WOMEN',
            ],
        ]);
    }
}
