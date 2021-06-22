
$(window).load(function() {

	//------ Main Carousel --------//
	$('#owl-carousel-1').owlCarousel({rtl:false,loop:true,margin:10,nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:2
	        },
	        600:{
	            items:2
	        },
	        760:{
	            items:3
	        },
	        920:{
	            items:4
	        }
	    }
	});

	// One accordion
	$('#owl-carousel-2-1').owlCarousel({loop:true,margin:10,singleItem:true,nav:true,
		responsive:{
	        0:{ items:1},
	        600:{ items:1},
	        1000:{ items:1}
	    }
	});
	$('#owl-carousel-2-2').owlCarousel({loop:true,margin:10,singleItem:true,nav:true,
		responsive:{
	        0:{ items:1},
	        600:{ items:1},
	        1000:{ items:1}
	    }
	});
	$('#owl-carousel-2-3').owlCarousel({loop:true,margin:10,singleItem:true,nav:true,
		responsive:{
	        0:{ items:1},
	        600:{ items:1},
	        1000:{ items:1}
	    }
	});
	$('#owl-carousel-2-4').owlCarousel({loop:true,margin:10,singleItem:true,nav:true,
		responsive:{
	        0:{ items:1},
	        600:{ items:1},
	        1000:{ items:1}
	    }
	});
	
	// Two accordion
	$('#owl-carousel-3-1').owlCarousel({loop:true,margin:10,singleItem:true,nav:true,
		responsive:{
	        0:{ items:1},
	        600:{ items:1},
	        1000:{ items:1}
	    }
	});
	$('#owl-carousel-3-2').owlCarousel({loop:true,margin:10,singleItem:true,nav:true,
		responsive:{
	        0:{ items:1},
	        600:{ items:1},
	        1000:{ items:1}
	    }
	});
	$('#owl-carousel-3-3').owlCarousel({loop:true,margin:10,singleItem:true,nav:true,
		responsive:{
	        0:{ items:1},
	        600:{ items:1},
	        1000:{ items:1}
	    }
	});
	$('#owl-carousel-3-4').owlCarousel({loop:true,margin:10,singleItem:true,nav:true,
		responsive:{
	        0:{ items:1},
	        600:{ items:1},
	        1000:{ items:1}
	    }
	});

	// Three accordion
	$('#owl-carousel-4-1').owlCarousel({loop:true,margin:10,singleItem:true,nav:true,
		responsive:{
	        0:{ items:1},
	        600:{ items:1},
	        1000:{ items:1}
	    }
	});
	$('#owl-carousel-4-2').owlCarousel({loop:true,margin:10,singleItem:true,nav:true,
		responsive:{
	        0:{ items:1},
	        600:{ items:1},
	        1000:{ items:1}
	    }
	});
	$('#owl-carousel-4-3').owlCarousel({loop:true,margin:10,singleItem:true,nav:true,
		responsive:{
	        0:{ items:1},
	        600:{ items:1},
	        1000:{ items:1}
	    }
	});
	$('#owl-carousel-4-4').owlCarousel({loop:true,margin:10,singleItem:true,nav:true,
		responsive:{
	        0:{ items:1},
	        600:{ items:1},
	        1000:{ items:1}
	    }
	});
	
});

$(document).ready(function() {

	//------ Bugger menu bar on mobile device --------//
	$('#mob-menu').slicknav({
		label:'',
		prependTo:'#menu',
		closeOnClick:'true' // Close menu when a link is clicked.
	});

	//------ Bootstrap accordion custom --------//
	function toggleChevron(e) {
      	$(e.target).prev('.panel-heading').find('i.indicator').toggleClass('glyphicon-minus glyphicon-plus');
      	
		$('.panel-group .panel-heading').removeClass('dark-0');
		$(e.target).prev('.panel-heading').addClass('dark-0').css({'color':'#fff'});
	}
	$('.panel-group').on('hidden.bs.collapse', toggleChevron);
	$('.panel-group').on('shown.bs.collapse', toggleChevron);
	$('.panel-group .panel-heading').siblings('.in').prev('.panel-heading').addClass('dark-0').css({'color':'#fff'}).find('i.indicator').toggleClass('glyphicon-minus glyphicon-plus');

	//------ Equal height for multiple elements function --------//
        $.fn.equalHeightEle = function(minHeight, maxHeight, breakPoint){
            var items = this;
            breakPoint = breakPoint || 0;
            jQuery(window).bind('load orientationchange resize', function() {
                tallest = (minHeight) ? minHeight : 0;
                items.each(function() {
                    jQuery(this).outerHeight('auto');
                    if(jQuery(this).outerHeight() > tallest) {
                        tallest = jQuery(this).outerHeight();
                    }
                });
                var e = window;
                a = 'inner';
                if (!('innerWidth' in window )) {
                    a = 'client';
                    e = document.documentElement || document.body;
                }
                width = e[ a+'Width' ];
                if ( width >= breakPoint ) {
                    if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
                    return items.each(function() {
                        jQuery(this).outerHeight(tallest);
                    });
                }
            });
        }//end here
        
	//Call equal Function for equal heights
	$('.carousel .item div h4').equalHeightEle();
});