<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfessionalDetails extends Model
{
    public $table = "user_professional_details";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["emirate", "field_of_study", "is_working", "emirate_id_no", "emirate_id_card_file", "personal_photo_file", "personal_photo_file", "passport_back_file"
         
    ];
    
    public function user()
    {
        return $this->belongsTo("App\User");
    }
    
}
