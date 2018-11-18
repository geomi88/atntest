<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    public $table = "countries";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["name"
    ];
    
    
}
