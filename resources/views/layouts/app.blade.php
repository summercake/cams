<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'CAMS') - 亚美医疗服务</title>
    <!-- Styles -->
    <link href="{{ asset('css/iconfont.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        /* Page Loader */
        /* Center the loader */
        /*#loader {
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 1;
            width: 150px;
            height: 150px;
            margin: -75px 0 0 -75px;
            border: 16px solid #f3f3f3;
            border-radius: 50%;
            border-top: 16px solid #3498db;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
        }

        @-webkit-keyframes spin {
            0% { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }*/
        #spinner {
            margin: 400px auto;
            width: 50px;
            height: 60px;
            text-align: center;
            font-size: 10px;
        }

        #spinner > div {
            background-color: #3097D1;
            height: 100%;
            width: 6px;
            display: inline-block;
            -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
            animation: stretchdelay 1.2s infinite ease-in-out;
        }

        #spinner .rect2 {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }

        #spinner .rect3 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
        }

        #spinner .rect4 {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }

        #spinner .rect5 {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }

        @-webkit-keyframes stretchdelay {
            0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
            20% { -webkit-transform: scaleY(1.0) }
        }

        @keyframes stretchdelay {
            0%, 40%, 100% {
                transform: scaleY(0.4);
                -webkit-transform: scaleY(0.4);
            }  20% {
                   transform: scaleY(1.0);
                   -webkit-transform: scaleY(1.0);
               }
        }
        /* Add animation to "page content" */
        .animate-bottom {
            /*position: relative;*/
            -webkit-animation-name: animatebottom;
            -webkit-animation-duration: 2s;
            animation-name: animatebottom;
            animation-duration: 2s
        }
        @-webkit-keyframes animatebottom {
            from { bottom:-100px; opacity:0 }
            to { bottom:0; opacity:1 }
        }

        @keyframes animatebottom {
            from{ bottom:-100px; opacity:0 }
            to{ bottom:0; opacity:1 }
        }
        #app{
            display: none;
        }
    </style>
</head>
<body onload="isLoading()">
{{--<div id="loader"></div>--}}
<div id="spinner">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
</div>
<div id="app" class="{{ route_class() }}-page container-fluid animate-bottom">
    @include('layouts._header')
    @include('layouts._message')
    @yield('content')
    @include('layouts._footer')
</div>
<!-- Scripts -->
<script src="{{ asset('js/app.js') }}"></script>
<script>
    /*
    * Page Loading scripts
    * */
    var myVar;
    function isLoading() {
        myVar = setTimeout(showPage, 500);
    }
    function showPage() {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("app").style.display = "block";
    }
</script>
</body>
</html>