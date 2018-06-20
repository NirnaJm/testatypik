<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function login(Request $request){
      $email = $request->input('email');
      $password = $request->input('password');
      
//Créer password en base
  //  var_dump(app('hash')->make('password'));
    //exit;

    $user = User::query()->where('email',$email)->first();
    if(!$user){
      abort(401);
    }

    //si mdp ne correspond pas
    if(!app('hash')->check($password,$user->password)){
      abort(401);
    }

    return response()->json($user);

    //
  }
}
