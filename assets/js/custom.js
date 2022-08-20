/*-----------------------------------------------------------------------------------
/* ----------------------------------------------------------------

	TABLE OF CONTENTS
	
	#Sticky Header
	#ScrollTop
	#Mobile Menu
	#Team Carousel
	#Counter Active
	#Client Carousel
	#Scrollt Smooth
	#Magnific PopUp
	#Magnific PopUp Video 
	#Preloader
	#IsoTope
---------------------------------------------------------------- */

$(function() {

	"use strict";
	var wind = $(window);
	
	
	// Sticky Header
	wind.on("scroll",function () {
		var a= $(window).scrollTop(); 

		if(a>400){
			$('.sticky-header-area').addClass('top-fixt');
		}
		else{
			$('.sticky-header-area').removeClass('top-fixt');
		}
	});

    // ScrollTop
    var scrollTop = $(".scrollTop");
    wind.on("scroll",function () {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos >600) {
          $(scrollTop).css({"opacity": "1" , "visibility" : "visible"});

        } else {
          $(scrollTop).css({"opacity": "0" , "visibility" : "hidden"});
        }

      }); 
      // scroll END

    //Click event to scroll to top
    $(scrollTop).on( "click", function() {
        $('html, body').animate({
          scrollTop: 0
        },600);
        return false;

    });

	// Mobile Menu
    $(".nav-bars" ).on( "click", function() {
        $('.canvas-menu').toggleClass('canvas');
        return false;
    });

    // Mobile Menu close button
    $(".nav-bars").on( "click", function() {
       $('.nav-bars').toggleClass('add-icon');
       $('.nav-bars').toggleClass('rem-icon');
        return false;
    });

	// Counter Active
	$('.counter').counterUp({
		delay: 10,
		time: 3000,
	});

	// Client Carousel
	$('.people-corousel-area').owlCarousel({
		loop:false,
		autoplayTimeout:3000,
		items:3,
		autoplay:false,
		autoplayHoverPause:true,
		responsive :{
			0:{
				items:1
			},
			767:{
				items:1
			},
			990:{
				items:2
			},
		}
	});

	//Scrollt Smooth 
	$.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',         // the easing function for animation
      scrollTime: 800,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -60            // offste (in px) for fixed top navigation
    });


	// Magnific PopUp
	$('.portfolio-popup a').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});


    // Magnific PopUp Video
    $('.play-btn a').magnificPopup({
      type: 'iframe',
    }); 

    // Progress bar
    $(function() { 
	    var wind = $(window);  
	    // progress bar
	    wind.on('scroll', function () {
	        $(".skills-progress span").each(function () {
	            var bottom_of_object = 
	            $(this).offset().top + $(this).outerHeight();
	            var bottom_of_window = 
	            $(window).scrollTop() + $(window).height();
	            var myVal = $(this).attr('data-value');
	            if(bottom_of_window > bottom_of_object) {
	                $(this).css({
	                  width : myVal
	                });
	            }
	        });
	    });
	});

});

$(window).on("load",function (){
	// Preloader
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
	
	// IsoTope
	// init Isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.element-item',
		layoutMode: 'fitRows',
		getSortData: {
		  name: '.name',
		  symbol: '.symbol',
		  number: '.number parseInt',
		  category: '[data-category]',
		  weight: function( itemElem ) {
			var weight = $( itemElem ).find('.weight').text();
			return parseFloat( weight.replace( /[\(\)]/g, '') );
		  }
		}
	});
  
	// filter functions
	var filterFns = {
		// show if number is greater than 50
		numberGreaterThan50: function() {
		  var number = $(this).find('.number').text();
		  return parseInt( number, 10 ) > 50;
		},
		// show if name ends with -ium
		ium: function() {
		  var name = $(this).find('.name').text();
		  return name.match( /ium$/ );
		}
	};
  
	// bind filter button click
	$('#filters').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
   
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
		  $buttonGroup.find('.is-checked').removeClass('is-checked');
		  $( this ).addClass('is-checked');
		});
	});
	
});