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

    public function users()
	{
		return $this->belongsToMany('App\User','user_interests','interest_id','user_id')->withPivot('user_id');
	}
    
    
}
