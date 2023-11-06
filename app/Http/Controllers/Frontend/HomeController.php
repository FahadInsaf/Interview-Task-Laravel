<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Models\User;

use App\Models\Role\Role;
use App\Models\Contact\Contact;
use App\Models\Comment\Comment;

use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Session;

use Carbon\Carbon;

use Goutte\Client;



class HomeController extends Controller

{

    public function home()
    {
       
        return view('frontend.home.index');
    }

    
    public function savecontact(Request $request)
    {
        $id = $request->id;
        $data = $request->all();
        $action = "Added";
        $affected_rows =  Contact::create($data);
        return Redirect('/userdashboard')->with('status','Feedback Send Successfully');
    }
    

    public function view_feedback()
    {
         $data['results'] = Contact::get();
         $data['page_title'] = "View Feed Back";
        return view('frontend.feedback.index',compact('data'));
    }

    public function add_comment($id)
    {

         $data['results'] = Contact::where('id',$id)->first();
         $data['page_title'] = "Save Comment";
        return view('frontend.feedback.save',compact('data'));
    }

    public function savecomment(Request $request,$id)
    {
        // $id = $request->id;
        $data = $request->all();
        $action = "Added";
        $affected_rows =  Comment::create($data);
        return Redirect('/add_comment/'.$id)->with('status','Feedback Send Successfully');
    }

    public function view_comment($id)
    {
         $data['results'] = Comment::where('feedback_id',$id)->get();
         $data['page_title'] = "View Comment";
        return view('frontend.feedback.view_comment',compact('data'));
    }
   
    public function login()
    {

        return view('frontend.auth.login');

    }

    public function register()
    {

        return view('frontend.auth.register');

    }

    public function userregister(Request $request)

    {

        $id = $request->id;

        $modal = new User();

        $data = $request->all();

        $data['password'] = bcrypt($request->password);

        $data['role_id']=2;

        $email_check=User::where('email',$request->email)->first();

        // dd($data);

        if(!empty( $email_check)){

            $message['title']= 'Error';

            $message['text'] ='email already exists';

            Session::put('message', $message);

            return Redirect()->back();

        }

        if ($id) {

            $action = "Updated";

            $modal = App\Models\Role\User::find($id);

            $affected_rows = $modal->update($data);

        }else{

        // dd($data);

            $modal =  $modal::create($data);

        }

              return redirect('/login');

    }

    

   public function userlogin(Request $request)

    {

            $email = $request->get('email');

            $password = $request->get('password');

            if (Auth::attempt(['email' => $email, 'password' => $password,'role_id'=>2]))

             {

                return redirect('/userdashboard');

             }

             else

             {

                 return redirect('/login');

             }



    }

     public function userlogin_buyer(Request $request)

    {

            $email = $request->get('email');

            $password = $request->get('password');


            if (Auth::attempt(['email' => $email, 'password' => $password,'role_id'=>6]))

             {

                return redirect('/userdashboard_buyer');

             }

             else

             {

                 return redirect('/login');

             }



    }

    public function userdashboard()
    {
        $userid =  Auth::id();
       
        return view('frontend.dashboard.user_dashboard');
    }

    

    public function userlogout()

    {

        $user = Auth::user();

            Auth::logout();

            Session::flush();

            return Redirect('/');

    }

    

    public function userprofile(Request $request)
    {
        $data['page_title'] = "Profile";
        $userid =  Auth::id();
        $data['roles'] = Role::get();
        $data['results'] = User::where('id',$userid)->first();

        return view('frontend.profile.index' ,compact('data'));
    }


    public function updateuser(Request $request)
    {
        $id = $request->id;
        $data = $request->all();
         //dd($data);
        unset($data['cpassword']);

        $action = "Added";
        if(!empty($data['password'])){
            $data['password'] = Hash::make($data['password']);
        }else{
            unset($data['password']);
        }

    
        if($request->hasfile('dp'))

        {

          $file = $request->file('dp');

          $extension = $file->getClientOriginalExtension();

          $filename =time().".".$extension;

            $file->move(public_path().'/uploads/users/dp',$filename);
          $data['dp'] ='/public/uploads/users/dp/'.$filename;
           
          $request->dp = $data['dp'];
 

        }
       
        $data['name'] = $data['first_name'] . ' ' . $data['last_name'];
        if ($id) {
            $action = "Updated";
            $affected_rows = User::find($id)->update($data);
        } else {
            $affected_rows =  User::create($data);
        }
       
        return Redirect('/userprofile')->with('status','User Updated Successfully');
    }

    
    
    public function change_status($status,$id)
    {
        $data = array('status'=>$status);

        $update = Bid::where('id',$id)->update($data);



        if($status=='Approved')

        {

            return redirect('Approved')->with('status','Bids Approved Successfully');

        }

        
    }
   

    

}

?>

