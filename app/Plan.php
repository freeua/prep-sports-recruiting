<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Plan extends Model
{
    use Notifiable;

    //    protected $guarded = [];

    public $fillable = ['name','details','price'];

    public function users()
    {
        $this->belongsToMany('App\User');
    }
}
