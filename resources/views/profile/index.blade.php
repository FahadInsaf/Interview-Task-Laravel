@extends('layout.header')
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('/app-assets/css/plugins/forms/form-validation.css')}}">
 <link rel="stylesheet" type="text/css" href="{{asset('/app-assets/vendors/css/file-uploaders/dropzone.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('/app-assets/css/plugins/forms/form-file-uploader.css')}}">
@endsection
@section('breadcrumb')
 <form action="{{ url('admin/saveuser') }}" class="" id="form_submit" method="post" enctype="multipart/form-data">
 {{ csrf_field() }}
    <h2 class="content-header-title float-left mb-0">Profile</h2>

    <div class="breadcrumb-wrapper">         

        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{url('admin/home')}}">Profile</a>
            </li>
            <li class="breadcrumb-item"><a href="#">{{$data['page_title']}}</a>
            </li>
        </ol>

    </div>
@endsection
@section('content')
        <div class="row mb-2">
            <div class="col-md-8">
        <ul class="nav nav-pills mt-2 mb-xl-n50" role="tablist">
            <li class="nav-item">
                <a class="nav-link show active" id="account-pill-general" data-toggle="pill" href="#home" aria-expanded="true">
                <span class="font-weight-bold">Account Info</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="account-pill-general" data-toggle="pill" href="#settings" aria-expanded="true">
                <span class="font-weight-bold">Settings</span>
                </a>
            </li>
        </ul>
      </div>

     <div class="col-md-12 text-right">
          <button type="submit" class="btn btn-primary mb-1 mb-sm-0 mr-0 mr-sm-1">Save Changes</button>
     </div>

    </div>

<div class="content-body">
    <section id="basic-input">
        <div class="card">
<div class="card-body">
    <div class="col-md-12">
       
    <div class="tab-content">
        <div id="home" class="tab-pane fade active in show">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group m-form__group">
                        <label>Role</label>
                        <select name="role_id" class="form-control" data-option-id="{{(isset($data['results']->role_id) ? $data['results']->role_id : '')}}">
                            <option value="">Select</option>
                            @foreach($data['roles'] as $key=>$value)
                            <option value="{{$value->id}}">{{$value->role_title}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="form-group m-form__group">
                        <label>First Name</label>
                        <input type="text" name="first_name" class="form-control m-input m-input--square" value="{{(isset($data['results']->first_name) ? $data['results']->first_name : '')}}">
                    </div>

                </div>
                <div class="col-md-3">
                    <div class="form-group m-form__group">
                        <label>Last Name</label>
                        <input type="text" name="last_name" class="form-control m-input m-input--square" value="{{(isset($data['results']->id) ? $data['results']->last_name : '')}}">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group m-form__group">
                        <label>Email</label>
                        <input type="text" name="email" class="form-control m-input m-input--square" value="{{(isset($data['results']->email) ? $data['results']->email : '')}}">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group m-form__group">
                        <label>Phone Number</label>
                        <input type="text" name="phone" class="form-control m-input m-input--square" value="{{(isset($data['results']->phone) ? $data['results']->phone : '')}}">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group m-form__group">
                        <label>Status</label>
                        <select name="status" class="form-control" data-option-id="{{(isset($data['results']->status) ? $data['results']->status : '')}}">
                            <option value="">Select</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>
            </div>
           
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group" >
                        <label>
                            Upload Picture
                        </label>
                        <div  action="{{url('admin/upload_file?url=-public-uploads-users-dp') }}" class="dropzone" id="dropzoneupload">
                            <div class="dz-message">Drop files here or click to upload.</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid mt-3" src="{{isset($data['results']->dp)?url('/').''. $data['results']->dp:'' }}"> 
                </div>
                    <input class="form-control" name="dp" type="hidden" value="{{(isset($data['results']->dp) ? $data['results']->dp : '')}}">
                    <input class="form-control" name="id" type="hidden" value="{{(isset($data['results']->id) ? $data['results']->id : '')}}">
            </div>
        </div>
     
        <div id="settings" class="tab-pane fade">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group m-form__group">
                        <label>Password</label>
                        <input type="password" placeholder="{{(isset($data['results']->id) ? 'Type in to update password' : '')}}" name="password" class="form-control password m-input m-input--square" value="">
                    </div>

                </div>
                <div class="col-md-3">
                    <div class="form-group m-form__group">
                        <label>Confirm Password</label>
                        <input type="password" name="cpassword" class="form-control cpassword password m-input m-input--square" value="">
                    </div>
                </div>
            </div>
      </div>
   
        </form>
    </div>
    </div>
    </div>
</section>
</div>
@endsection

@section('js')
    <script src="{{asset('/app-assets/vendors/js/forms/validation/jquery.validate.min.js')}}"></script>
     <script src="{{asset('/app-assets/vendors/js/extensions/dropzone.min.js')}}"></script>
    <script src="{{asset('/app-assets/vendors/js/forms/select/select2.full.min.js')}}"></script>
 
    <script type="text/javascript">
        $('.profile').addClass('active');
        $('#form_submit').validate({
            rules: {
                'role_id': {
                    required: true
                },
                'first_name': {
                    required: true
                },
                'last_name': {
                    required: true
                },
                'email': {
                    required: true,
                    email: true
                },

                'cpassword': {
                    equalTo: '.password'
                },
                'status': {
                    required: true
                },
            }
        });
          DropzoneSinglefunc('dropzoneupload','.png,.jpg,.jpeg',1,'dp');
          DropzoneSinglefunc('documentupload','.pdf,.doc,.docx',1,'document');
    </script>
@endsection

