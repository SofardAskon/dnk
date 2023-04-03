<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserGroup;
use Mail;
use Illuminate\Support\Str;

class StartCourse extends Controller
{

    public $password;


    public function createUser(Request $request) {
        

        $amount = $request->amount;
        $reasonCode = $request->reasonCode;

        return $amount;

        if($amount == 3699 && $reasonCode == 1100) {
            
            $email = $request->email;
            $this->password = Str::random(10);

            echo $this->password;
    
            $data = array(
                'name' => $email,
                'email' => $email,
                'password' => $this->password
            );

    
            if(User::where('email', $data['email'])->exists()) {
                exit;
            }
    
    
    
            $user = User::create($data);
            if($user) {
                $data_group = array(
                    'user_id' => $user->id,
                    'group_id' => 129
                );
    
                $user = UserGroup::create($data_group);
                
                
    
                // $token = "5035266615:AAFNrf7CfX4fUtGdDdEovVLtLijNIjVbvPw";
                // $chat_id = "-674769629";
    // 
                // fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$request->password}","r");
                
    
                Mail::send([], [], function ($message) {
                    global $request;
                    echo $this->password;
                    
                    $message->to($request->email);
                    $message->subject('Доступы к платформе Traffic Jack Team');
                    $message->setBody('<p><a href-"https://pl.labrand.site">https://pl.labrand.site</a><p>Логин: '.$request->email.'<br>Пароль: '.$this->password, 'text/html');

                });
    
                
            }


        }



    }
}
