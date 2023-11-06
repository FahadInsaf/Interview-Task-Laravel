
@extends('frontend.layout.header')
@section('content')

<!-- start page title area -->
    <div class="rn-breadcrumb-inner ptb--30">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <h5 class="title text-center text-md-start">Dashboard</h5>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-list">
                        <li class="item"><a href="{{url('/')}}">Dashboard</a></li>
                        <li class="separator"><i class="feather-chevron-right"></i></li>
                       
                    </ul>
                </div>
            </div>
        </div>
    </div>
<!-- end page title area -->

<section class="rn-product-area rn-section-gapTop">
    <div class="container">
    	<div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-datatable p-5">
                       <div class="row">
                            <div class="col-md-3"></div>
                       		<div class="col-md-6">
                                <div style="text-align: right;">
                                    <a href="{{url('view_comment/'.$data['results']->id)}}" class="btn btn-primary">View List</a>
                                </div><br>
                                 @if (session('status'))
                                    <div class="alert alert-success">
                                      {{ session('status') }}
                                    </div>
                                  @endif
                       			<div class="card total_product p-5">
                       				<form method="post" action="{{url('savecomment/'.$data['results']->id)}}" enctype="multipart/form-data">
                                        {{ csrf_field() }}
                                        <h2 style="color:black;">Comment Form</h2>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Comment</label>
                                                    <input type="text" name="comment" class="form-control" required>
                                                </div>
                                            </div>
                                          	<input type="hidden" name="user_name" value="{{Auth::user()->name}}">
                                          		<input type="hidden" name="feedback_id" value="{{isset($data['results']->id)? $data['results']->id :''}}">
                                             
                                            <div class="col-md-12">

                                                <button type="submit" class=" btn btn-primary">Submit</button>
                                            </div>
                                        </div>         
                                    </form>
                       			</div>
                       		</div>
                       		<div class="col-md-3"></div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


@endsection
