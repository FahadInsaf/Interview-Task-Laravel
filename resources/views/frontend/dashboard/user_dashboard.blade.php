
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
                                    <a href="{{url('view_feedback')}}" class="btn btn-primary">View List</a>
                                </div><br>
                                 @if (session('status'))
                                    <div class="alert alert-success">
                                      {{ session('status') }}
                                    </div>
                                  @endif
                       			<div class="card total_product p-5">
                       				<form method="post" action="{{url('savecontact')}}" enctype="multipart/form-data">
                                        {{ csrf_field() }}
                                        <h2 style="color:black;">Feed Back Form</h2>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Title</label>
                                                    <input type="text" name="title" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Category</label><br>
                                                    <select name="category" class="form-control">
                                                        <option value="">Select Category</option>
                                                        <option class="bugreport">Bug Report</option>
                                                        <option value="featurereport">Feature Request</option>
                                                        <option value="improvement">Improvement</option>
                                                    </select>
                                                </div>
                                            </div>
                                             <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Description</label>
                                                    <textarea class="form-control" name="description" rows="5" cols="12" required></textarea>
                                                </div>
                                                <input type="hidden" name="status" value="Pending">
                                            </div>
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
