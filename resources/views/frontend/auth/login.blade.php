@extends('frontend.layout.header')

@section('content')
 
 <!-- login form -->
    <div class="login-area rn-section-gapTop">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-2"></div>
                <div class=" col-lg-8 col-md-8 ml_md--0 ml_sm--0 col-sm-12">
                    <div class="form-wrapper-one">
                        <h4>Login</h4>
                        <form method="post" action="{{url('/userlogin')}}">
                            {{csrf_field()}}
                            <div class="mb-5">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" id="exampleInputEmail1" name="email">
                            </div>
                            <div class="mb-5">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" id="exampleInputPassword1" name="password">
                            </div>
                            <div class="mb-5 rn-check-box">
                                <input type="checkbox" class="rn-check-box-input" id="exampleCheck1">
                                <label class="rn-check-box-label" for="exampleCheck1">Remember me leter</label>
                            </div>
                            <button type="submit" class="btn btn-primary mr--15">Log In</button>
                            <a href="{{url('register')}}" class="btn btn-primary-alta">Sign Up</a>
                        </form>
                    </div>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
    </div>
    <!-- login form end -->
  
   
@endsection