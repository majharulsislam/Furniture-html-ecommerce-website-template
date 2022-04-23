function myFunction(x) {
	x.classList.toggle("change");
  }

$(document).ready(function(){
	// Mobile Menu
	// $('.logo a i').click(function(){
	// 	$('.menu ul').slideToggle(1000);

	// 	return false
	// });

	// Banner Carousel
	$('.product_m_slide').owlCarousel({
		items:4,
		loop:true,
		nav:false,
		dots:false,
		autoplay:false,
		margin:10,
		center:false,
		// stagePadding:40,
		responsive : {
			// breakpoint from 0 up
			0: {
				items:1,
			},
			375 : {
				items:2,
			},
			480 : {
				items:2,
			},
			// breakpoint from 480 up
			767 : {
				items:2,
			},
			// breakpoint from 768 up
			991 : {
				items:3,
			}
		}
	});
	// future product
	$('.future_product').owlCarousel({
		items:3,
		loop:true,
		nav:false,
		dots:false,
		autoplay:false,
		margin:12,
		responsive : {
			// breakpoint from 0 up
			0: {
				items:1,
			},
			375 : {
				items:2,
			},
			480 : {
				items:2,
			},
			// breakpoint from 480 up
			767 : {
				items:2,
			},
			// breakpoint from 768 up
			991 : {
				items:3,
			}
		}
		// center:true,
		// stagePadding:40,
	});
	$( "#tabss" ).tabs();
	$( "#tabssd" ).tabs();
	$( "#tabssd_product").tabs();
	$( "#aston_tab").tabs();


$(".containers").click(function(){
	$(".menus_area").toggle();
 
});
$(".menu_search a").click(function(){
	$(".input_cus_group").toggle();
 
});
$(".product_filer_option h5").click(function(){
	$(".short_option").toggle();
 
});
$(".product_filer_option h5").click(function(){
	$(".product_filer_option h5 span i").toggleClass("rotate");
 
});
// images wood
$('.popup-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
			return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
		}
	}
});

});