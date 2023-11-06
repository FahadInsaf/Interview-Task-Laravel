@extends('frontend.layout.header')

<link href="{{asset('/frontend/css/dropzone.css')}}" rel="stylesheet" type="text/css">


@section('content')

 <!-- start page title area -->
    <div class="rn-breadcrumb-inner ptb--30">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <h5 class="title text-center text-md-start">{{$data['page_title']}}</h5>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-list">
                        <li class="item"><a href="{{url('/userprofile')}}">View Profile</a></li>
                        <li class="separator"><i class="feather-chevron-right"></i></li>
                        <li class="item current">{{$data['page_title']}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- end page title area -->

 <!-- create new product area -->
    <div class="create-area rn-section-gapTop">
        <div class="container">
            <div class="row g-5">
            	<div class="col-lg-2"></div>
                <div class="col-lg-8">
                     @if (session('status'))
                    <div class="alert alert-success">
                      {{ session('status') }}
                    </div>
                  @endif
                    <div class="form-wrapper-one">
                        <form action="{{ url('/updateuser') }}" class="" id="form_submit" method="post" enctype="multipart/form-data">
                        {{ csrf_field() }}
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-group ">
                                        <label>Role</label>
                                        <select name="role_id" data-option-id="{{(isset($data['results']->role_id) ? $data['results']->role_id : '')}}">
                                            <option value="">Select</option>
                                            @foreach($data['roles'] as $key=>$value)
                                            <option value="{{$value->id}}">{{$value->role_title}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group ">
                                        <label>First Name</label>
                                        <input type="text" name="first_name"  value="{{(isset($data['results']->first_name) ? $data['results']->first_name : '')}}">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group ">
                                        <label>Last Name</label>
                                        <input type="text" name="last_name"  value="{{(isset($data['results']->id) ? $data['results']->last_name : '')}}">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="text" name="email" value="{{(isset($data['results']->email) ? $data['results']->email : '')}}">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone"  value="{{(isset($data['results']->phone) ? $data['results']->phone : '')}}">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group m-form__group">
                                        <label>Status</label>
                                        <select name="status" data-option-id="{{(isset($data['results']->status) ? $data['results']->status : '')}}">
                                            <option value="">Select</option>
                                            <option>Active</option>
                                            <option>Inactive</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group m-form__group">
                                        <label>Password</label>
                                        <input type="password" placeholder="{{(isset($data['results']->password) ? 'Type in to update password' : '')}}" name="password" class="form-control password m-input m-input--square" value="">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group m-form__group">
                                        <label>Confirm Password</label>
                                        <input type="password" name="cpassword" class="form-control cpassword password m-input m-input--square" value="">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group" >
                                        <label>
                                            Upload Picture
                                        </label>
                                        <input class="form-control" name="dp" type="file" value="{{(isset($data['results']->dp) ? $data['results']->dp : '')}}">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <img class="img-fluid mt-3" src="{{isset($data['results']->dp)?url('/').''. $data['results']->dp:'' }}"> 
                                </div>
                                
                                <input class="form-control" name="id" type="hidden" value="{{(isset($data['results']->id) ? $data['results']->id : '')}}">
                            </div>
                            <br><br>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="input-box">
                                        <button type="Submit" class="btn btn-primary ">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-2"></div>
            </div>
        </div>
    </div>
    <!-- create new product area -->

<script src="{{asset('/frontend/js/dropzone.js')}}"></script>
<script src="{{asset('/frontend/js/dropzonescript.js')}}"></script>
<script src="{{asset('/frontend/js/jquery.min.js')}}"></script>
<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script> -->

<script type="text/javascript">

$('select[data-option-id]').each(function() {
        $(this).val($(this).data('option-id'));
    });

</script>
@endsection