<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Task</title>
    <meta name="robots" content="noindex, follow" />
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="{{asset('/frontend/images/favicon.png')}}">
     @include('frontend.layout.css')
   
</head>

<body class="template-color-1 active-dark-mode">
<!-- start header area -->
    <!-- Start Header -->
    <header class="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div class="container">
            <div class="header-inner">
                <div class="header-left">
                    <div class="logo-thumbnail logo-custom-css">
                        <a class="logo-light" href="{{url('/')}}"><img src="{{asset('/frontend/images/logo/logo-white.png')}}" alt="nft-logo"></a>
                        <a class="logo-dark" href="{{url('/')}}"><img src="{{asset('/frontend/images/logo/logo-dark.png')}}" alt="nft-logo"></a>
                    </div>
                    <div class="mainmenu-wrapper">
                        <nav id="sideNav" class="mainmenu-nav d-none d-xl-block">
                            <!-- Start Mainmanu Nav -->
                            <ul class="mainmenu">
                               <li><a href="{{url('/')}}">Home</a>
                               
                            
                            </ul>
                            <!-- End Mainmanu Nav -->
                        </nav>
                    </div>
                </div>
                <div class="header-right">
                    <div class="setting-option d-none d-lg-block">
                        <form class="search-form-wrapper" action="#">
                            <input type="search" placeholder="Search Here" aria-label="Search">
                            <div class="search-icon">
                                <button><i class="feather-search"></i></button>
                            </div>
                        </form>
                    </div>
                    <div class="setting-option rn-icon-list d-block d-lg-none">
                        <div class="icon-box search-mobile-icon">
                            <button><i class="feather-search"></i></button>
                        </div>
                        <form id="header-search-1" action="#" method="GET" class="large-mobile-blog-search">
                            <div class="rn-search-mobile form-group">
                                <button type="submit" class="search-button"><i class="feather-search"></i></button>
                                <input type="text" placeholder="Search ...">
                            </div>
                        </form>
                    </div>

                    @if(Auth::check())
                     

                       <div class="setting-option rn-icon-list user-account">
                            <div class="icon-box">
                                <a href="{{url('/userprofile')}}"><img src="{{url('/')}}{{Auth::user()->dp}}" alt="Images"></a>
                                <div class="rn-dropdown">
                                    <div class="rn-product-inner">
                                        <ul class="product-list">
                                            <li class="single-product-list">
                                                <div class="thumbnail">
                                                    <a href="{{url('/userprofile')}}"><img src="{{url('/')}}{{Auth::user()->dp}}" alt="Images"><span class="user-name font-weight-bolder">{{Auth::user()->name}}</span></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul class="list-inner">
                                        <li><a href="{{url('/userdashboard')}}" class="logout mr-5">Dashboard</a>

                                        <li><a href="{{url('/userprofile')}}">My Profile</a></li>
                                        <li><a href="{{url('/userlogout')}}">Log Out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                            
                        

                        

                    @else

                    <div class="setting-option header-btn">
                        <div class="icon-box">
                            <a class="btn btn-primary-alta btn-small" href="{{url('/register')}}">Register</a>
                        </div>
                    </div>

                    <div class="setting-option header-btn">
                        <div class="icon-box">
                            <a class="btn btn-primary-alta btn-small" href="{{url('/login')}}">Login</a>
                        </div>
                    </div>
                    @endif
                   
                    <div class="setting-option mobile-menu-bar d-block d-xl-none">
                        <div class="hamberger">
                            <button class="hamberger-button">
                                <i class="feather-menu"></i>
                            </button>
                        </div>
                    </div>
                    <div id="my_switcher" class="setting-option my_switcher">
                        <ul>
                            <li>
                                <a href="javascript: void(0);" data-theme="light" class="setColor light">
                                    <img src="{{asset('/frontend/images/icons/sun-01.svg')}}" alt="Sun images">
                                </a>
                            </li>
                            <li>
                                <a href="javascript: void(0);" data-theme="dark" class="setColor dark">
                                    <img src="{{asset('/frontend/images/icons/vector.svg')}}" alt="Vector Images">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- End Header Area -->
    <div class="popup-mobile-menu">
        <div class="inner">
            <div class="header-top">
                <div class="logo logo-custom-css">
                    <a class="logo-light" href="{{url('/')}}"><img src="{{asset('/frontend/images/logo/logo-white.png')}}" alt="nft-logo"></a>
                    <a class="logo-dark" href="{{url('/')}}"><img src="{{asset('/frontend/images/logo/logo-dark.png')}}" alt="nft-logo"></a>
                </div>
                <div class="close-menu">
                    <button class="close-button">
                        <i class="feather-x"></i>
                    </button>
                </div>
            </div>
            <nav>
                <!-- Start Mainmanu Nav -->
                <ul class="mainmenu">
                    <li><a href="{{url('/')}}">Home</a>
                   

                    
                </ul>
                <!-- End Mainmanu Nav -->
            </nav>
        </div>
    </div>
    <!-- ENd Header Area -->

@yield('content')

@include('frontend.layout.footer')
@include("frontend.layout.js")

</body>
</html>
