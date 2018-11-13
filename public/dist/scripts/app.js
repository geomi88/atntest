/*--------------- HEAD READY ----------------------*/
head.ready(document, function () {});


/*--------------- SCROLL TO DIV ----------------------*/

function scrollToDiv(offset){
    $('body').on('click', 'a.scroll', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        if($(this).closest('.mainNav').length){
            $('.mainNav a.scroll').each(function () {
                $(this).parent().removeClass('active-main-menu');
            });
            $(this).parent().addClass('active-main-menu');
        }

        //  new scripts
        var target = $(this).attr('data-href');
        $target = $(target);
      //  console.log($target);


    //    $target.addClass('sectionActive');

        


        if (!$(target).length) {
            window.location.href = $(this).attr('href');
        }
        //  new scripts
        /*$('html,body').animate({scrollTop:$(this.hash).offset().top -10},1000);*/
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + offset
        }, 500, 'swing', function () {
           // window.location.hash = target;
            $(document).on("scroll");
            //$(document).on("scroll", onScroll);
        });
    });
}


// specializations
function specializations() {
    
         
};
// specializations


/*--------------- WINDOW READY ----------------------*/
$(document).ready(function () { 


    scrollToDiv(4);


    /*--------------- MENU RESPONSIVE ----------------------*/
   // hhs.mobileLogo();
     $('.menu-bars').click(function(e) {
         e.preventDefault();
         $('header').toggleClass('active');
     });

    $('.arrow-submenu').click(function () {
        $(this).parent().siblings().removeClass('copen');
        if ($(this).parent().hasClass('copen')) {
            $(this).parent().removeClass('copen');
        }
        else {
            $(this).parent().addClass('copen');
        }
    });
    $('.mainNav a').click(function () {
        // alert('sdfsdf');
        $('.navbar-collapse').removeClass('in');
        $('.navbar-toggle').removeClass('active');
    });
    
    
    

    

    
    /*--------------- GOTO TOP ----------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { 
            $('#toTop').fadeIn();
        }
        else {
            $('#toTop').fadeOut();
        }
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("body").addClass("bodyScrolled");
            $("header").removeClass("active");
        }
        else {
            $("body").removeClass("bodyScrolled");
        }
    });
    $('#toTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /*--------------- SOCIAL MEDIA FLOAT MENU ----------------------*/
    /*var name = "#floatMenu";
    var menuYloc = null;
    $(document).ready(function () {
        menuYloc = parseInt($(name).css("top").substring(0, $(name).css("top").indexOf("px")))
        $(window).scroll(function () {
            offset = menuYloc + $(document).scrollTop() + "px";
            $(name).animate({
                top: offset
            }, {
                duration: 500
                , queue: false
            });
        });
    });*/
    
      // floating social
    var name = "#floatMenu";
    var menuYloc = null;

    $(document).ready(function() {
        menuYloc = parseInt($(name).css("top").substring(0, $(name).css("top").indexOf("px")))
        $(window).scroll(function() {
            offset = menuYloc + $(document).scrollTop() + "px";
            $(name).animate({ top: offset }, { duration: 500, queue: false });
        });
    });
    // floating social

    
    /*--------------- MENU TOGGLE ----------------------*/
    $('.navbar-toggle').click(function () { 
        $(this).toggleClass('active');
    });
    $(document).on('click', '.yamm .dropdown-menu', function (e) {
        e.stopPropagation();
    });
    
    /*--------------- WOW ----------------------*/
    // var wow = new WOW({
    //     boxClass: 'wow', // animated element css class (default is wow)
    //     animateClass: 'animated', // animation css class (default is animated)
    //     offset: 0, // distance to the element when triggering the animation (default is 0)
    //     mobile: true, // trigger animations on mobile devices (default is true)
    //     live: true, // act on asynchronously loaded content (default is true)
    //     callback: function (box) {
    //         // the callback is fired every time an animation is started
    //         // the argument that is passed in is the DOM node being animated
    //     }
    //     , scrollContainer: null // optional scroll container selector, otherwise use window
    // });
    // wow.init();
    
    /*--------------- FANCYBOX ----------------------*/
    
    


    /*$(".fancybox").fancybox({ 
        maxHeight: '90%',
        padding: 1,
        openEffect  : 'fade',
        closeEffect : 'fade'
    });
*/
   //  fancybox 3
   $('[data-fancybox="cl-group"]').fancybox({
        idleTime  : false,
        baseClass : 'fancybox-custom-layout',
        margin    : 0,
        gutter    : 0,
        infobar   : false,
        thumbs    : {
            hideOnClose : false,
            parentEl    : '.fancybox-outer'
        },
        touch : {
            vertical : false
        },
        buttons : [
            'close',
            'thumbs',
            'share'
        ],
        animationEffect   : "fade",
        animationDuration : 300,
        transitionEffect  : false,
        onInit : function( instance ) {
            instance.$refs.inner.wrap( '<div class="fancybox-outer"></div>' );
        },
        caption : function( instance ) {
            /*var title = this.getAttribute('data-title');
            var caption = this.getAttribute('data-caption');*/
          //  console.log(this.getAttribute('data-title'));
          var title = "<h3>"+this.getAttribute('data-title')+"</h3>"
          var caption = "<p>"+this.getAttribute('data-caption')+"</p>"
           return title + caption;
          //  return  caption;
        }
    });

    $('[data-fancybox="normal-video"]').fancybox({
        slideClass : 'normal-video',
        infobar : false,
          buttons : false,
          afterLoad : function( instance, current ) {
            if ( instance.group.length > 1 && current.$content ) {
              current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-previous class="button-previous" href="javascript:;">←</a>');
            }
            
            current.$content.append('<a data-fancybox-close class="button-close" href="javascript:;">×</a>');
          },
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });

    $('[data-fancybox="img-gallery"]').fancybox({
        slideClass : 'img-gallery',
        animationEffect   : "fade",
        infobar : false,
          buttons : false,
          afterLoad : function( instance, current ) {
            if ( instance.group.length > 1 && current.$content ) {
              current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-previous class="button-previous" href="javascript:;">←</a>');
            }
            
            current.$content.append('<a data-fancybox-close class="button-close" href="javascript:;">×</a>');
          }

    });
   //  fancybox 3

});
/*--------------- WINDOW LOAD ----------------------*/
$(window).load(function () {});
/*--------------- SITE OBJECT ----------------------*/
var youth = {
    /*HOME SCRIPTS*/


    // mobile menu
    logoChanger: function () {
        // console.log('mobileMenu');
        var i = 0;
        var $target = $('.logoChangerWrap .navbar-brand-img');
        setInterval(function () {
            $target.removeClass('active');
            $target.eq(i).addClass('active');
            if (i == $target.length - 1) i = 0;
            else i++;
        }, 3000);
    }, // mobile menu

    headerlogoChanger: function () {
        // console.log('mobileMenu');
        var i = 0;
        var $target = $('.secondaryLogo .secondaryLogoImg');
        setInterval(function () {
            $target.removeClass('active');
            $target.eq(i).addClass('active');
            if (i == $target.length - 1) i = 0;
            else i++;
        }, 3000);
    }, // mobile menu
    // logo Swich



    // mobile menu
    mobileLogo: function () {
        // console.log('mobileMenu');
        var i = 0;
        var $target = $('.mobileLogoWrap .mobilelogo');
        setInterval(function () {
            $target.removeClass('active');
            $target.eq(i).addClass('active');
            if (i == $target.length - 1) i = 0;
            else i++;
        }, 4000);
    }, // mobile menu
    youth: function (elem, item) {
        var slider = $(elem).slick({
            pauseOnHover: true
            , dots: false
            , pauseOnHover: true
            , lazyLoad: 'ondemand'
            , pauseOnFocus: false
            , nextArrow: '<a class="next  sliderNav"><i class="icon icon-arrow-arrowright"></i></a>'
            , prevArrow: '<a class="prev sliderNav"><i class="icon icon-arrow-arrowleft"></i></a>' 
            , arrows: true
            , slidesToShow: item
            , speed: 600
            , infinite: true
            , autoplay: true
            , autoplaySpeed: 4000
            , cssEase: 'linear'
            , infinite: true
            , responsive: [{
                    breakpoint: 1024
                    , settings: {
                        slidesToShow: 3
                        , slidesToScroll: 3
                        , infinite: true
                        , dots: false
                    }
            }, {
                    breakpoint: 600
                    , settings: {
                        slidesToShow: 2
                        , slidesToScroll: 2
                    }
            }, {
                    breakpoint: 480
                    , settings: {
                        slidesToShow: 1
                        , slidesToScroll: 1
                    }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
        });
        return slider;
    }
    , youthVariableWidthSlider: function (elem) {
        var slider = $(elem).slick({
            //  $('.variable-width').slick({
            dots: false
            , infinite: true
            , speed: 300
            , slidesToShow: 1
            , centerMode: true
            , variableWidth: true
        });
        return slider;
    }
    , youthVerticalSliderSlider: function (elem) {
        var slider = $(elem).slick({
            //  $('.variable-width').slick({
            dots: false
            , infinite: true
            , autoplay: true
            , pauseOnFocus: false
            , pauseOnHover: true
            , speed: 600
            , arrows: false
            , slidesToShow: 1
            , vertical: true
        });
        return slider;
    }
    , youthSingleSlider: function (elem, speed, delay) {
        var slider = $(elem).slick({
            //pauseOnHover: true,
            dots: true
            , pauseOnHover: false
            , pauseOnFocus: false
            , autoplaySpeed: delay
            , arrows: true
            , nextArrow: '<a class="next  bannerButton"><span class="icon-wrap"></span></a>'
            , prevArrow: '<a class="prev bannerButton"><span class="icon-wrap"></span></a>', //slidesToShow: item,
            speed: speed
            , autoplay: true
            , cssEase: 'linear'
            , infinite: true
            , fade: true
           // , appendDots: ".dotsWrap"
        });
        return slider;
    }
};

/*--------------- SITE OBJECT ----------------------*/
$(document).ready(function () {
    /*--------------- SCROLL DOWN ----------------------*/
    $(".c-scroll-icon").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top - 30
        }, 1000);
    });
    /*--------------- MENU CLICK ----------------------*/

   




});

/*--------------- MENU SCROLL ----------------------*/
// Cache selectors
var lastId, topMenu = $(".nav")
    , topMenuHeight = topMenu.outerHeight() + 30, // All list items
    menuItems = topMenu.find("a"), // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("data-href"));
        if (item.length) {
            return item;
        }
    });

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;
    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems.parent().removeClass("active-main-menu").end().filter("[data-href='#" + id + "']").parent().addClass("active-main-menu");
    }
});


// inview

 $.fn.isInViewport = function() {
    
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('.homeSection').each(function() {
    //  var activeColor = $(this).attr('id');
    if ($(this).isInViewport()) {
      $(this).addClass('inView');
     // $('.sectionTitle h2').textillate('start')
    } else {
      $(this).removeClass('inView');
    }
  });
  
});