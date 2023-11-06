<?php
namespace App\Http\Controllers\Settings;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting\Settings;
use App\Models\User;

use Illuminate\Support\Facades\Session;

class SettingsController extends Controller
{
    public function layoutmode(){
        $layoutmode="light-layout";
        if(Session::has('layoutmode')){
            $layoutmode=Session::get('layoutmode');
            if($layoutmode=="light-layout"){
             $layoutmode="dark-layout";
            }else{
             $layoutmode="light-layout";
            }
        }
        Session::put('layoutmode', $layoutmode);
        $response=array('layoutmode'=>$layoutmode);
        return json_encode($response);
    }
    
   
  

 public function upload_file(Request $request){
        $path=$_GET['url'];
        $path = str_replace('-', '/', $path);
        if ( !empty( $_FILES ) ) {
            $date = new \DateTime();
            $current_dir=str_replace('uploads','',getcwd());
            $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
            $name=str_replace(' ', '', $_FILES['file']['name']);
            $filename=$date->getTimestamp().'-'. $name;
//            $filename=$name;
            $uploadPath = $current_dir.$path. DIRECTORY_SEPARATOR .$filename;
//            print_r($uploadPath); exit;
            move_uploaded_file( $tempPath, $uploadPath );
            $answer = array( 'answer' => 'File transfer completed' );
            $json = json_encode( $answer );
            $newFileName = $path.'/'.$filename;
            echo $newFileName;
        } else {
            echo 'No files';
        }
    }
     public function deletefiles(Request $request){
        $ds = DIRECTORY_SEPARATOR;  // Store directory separator (DIRECTORY_SEPARATOR) to a simple variable. This is just a personal preference as we hate to type long variable name.
        $storeFolder = 'uploads';
        $fileList = $_POST['fileList'];
        $path = $_POST['path'];
        $targetPath = getcwd(). $fileList;
         $path = str_replace('/', '/', $path);
         //dd(trim($fileList));
        if(isset($fileList)){
            unlink($targetPath.$fileList);
        }
    }


   

    
}
?>
