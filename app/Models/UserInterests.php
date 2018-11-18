<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserInerests extends Model
{
    public $table = "user_interests";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["interest_id"
    ];
    
    public function user()
    {
        return $this->belongsTo("App\User");
    }

}
