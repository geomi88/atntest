<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EducationLevel extends Model
{
    public $table = "education_levels";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["name"
    ];
    
    
}
