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
use Illuminate\Http\Request;

class UserController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function savePersonalData(Request $request)
    {
        $this->validate(
            $request,
            [
                'email' => 'required|string|email',
                'password' => 'required',
                'conf_password' => 'required|same:password',
                'en_first_name' => 'required',
                'en_middle_name' => 'required',
                'en_last_name' => 'required',
                'ar_first_name' => 'required',
                'ar_middle_name' => 'required',
                'ar_last_name' => 'required',
                'dob' => 'required',
                'phone' => 'required',
            ]
        );

        $data = $request->all();
        $password = Hash::make($data['password']);

        $user = User::find($data['user_id']);
        $user->fill(["email" => $data["email"], "password" => $password]);
        $user->save();

        $data['dob'] = date('Y-m-d', strtotime($data['dob']));

        $person_detail = UserPersonalDetails::firstOrNew(["user_id" => $data['user_id']]);
        $person_detail->fill($data);
        $user->person_detail()->save($person_detail);

        return response()->json([
            'status' => true
        ]);
    }

    public function saveProfessionalData(Request $request)
    {
        if (\Auth::check()) {
            $this->validate(
                $request,
                [
                    'country_id' => 'required',
                    'emirate' => 'required',
                    'education_level_id' => 'required',
                    'field_of_study' => 'required',
                    'emirate_id_no' => 'required'
                ]
            );
        } else {
            $this->validate(
                $request,
                [
                    'country_id' => 'required',
                    'emirate' => 'required',
                    'education_level_id' => 'required',
                    'field_of_study' => 'required',
                    'emirate_id_no' => 'required',
                    'emirate_id_card_file' => 'required|max:10000|mimes:jpg,jpeg,png',
                    'personal_photo_file' => 'required|max:10000|mimes:jpg,jpeg,png',
                    'passport_front_file' => 'required|max:10000|mimes:jpg,jpeg,png',
                    'passport_back_file' => 'required|max:10000|mimes:jpg,jpeg,png',

                ]
            );
        }

        $data = $request->all();
        if ($request->hasFile("emirate_id_card_file")) {
            $request->file('emirate_id_card_file')->storeAs(
                'public/emirate_cards',
                $request->user()->id
            );
            $data['emirate_id_card_file'] = 'emirate_cards/' . $request->user()->id;
        }
        if ($request->hasFile("personal_photo_file")) {
            $request->file('personal_photo_file')->storeAs(
                'public/personal_photos',
                $request->user()->id
            );
            $data['personal_photo_file'] = 'personal_photos/' . $request->user()->id;
        }
        if ($request->hasFile("passport_front_file")) {
            $request->file('passport_front_file')->storeAs(
                'public/passport/front',
                $request->user()->id
            );
            $data['passport_front_file'] = 'passport/front' . $request->user()->id;
        }
        if ($request->hasFile("passport_back_file")) {
            $request->file('passport_back_file')->storeAs(
                'public/passport/back',
                $request->user()->id
            );
            $data['passport_back_file'] = 'passport/back' . $request->user()->id;
        }

        $user = User::find($data['user_id']);

        $professional_detail = UserProfessionalDetails::firstOrNew(["user_id" => $data['user_id']]);
        $professional_detail->fill($data);
        $user->professional_detail()->save($professional_detail);

        return response()->json([
            'status' => true
        ]);
    }

    public function saveUserInterests(Request $request)
    {
        /*$this->validate(
            $request,
            [
                'interests' => 'required|array'
            ]
        );*/
        $rules = [
            'interests' => 'required|array'
        ];

        $customMessages = [
            'required' => 'Please select atleast one'
        ];

        $this->validate($request, $rules, $customMessages);

        $data = $request->all();
        $user = User::find($data['user_id']);



        foreach ($data['interests'] as $interest) {
            if (!$user->interests->contains($interest['interest_id'])) {
                $user->interests()->attach($interest['interest_id']);
            }
        }

        return response()->json([
            'status' => true
        ]);


    }

    public function createSampleUser()
    {
        $password = Hash::make('123456');
        $email = "developer2@mailinator.com";
        $user = new User();
        $user->email = $email;
        $user->password = $password;
        $user->save();


    }

}
