@extends('frontend.layout.header')

<link rel="stylesheet" type="text/css" href="{{asset('/app-assets/css/colors.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('/app-assets/vendors/css/extensions/sweetalert2.min.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('/app-assets/css/plugins/extensions/ext-component-sweet-alerts.css')}}">

<link rel="stylesheet" type="text/css" href="{{asset('/app-assets/vendors/css/tables/datatable/dataTables.bootstrap4.min.css')}}">
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
                        <li class="item"><a href="{{url('/')}}">Home</a></li>
                        <li class="separator"><i class="feather-chevron-right"></i></li>
                        <li class="item current">{{$data['page_title']}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- end page title area -->


<section class="rn-product-area rn-section-gapTop">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                @if (session('status'))
                    <div class="alert alert-success">
                      {{ session('status') }}
                    </div>
                  @endif
               
            </div>
        </div>
        <br>
    	<div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-datatable p-2">
                        <table class="table table-stripped font-weight-bold">
                            <thead>
                                <tr>
		                            <th>Sr No</th>
		                            <th>Title</th>
		                            <th>Category</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($data['results'] as $key=>$value)
                                    <tr>
                                        <td>{{$key+1}}</td>
                                        <td>{{$value->title}}</td>
                                        <td>{{$value->category}}</td>
                                        <td>{{$value->description}}</td>
                                        <td>{{$value->status}}</td>
                                        <td>
                                            @if($value->status=="Approved")
                                            <a style="color:black;" href="{{url('add_comment/'.$value->id)}}">
                                                Edit Comment   
                                            </a>
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                                        
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection