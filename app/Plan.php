<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $guarded = [];

    public $fillable = ['name','details','price'];

    public function users()
    {
        $this->belongsToMany('App\User');
    }
}
