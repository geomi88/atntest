<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> 
<html class="no-js" lang="en" dir="ltr"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <!-- <meta http-equiv="X-UA-Compatible" content="IE=9;IE=10;IE=Edge,chrome=1"/>-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Youth 101</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
       
        <meta name="description" content="" />
        <link rel="prefetch" href="{{ asset('dist/images/1.jpg') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('dist/styles/fonts.css') }}" media="none" onload="this.media='all';"> 
        <link rel="stylesheet" href="{{ asset('dist/styles/main.min.css?110') }}">
        <link rel="stylesheet" href="{{ asset('dist/styles/developer.css?100') }}">
        

        <!--<link rel="preload" as="image" href="dist/images/logo-orange.svg" >-->

        
        <script >
            window.addEventListener('unload', function(event) {
                window.scrollTo(0,0);
            });
            document.documentElement.className = 'js';
            var supportsCssVars = function() {
              var s = document.createElement('style'),
              support;

              s.innerHTML = "root: { --tmp-var: bold; }";
              document.head.appendChild(s);
              support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'));
              s.parentNode.removeChild(s);
              return support;
            }
            if (!supportsCssVars()) alert('You are using outdated browser. upgrade your browser to improve your experience.')
       </script>
    </head>
    <body class="loading">


    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- ====loader==== -->
    <svg class="hidden">
      <symbol id="icon-arrow" viewBox="0 0 24 24">
        <title>arrow</title>
        <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
      </symbol>
      <symbol id="icon-drop" viewBox="0 0 24 24">
        <title>drop</title>
        <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"/><path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"/>
      </symbol>
      <symbol id="shape-demo" viewBox="0 0 200 100">
        <title>shape</title>
        <path d="M 6.144,74.1 C 20.4,107.4 70.13,94.33 94.22,95.74 121.3,97.41 130.8,101.1 154.7,99.38 178.6,97.72 201.9,78.95 199.4,46.86 197.1,14.96 174.9,4.781 161.4,1.827 147.9,-1.128 119.8,8.284 105.6,8.766 85.34,9.449 81.91,7.628 51.08,2.334 17.26,-3.482 -8.105,40.84 6.144,74.1 Z" />
      </symbol>
    </svg>
    <!-- ====loader==== -->



    <!-- FLOATING -->
    <!-- social media -->
    <div  id="floatMenu" class="socialMediaWrap">  
        <ul class="socialButtonWrap">
            <li class="fb">
                <a href="#" target="_blank">
                    <i class="icon icon-facebook"></i>
                </a>
            </li>
            
            <li class="twt">
                <a href="#" target="_blank">
                    <i class="icon icon-twitter"></i>
                </a>
            </li>
            <li class="insta">
                <a href="#" target="_blank">
                    <i class="icon icon-social-instagram-outline"></i>
                </a>
            </li>
            <li class="youtube">
                <a href="#" target="_blank">
                    <i class="icon icon-youtube"></i>
                </a>
            </li>
            
        </ul>   
    </div><!-- social media -->
    <!-- FLOATING -->    
    
    <header id="header">

            <nav class="navbar navbar-custom mainNavBar" role="navigation">
                <!-- Demo navbar -->
                <div class="yamm">


                  <div class="container">
                    <div class="navbar-header">
                        <button type="button" data-toggle="collapse" data-target="#navbar-collapse-1" class="navbar-toggle">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="navbar-brand logoChangerWrap">
                          <a href="index.php" class="navbar-brand-img active">
                              <img title="Youth 101 dubai" src="{{ asset('dist/images/youth-101-logo.svg') }}">
                          </a>
                          <a target="_blank" href="http://youth.gov.ae/" class="navbar-brand-img logo-medium">
                              <img title="Youth 101 dubai" src="{{ asset('dist/images/logo_uae-en.svg') }}">
                          </a>
                        </div>
                        <div class="secondaryLogo logoChangerWrap">
                          <a href="index.php" class="secondaryLogoImg active">
                              <img alt="logo" title="Youth 101 dubai" src="{{ asset('dist/images/youth-101-logo.svg') }}">
                          </a>
                          <a href="index.php" class="secondaryLogoImg">
                              <img alt="logo" title="Youth 101 dubai" src="{{ asset('dist/images/logo_uae-en.svg') }}">
                          </a>
                        </div>

                        <!-- <a href="index.php" class="navbar-brand">
                            <img title="web design dubai" src="dist/images/youth-101-logo.svg">
                        </a>
                        <a href="index.php" class="secondaryLogo">
                            <img alt="logo" title="web design dubai" src="dist/images/youth-101-logo.svg">
                        </a> -->

                        
                    </div>
                    <div class="menu-bars" data-toggle="collapse" data-target="#navbar-collapse-1" class="navbar-toggle">
                      <span>Menu</span>
                      <span class="menuDot"></span>
                      <span class="menuDot"></span>
                      <span class="menuDot"></span>
                    </div>
                    <div id="navbar-collapse-1" class="navbar-collapse collapse">
                      <ul class="nav navbar-nav mainNav">

                        <!-- Classic dropdown -->
                        
                        <li class="active-main-menu"><a class="scroll" data-href="#content"  href="#content">Home</a></li>
                        <li><a class="scroll"  href="#about" data-href="#about">About</a></li>
                        <li><a class="scroll"  href="#digital101" data-href="#digital101">Digital 101</a></li>
                        <li><a class="scroll" href="#upcomingSessions" data-href="#upcomingSessions">Upcoming  Sessions </a></li>
                        <li><a class="langSwitch" href="index_ar.php">العربية </a></li>
                        <!-- <li><a  href="#">Contact Us</a></li> -->
                        
                        <!-- <li class="dropdown smallMenu has-submenu">
                           <a href="#" data-toggle="dropdown" class="dropdown-toggle disabled">Circles</a>
                           <span class="arrow-submenu"></span>
                           <ul role="menu" class="dropdown-menu">
                               <li><a href="#">Circles</a></li>
                               <li><a href="#">Circles</a></li>
                           </ul>
                        </li> -->
                      </ul>




                    </div>

                    
                        
                  </div>
                </div>

                <!-- /.container -->
                
            </nav>
            
     </header>

@yield('content')
