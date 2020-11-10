<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Articl extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'articls';

    /**
     * Get the sport that owns the article.
     */
    public function sport()
    {
        return $this->belongsTo('App\Sport', 'categories');
    }
}
