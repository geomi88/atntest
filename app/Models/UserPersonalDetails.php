<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserPersonalDetails extends Model
{
    public $table = "user_personal_details";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'en_first_name', 'en_last_name', "en_middle_name", "ar_first_name", "ar_last_name", "ar_middle_name", "dob", "gender", "phone"
    ];
    
    public function user()
    {
        return $this->belongsTo("App\User");
    }

}
