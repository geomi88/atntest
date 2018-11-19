<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       // $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        //clear the existing user
        Auth::logout();
        $auth = false;
        $credentials = $request->only('email', 'password');
        $user = null;

        if (Auth::attempt($credentials, $request->has('remember'))) {
            $auth = true; // Success
            $user = Auth()->user();
            $user = \App\User::with(['person_detail', "professional_detail.country", "professional_detail.education_level", "interests"])->find($user->id);
        }

        if ($request->ajax()) {
            return response()->json([
                'auth' => $auth,
                'user' => $user
            ]);
        } 
    }
}
