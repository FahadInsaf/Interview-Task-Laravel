@extends('layout.header')
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('/app-assets/css/colors.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('/app-assets/vendors/css/extensions/sweetalert2.min.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('/app-assets/css/plugins/extensions/ext-component-sweet-alerts.css')}}">

<link rel="stylesheet" type="text/css" href="{{asset('/app-assets/vendors/css/tables/datatable/dataTables.bootstrap4.min.css')}}">

@endsection
@section('content')
    {{ csrf_field() }}
    <section id="basic-datatable">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    @if (session('status'))
                    <div class="alert alert-success">
                      {{ session('status') }}
                    </div>
                  @endif
                    <div class="card-header border-bottom">
                        <h4 class="card-title">Fee back Messages</h4>
                    </div>
                    <div class="card-datatable p-2">
                        <table class="table dynamic_table font-weight-bold">
                            <thead>
                                <tr role="row">
		                            <th>Sr No</th>
		                            <th>Title</th>
                                    <th>Catgeory</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($data['results'] as $key=>$row)
                                    <tr>
                                        <td>{{$key+1}}</td>
                                        <td>{{$row->title}}</td>
                                        <td>{{$row->category}}</td>
                                        <td>{{$row->description}}</td>
                                        <td>{{$row->status}}</td>
                                        <td>
                                            <a style="color:black" href="{{url('admin/change_status/Approved/'.$row->id)}}"><i data-feather="edit"></i></a> |
                                            <a style="color:black" href="{{url('admin/view_comment/'.$row->id)}}"><i data-feather="info"></i></a> 
                                        </td>
                                    </tr>
                                @endforeach  

                            </tbody>
                                        
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
 @include('includes.delete')

@endsection


@section('js')
<script src="{{asset('/app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js')}}"></script>
<script src="{{asset('/app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js')}}"></script>

<link rel="stylesheet" type="text/css" href="{{asset('/app-assets/vendors/js/extensions/sweetalert2.all.min.js')}}">

    <script type="text/javascript">
        $(document).ready(function() {
            $('.dynamic_table').DataTable();
            $('.contact').addClass('active');
        });
    </script>
@endsection
