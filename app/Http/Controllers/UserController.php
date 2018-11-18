<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Models\UserPersonalDetails;
use App\Models\UserProfessionalDetails;
use App\Models\UserInterests;

class UserController extends BaseController
{
    use AuthorizesRequests,  ValidatesRequests;

    public function saveData()
    {
        $password = Hash::make('123456');

        $user = new User(["email"=>"developer1@mailinator.com","password" => $password]);
        $user->save();

        $person_detail  =  new UserPersonalDetails([
            "en_first_name" => "developerfirst",
            "en_last_name" => "developerlast",
            "en_middle_name" => "developermiddle",
            "ar_last_name" => "مطور",
            "ar_first_name" => "مطور",
            "ar_middle_name" => "مطور",
            "dob" => "1988-12-06",
            "phone" => "1233688909"

        ]);//UserPersonDetails
// dd($user);

// $person_detail->save()
// $user = User::with("person_detail")->find(1);
        $user->person_detail()->save($person_detail);
    }


}
