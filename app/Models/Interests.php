<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Interests extends Model
{
    public $table = "interests";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["title"
    ];
    
    
}
