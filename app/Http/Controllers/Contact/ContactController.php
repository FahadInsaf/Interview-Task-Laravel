<?php

namespace App\Http\Controllers\Contact;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact\Contact;
use App\Models\Comment\Comment;
use Illuminate\Support\Facades\Session;

class ContactController extends Controller
{

    public function view_feedback()
    {
        $data['page_title'] = "View Feed Back";
        $data['results'] = Contact::get();
        return view('contact.index',compact('data'));
    }

    public function change_status($status,$id)
    {
        $data = array('status'=>$status);

        $update = Contact::where('id',$id)->update($data);



        if($status=='Approved')

        {

            return redirect('admin/view_feedback')->with('status','Feed Back Approved Successfully');

        }

        
    }

    public function view_comment($id)
    {
        $data['page_title'] = "View Comment";
        $data['results'] = Comment::where('feedback_id',$id)->get();
        return view('contact.view_comment',compact('data'));
    }

}

?>