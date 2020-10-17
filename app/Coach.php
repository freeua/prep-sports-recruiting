<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Coach extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * Get the sport that owns the coach.
     */
    public function sport()
    {
        return $this->belongsTo('App\Sport');
    }
}
