<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Hash;
use App\Models\Country;
use App\Models\EducationLevel;
use App\Models\Interests;

class HomeController extends BaseController
{
    use AuthorizesRequests,  ValidatesRequests;

    public function index()
    {
        $country = Country::all();
        $education_level = EducationLevel::all();
        $interests = Interests::all();

        return view('home',["countries" => $country, "educations" => $education_level, "interests" => $interests]);
    }



}
