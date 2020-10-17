<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sport extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * Get the coaches for the sport.
     */
    public function coaches()
    {
        return $this->hasMany('App\Coach');
    }
}
