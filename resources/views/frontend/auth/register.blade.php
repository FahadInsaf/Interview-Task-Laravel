@extends('frontend.layout.header')

@section('content')
  

	<!-- start page title area -->
    <div class="rn-breadcrumb-inner ptb--30">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <h5 class="title text-center text-md-start">Sign Up</h5>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-list">
                        <li class="item"><a href="{{url('/')}}">Home</a></li>
                        <li class="separator"><i class="feather-chevron-right"></i></li>
                        <li class="item current">Sign Up</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- end page title area -->

    <!-- login form -->
    <div class="login-area rn-section-gapTop">
        <div class="container">
            <div class="row g-5">
                <div class=" col-lg-12 col-md-12 ml_md--0 ml_sm--0 col-sm-12">
                    <div class="form-wrapper-one registration-area">
                        <h4>Sign Up</h4>
                        <form action="{{url('/userregister')}}" method="post">
                            {{csrf_field()}}
                            <div class="mb-5">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" id="firstName" name="name">
                            </div>
                            <div class="mb-5">
                                <label for="name" class="form-label">First name</label>
                                <input type="text" id="firstName" name="first_name">
                            </div>
                            <div class="mb-5">
                                <label for="sastName" class="form-label">Last name</label>
                                <input type="text" id="sastName" name="last_name">
                            </div>
                            <div class="mb-5">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" id="exampleInputEmail1" name="email">
                            </div>
                            <div class="mb-5">
                                <label for="newPassword" class="form-label">Create Password</label>
                                <input type="password" id="newPassword" name="password">
                            </div>
                            <div class="mb-5">
                                <label for="exampleInputPassword1" class="form-label">Re Password</label>
                                <input type="password" id="exampleInputPassword1" name="password">
                            </div>
                            <div class="mb-5 rn-check-box">
                                <input type="checkbox" class="rn-check-box-input" id="exampleCheck1">
                                <label class="rn-check-box-label" for="exampleCheck1">Allow to all tearms &
                                    condition</label>
                            </div>
                            <button type="submit" class="btn btn-primary mr--15">Sign Up</button>
                            <a href="{{url('/login')}}" class="btn btn-primary-alta">Log In</a>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <!-- login form end -->

@endsection
@section('js')
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
	<script>
	$('#password, #confirm_password').on('keyup', function () {
    if ($('#password').val() == $('#confirm_password').val()) {
        $('#message').html('Matching').css('color', 'green');
    } else 
        $('#message').html('Not Matching').css('color', 'red');
});


          $(document).ready(function () {
        $(document).on('keyup','.password, .confirm_password',function(){
        	// console.log($('.confirm_password'));
            if ($('.password').val() == $('.confirm_password').val()) {
        $('#message').html('Matching').css('color', 'green');
  			  } else {
      	  $('#message').html('Not Matching').css('color', 'red');
      	}
          });  
          });  

</script>

@endsection




