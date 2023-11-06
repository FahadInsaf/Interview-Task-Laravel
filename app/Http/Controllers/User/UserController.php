<?php
namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;
use App\Models\Role\Role;
use App\Models\Bid\Bid;
use App\Models\User;
use App\Http\Requests;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;
use App\Models\Training\Like;
use App\Models\Comment\Comment;
use App\Models\Lot\Lot;

use App\Models\Training\TrainingResource;
class UserController extends Controller
{

    public  function role($id = -1)
    {
        $data['page_title'] = "Add Role";
        if ($id != -1) {
            $data['page_title'] = "Update Role";
            $data['results'] = Role::where('id', $id)->first();
        }
        return view('roles.save', compact('data'));
    }
    public function userstatus(Request $request){
        $id = $request->id;
        $data = $request->all();
        $affected_rows = User::find($id)->update($data);
        $response=array('status'=>1,'msg'=>'Data Updated');
        $response=json_encode($response);
        return $response;
    }
    public function saverole(Request $request)
    {
        $id = $request->id;
        $data = $request->all();
        $action = "Added";
        if ($id) {
            $action = "Updated";
            $modal = Role::find($id);
            $affected_rows = $modal->update($data);
        } else {
            $affected_rows =  Role::create($data);
        }
        $message=   set_message($affected_rows,'Role',$action);
        Session::put('message', $message);
        return Redirect('/admin/roles');
    }
    public  function roles()
    {
        $data['results'] =  Role::get();
        return view('roles.index', compact('data'));
    }
    public function deleterole($id)
    {
        $affected_rows = Role::find($id)->delete();
        $message=   set_message($affected_rows,'Role','Deleted');
        Session::put('message', $message);
        return redirect()->back();
    }
    public  function users()
    {
        $data['page_title'] = "Users";
        $data['results'] =  User::get();
        return view('users.index', compact('data'));
    }
    public  function user($id = -1)
    {
        $data['page_title'] = "Add User";
        $data['roles'] = Role::get();
        if ($id != -1) {
            $data['page_title'] = "Update User";
            $data['results'] = User::where('id', $id)->first();
        }
        return view('users.save', compact('data'));
    }
    public function saveuser(Request $request)
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
        $data['name'] = $data['first_name'] . ' ' . $data['last_name'];
        if ($id) {
            $action = "Updated";
            $affected_rows = User::find($id)->update($data);
        } else {
            $affected_rows =  User::create($data);
        }
        $message=   set_message($affected_rows,'User',$action);
        Session::put('message', $message);
        return Redirect('/admin/users');
    }

    public function deleteuser($id)
    {
        $affected_rows = User::find($id)->delete();
        $message=   set_message($affected_rows,'User','Deleted');
        Session::put('message', $message);
        return Redirect('/admin/users');
    }
    
     public function adminlogout(){
        Auth::logout();
        Session::flush();
        return redirect('admin/login');
    }

    public function uploadfile(Request $request){

        $path=$_GET['url'];

        $path = str_replace('-', '/', $path);

        if ( !empty( $_FILES ) ) {

            $date = new \DateTime();

            $current_dir=str_replace('uploads','',getcwd());

            $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];

            $name=str_replace(' ', '', $_FILES['file']['name']);

            $uploadPath = $current_dir.$path. DIRECTORY_SEPARATOR .$date->getTimestamp().'-'. $name;

            // dd(  $uploadPath);

            move_uploaded_file( $tempPath, $uploadPath );

            $answer = array( 'answer' => 'File transfer completed' );

            $json = json_encode( $answer );

            $newFileName = $date->getTimestamp().'-'. $name;

            return response()->json(['success' => true,

             'payload' => $newFileName]);

        } else {

            echo 'No files';

        }

    }

    public function deletefiles(Request $request){

                $ds = DIRECTORY_SEPARATOR;  // Store directory separator (DIRECTORY_SEPARATOR) to a simple variable. This is just a personal preference as we hate to type long variable name.

                $storeFolder = 'uploads';

                $fileList = $_POST['fileList'];

                $path = $_POST['path'];

                $targetPath = getcwd(). $path;

                if(isset($fileList)){

                    unlink($targetPath.$fileList);

                }

    }

    public function profile(Request $request)
    {
        
        $data['page_title'] = "Profile";
        $data['roles'] = Role::get();
        $data['results'] = User::get()->first();
        return view('profile.index' ,compact('data'));
    }
}

?>
