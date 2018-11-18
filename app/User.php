<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function person_detail()
    {
        return $this->hasOne("App\Models\UserPersonalDetails");
    }

    public function professional_detail()
    {
        return $this->hasOne("App\Models\UserProfessionalDetails");
    }

    public function user_interests()
    {
        return $this->hasMany("App\Models\UserInterests");
    }
}
