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

    /**
     * Get the articles for the sport.
     */
    public function articles()
    {
        return $this->hasMany('App\Articl', 'categories');
    }

    public function users()
    {
        return $this->belongsToMany('App\User')->withPivot('count')->withTimestamps();
    }
}
