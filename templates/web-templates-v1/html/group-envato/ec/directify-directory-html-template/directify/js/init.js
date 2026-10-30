/*
 * Copyright (c) 2018 Frenify
 * Author: Frenify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	directify_fn_contact_form_contactsendpage();
	directify_fn_gmap();
	directify_fn_preloader_pos();
	directify_fn_zoomer();
	directify_fn_listingsingleulli();
	directify_fn_sticky_sidebar();
	directify_fn_alertboxcloser();
	directify_fn_mobmenu();
	directify_fn_horsubmenu();
	directify_fn_submit_opening_time();
	directify_fn_jarallax();
	directify_fn_share_closer();
	directory_fn_jumping_to_adding_review();
	directify_fn_profile_button();
	directify_fn_contact_form_contactsend();
	directify_fn_progress_bar();
	directify_fn_opening_time_toggle();
	directify_fn_magnific_popup();
	directify_fn_submenu();
	directify_fn_fam_cities_carousel();
	directify_fn_isotope();
	directify_fn_rating_datas();
	directify_fn_scroll_single();
	directify_fn_listings_categories();
	directify_fn_totop();
	directify_fn_search_focus();
	directify_fn_select();
	directify_fn_popular_cities();
	directify_fn_hovertab();
	directify_fn_header();
	directify_fn_img_to_svg();
	
	jQuery(window).on('resize',function(e){
		e.preventDefault();
		directify_fn_isotope();
		directify_fn_scroll_single();
		directify_fn_popular_cities();
	});
	
	setTimeout(function(){
		directify_fn_isotope();
		directify_fn_fam_cities_carousel();
	}, 1000);
	
	setTimeout(function(){
		directify_fn_isotope();
	}, 3000);
	
	setTimeout(function(){
		directify_fn_isotope();
	}, 5000);
	
	jQuery(window).on('scroll', function(e) {
		e.preventDefault();
        directify_fn_totop_myhide();
    });
	
	jQuery(window).load(function(){
		directify_fn_single_carousel();
		directify_fn_preloader();
		directify_fn_isotope();
		directify_fn_magnific_popup();
	});
	jQuery('.directify_fn_preloader').on('click',function(){
		directify_fn_preloader();
	});
	
});
// -----------------------------------------------------
// -------    CONTACT FORM FOR CONTACT PAGE   ----------
// -----------------------------------------------------
function directify_fn_contact_form_contactsendpage(){
	"use strict";
	
	jQuery(".directify_fn_btn_contactsend_page").on('click', function(){
		
		var name 		= jQuery(".contact_form.page #name").val();
		var email 		= jQuery(".contact_form.page #email").val();
		var message 	= jQuery(".contact_form.page #message").val();
		var subject 	= jQuery(".contact_form.page #subject").val();
		var success     = jQuery(".contact_form.page .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			//alert("Please Fill Required Fields"); 
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contactsend_page.php",{ xx_name: name, xx_email: email, xx_message:message, xx_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false;
	 
	});
	
}
// -----------------------------------------------------
// --------------------    GMAP   ----------------------
// -----------------------------------------------------
function directify_fn_gmap(){
	"use strict";
	  
	jQuery('.gmap3-1, .gmap3-2, .gmap3-3, .gmap3-4').gmap3({
	  marker:{
		address: "Haltern am See, Weseler Str. 151"
	  },
	  map:{
		options:{
		  zoom: 14
		}
	  }
	});
}
// -----------------------------------------------------
// --------------------    ZOOMER   --------------------
// -----------------------------------------------------
function directify_fn_zoomer(){
	"use strict";
	
	jQuery('.slider-input').jRange({
		from: 0,
		to: 30,
		step: 1,
		format: '%s',
		width: 770,
		showLabels: true,
		isRange : false,
		onstatechange: function(){
			var barW 			= jQuery('.back-bar').width();
			var selectedBarW	= jQuery('.back-bar .selected-bar').width();
			var labelW			= jQuery('.back-bar .pointer-label.high').width();
			var label			= jQuery('.back-bar .pointer-label.high');
			
			if(barW-selectedBarW-30<labelW){
				label.addClass('left');
			}else{
				label.removeClass('left');
			}
		}
	});
}
// -----------------------------------------------------
// ------------------    PRELOADER   -------------------
// -----------------------------------------------------
function directify_fn_preloader(){
	"use strict";
	var preloader	= jQuery('.directify_fn_preloader');
	preloader.hide();
}
function directify_fn_preloader_pos(){
	"use strict";
	var preloader	= jQuery('.directify_fn_preloader');
	var navHeight   = jQuery('.directify_fn_header_wrap').height();
	
	preloader.css({top:navHeight});
}
// -----------------------------------------------------
// --------------    lISTING SINGLE ULLI   -------------
// -----------------------------------------------------
function directify_fn_listingsingleulli(){
	"use strict";
	var btn			= jQuery('.directify_fn_all_in_one_single_wrap .single_my_select > a');
	var hiddenBox	= jQuery('.directify_fn_all_in_one_single_wrap .single_my_select .hidden_box');
	var ulli		= jQuery('.directify_fn_all_in_one_single_wrap .single_my_select .hidden_box ul li a');
	var span 		= btn.find('span');
	
	var carousel	= jQuery('.single_carousel_wrap');
	var map			= jQuery('.single_map_wrap');
	var video		= jQuery('.single_video_wrap');
	
	function asd(){
		if(span.hasClass('Video')){carousel.hide();map.hide();video.show();}
		else if(span.hasClass('Map')){carousel.hide();map.show();video.hide();}
		else{carousel.show();map.hide();video.hide();}
	}
	
	asd();
	
	btn.on('click',function(e){
		e.preventDefault();
		if(hiddenBox.hasClass('two')){
			hiddenBox.removeClass('two');
		}else{
			hiddenBox.addClass('two');
		}
	});
	
	ulli.on('click',function(e){
		e.preventDefault();
		var element	= jQuery(this);
		var $class	= element.data('class');
		
		ulli.removeClass();
		element.addClass('clicked');
		btn.find('span').html($class);
		btn.find('span').removeClass();
		btn.find('span').addClass($class);
		
		hiddenBox.removeClass('two');
		asd();
	});
	
	
}
// -----------------------------------------------------
// ---------------   STICKY SIDEBAR    -----------------
// -----------------------------------------------------
function directify_fn_sticky_sidebar(){
	"use strict";
	
	jQuery('.sticky_sidebar').theiaStickySidebar({
		containerSelector: '', // The sidebar's container element. If not specified, it defaults to the sidebar's parent.
		additionalMarginTop: 0,
		additionalMarginBottom: 0,
		updateSidebarHeight: true, // Updates the sidebar's height. Use this if the background isn't showing properly, for example.
		minWidth: 1040, // The sidebar returns to normal if its width is below this value. 
	});
	
}
// -----------------------------------------------------
// --------------    ALERT BOX CLOSER    ---------------
// -----------------------------------------------------
function directify_fn_alertboxcloser(){
	"use strict";
	
	var alertBox		= jQuery('.directify_fn_alertbox');
	

	alertBox.each(function(){
		var element		= jQuery(this);
		var btn			= element.find('.closer a');
		btn.on('click',function(){
			element.addClass('bye');
			setTimeout(function(){
				element.css({transition:'none'});
				element.slideUp(300);
			},300);
			return false;
		});
	});
}
// -----------------------------------------------------
// ----------------    MOBILE MENU    ------------------
// -----------------------------------------------------
function directify_fn_mobmenu(){
	"use strict";
	
	/* ---------------------------------------------- */
	var hamburger 		= jQuery('.directify_fn_mobile_menu_wrap .hamburger');
	var mobNav			= jQuery('.directify_fn_mobile_nav');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobNav.slideUp(500);
		}else{
			element.addClass('is-active');
			mobNav.slideDown(500);
		}return false;
	});
	/* ---------------------------------------------- */
	var dashHamburger	= jQuery('.dashboard_wrap .hidden_list .hamburger');
	var dashMobNav		= jQuery('.dashboard_wrap .hidden_list_nav');
	
	dashHamburger.on('click',function(){
		var element 	= jQuery(this);
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			dashMobNav.slideUp(500);
		}else{
			element.addClass('is-active');
			dashMobNav.slideDown(500);
		}return false;
	});
	/* ---------------------------------------------- */
}
// -----------------------------------------------------
// ------------    HORIZONTAL SUBMENU    ---------------
// -----------------------------------------------------
function directify_fn_horsubmenu(){
	"use strict";
	
	var nav 			= jQuery('ul.nav__hor');
	var W				= jQuery(window).width();
	var delay			= 100;
	
	
	var submenu 		= nav.find('.sub_menu');
	
	/* ---------------------------------------------- */
	submenu.each(function(){
		var element 			= jQuery(this);
		var submenuW			= element.width();
		var submenuLeftOffset	= element.offset().left;
		
		if(W < (submenuLeftOffset + submenuW)){
			element.addClass('reversed');
		}
		
	});
	/* ---------------------------------------------- */
	
	/* ---------------------------------------------- */
	nav.find('li').on('mouseover', function(e){
		e.preventDefault();
		
		var element 			= jQuery(this);
		var submenu				= element.children('ul');
		
		if(!element.hasClass('add_listing')){
			element.children('a').css({backgroundColor:'#0089e2'});
			element.children('a').css({color:'#fff'});
		}
		
		if(submenu.length){
			setTimeout(function(){submenu.css({visibility:'visible', opacity:1, transform: 'translateY(0)'});}, delay);
		}
		
	}).on('mouseleave', function(e){
		e.preventDefault();
		
		var element 			= jQuery(this);
		var submenu				= element.children('ul');
		
		if(!element.hasClass('add_listing')){
			element.children('a').css({backgroundColor:'transparent'});
			element.children('a').css({color:'currentColor'});
		}
		
		if(submenu.length){
			setTimeout(function(){submenu.css({visibility:'hidden', opacity:0, transform: 'translateY(20px)'});}, delay);
		}
		
	});
	/* ---------------------------------------------- */
}
// -----------------------------------------------------
// ----------    SUBMIT HOURS OPERATION    -------------
// -----------------------------------------------------
function directify_fn_submit_opening_time(){
	"use strict";
	
	var section = jQuery('.directify_fn_submit_opening_section');
	var btn		= section.find('a');
	var box		= section.find('.opening_time');
	var label	= section.find('label');
	
	btn.on('click',function(){
		if(btn.hasClass('clicked')){
			btn.removeClass('clicked');
			box.slideUp(500);
			setTimeout(function(){
				label.css({marginBottom: 0});
			}, 500);
		}else{
			btn.addClass('clicked');
			box.slideDown(500);
			label.css({marginBottom: 12});
		}return false;
	});
}
// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------
function directify_fn_jarallax(){
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
	
}
// -----------------------------------------------------
// ---------------      SHARE CLOSER    ----------------
// -----------------------------------------------------
function directify_fn_share_closer(){
	"use strict";
	
	var btnShare		= jQuery('a.share_me');
	var closerShare		= jQuery('.directify_fn_share_closer');
	var boxShare		= jQuery('.directify_fn_share');
	
	/* ---------------------------------------------- */
	btnShare.on('click',function(){
		boxShare.addClass('opened');
		return false;
	});
	/* ---------------------------------------------- */
	closerShare.on('click', function() {
		boxShare.removeClass('opened');
		return false;
	});
	/* ---------------------------------------------- */
	
	var btnDetail		= jQuery('.invoice__single .details__see a');
	var closerDetail	= jQuery('.directify_invoice__single_details_closer');
	var closerDetBtn	= jQuery('.directify_invoice__single_details .closer  a');
	var boxDetail		= jQuery('.directify_invoice__single_details');
	
	/* ---------------------------------------------- */
	btnDetail.on('click',function(){
		boxDetail.addClass('opened');
		return false;
	});
	/* ---------------------------------------------- */
	closerDetail.on('click', function() {
		boxDetail.removeClass('opened');
		return false;
	});
	/* ---------------------------------------------- */
	closerDetBtn.on('click', function() {
		boxDetail.removeClass('opened');
		return false;
	});
	/* ---------------------------------------------- */
	
	var btnSign			= jQuery('.directify_fn_submit_main_section .have-account p a');
	var closerSign		= jQuery('.directify_fn_sign_in_closer');
	var closerBtn		= jQuery('.directify_fn_sign_in .closer a');
	var boxSign			= jQuery('.directify_fn_sign_in');
	var myExpBox		= jQuery('.directify_fn_sign_in .sign_in_box');
	var ulLiBtn			= jQuery('ul li.log-in a');
	
	/* ---------------------------------------------- */
	btnSign.on('click',function(){
		boxSign.addClass('opened');
		myExpBox.addClass('show');
		return false;
	});
	/* ---------------------------------------------- */
	ulLiBtn.on('click',function(){
		boxSign.addClass('opened');
		myExpBox.addClass('show');
		return false;
	});
	/* ---------------------------------------------- */
	closerSign.on('click', function() {
		boxSign.removeClass('opened');
		myExpBox.removeClass('show');
		return false;
	});
	/* ---------------------------------------------- */
	closerBtn.on('click', function() {
		boxSign.removeClass('opened');
		myExpBox.removeClass('show');
		return false;
	});
	/* ---------------------------------------------- */
	
}
// -----------------------------------------------------
// --------   JUMPING TO ADDING A REVIEW    ------------
// -----------------------------------------------------
function directory_fn_jumping_to_adding_review(){
	"use strict";
	
	var anchor;
	var name;

	jQuery('a[href*=#add_new_review]').on('click', function(e){
		anchor = $(this);
		name = anchor.attr('href').replace(new RegExp('#','gi'), '');
		jQuery('html, body').stop().animate({
			scrollTop: jQuery('[id='+name+']').offset().top
		}, 1000);
		e.preventDefault();
		return false;
	});
}
// -----------------------------------------------------
// ---------------    PROFILE BUTTON    ----------------
// -----------------------------------------------------
function directify_fn_profile_button(){
	"use strict";
	
	var btnProfile	= jQuery('.directify_fn_single_wrapper .single_profile a.contact');
	var btnCloser	= jQuery('.directify_fn_single_wrapper .single_info .contact_form_wrap .closer a');
	var box			= jQuery('.directify_fn_single_wrapper .single_info .contact_form_wrap');
	
	/* ---------------------------------------------- */
	btnProfile.on('click',function(){
		if(!btnProfile.hasClass('opened')){
			btnProfile.addClass('opened');
			box.slideDown(500);
		}else{
			btnProfile.removeClass('opened');
			box.slideUp(500);
		}return false;
	});
	/* ---------------------------------------------- */
	btnCloser.on('click',function(){
		btnProfile.removeClass('opened');
		box.slideUp(500);
		return false;
	});
	/* ---------------------------------------------- */
}
// -----------------------------------------------------
// -------    CONTACT FORM FOR SINGLE PAGE   -----------
// -----------------------------------------------------
function directify_fn_contact_form_contactsend(){
	"use strict";
	
	jQuery(".directify_fn_btn_contactsend").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			//alert("Please Fill Required Fields"); 
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contactsend.php",{ xx_name: name, xx_email: email, xx_message:message}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false;
	 
	});
	
}
// -----------------------------------------------------
// ----------------    PROGRESS BAR    -----------------
// -----------------------------------------------------
function directify_fn_progress_bar(){
	"use strict";
	
	var bar		= jQuery('.progress_bar_wrap .progress_bar');
	
	bar.each(function(){
		
		var element		= jQuery(this);
		var size		= element.data('size-percent');
		var color1		= element.data('bg-color');
		var color2		= element.data('bg-color2');
		var barBg		= element.find('.bar_bg');
		var bar			= barBg.find('.bar');
		
		element.find('.bar_wrap').css("width",size +"%");
		
		bar.css({backgroundColor: color1});
		barBg.css({backgroundColor: color2});
	});
}
// -----------------------------------------------------
// -------------    OPENING TIME TOGGLE    -------------
// -----------------------------------------------------
function directify_fn_opening_time_toggle(){
	"use strict";
	
	var btn		= jQuery('.opening_time a.hire');
	var box		= jQuery('.opening_time .content');
	
	btn.on('click',function(){
		if(btn.hasClass('opened')){
			btn.removeClass('opened');
			box.slideUp(500);
		}else{
			btn.addClass('opened');
			box.slideDown(500);
		}return false;
	});
}
// -----------------------------------------------------
// -----------------    SINGLE CAROUSEL    -------------
// -----------------------------------------------------
function directify_fn_single_carousel(){
	"use strict";
	
	var carousel = jQuery('.directify_fn_all_in_one_single_wrap .owl-carousel');
	
	carousel.each(function(){
		var element = jQuery(this);
		element.owlCarousel({
			autoplay: true,
			autoWidth: true,
			loop: true,
			margin: 10,
			dots: false,
			nav: false,
		});
		
		jQuery('.directify_fn_all_in_one_single_wrap .custom_nav a.prev').on('click', function(){
			element.owlCarousel().trigger('prev.owl.carousel');
			return false;
		});

		jQuery('.directify_fn_all_in_one_single_wrap .custom_nav a.next').on('click', function(){
			element.owlCarousel().trigger('next.owl.carousel');
			return false;
		});
	});
	
	
}
// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------
function directify_fn_magnific_popup(){
	"use strict";
		
	jQuery('.directify_fn_gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	
	jQuery('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	    
	
}
// -----------------------------------------------------
// --------------------    SUBMENU    ------------------
// -----------------------------------------------------
function directify_fn_submenu(){
	"use strict";
	
	var nav 					= jQuery('ul.nav');
	
	
	nav.find('a').on('click', function(e){

		
		var element 			= jQuery(this);
		var parentItem			= element.parent('li');
		var parentItems			= element.parents('li');
		var parentUls			= parentItem.parents('ul.sub_menu');
		var subMenu				= element.next();
		var allSubMenusParents 	= nav.find('li');
		
		allSubMenusParents.removeClass('opened');
		
		if(subMenu.length){
			
			e.preventDefault();
			
			if(!(subMenu.parent('li').hasClass('active'))){
				if(!(parentItems.hasClass('opened'))){parentItems.addClass('opened');}
				
				allSubMenusParents.each(function(){
					var el = jQuery(this);
					if(!el.hasClass('opened')){el.find('ul.sub_menu').slideUp();}
				});
				
				allSubMenusParents.removeClass('active');
				parentUls.parent('li').addClass('active');
				subMenu.parent('li').addClass('active');
				subMenu.slideDown();
				
			}else{
				subMenu.parent('li').removeClass('active');
				subMenu.slideUp();
			}
			return false;
		}
	});
}
// -----------------------------------------------------
// ----------    FAMOUS CITIES CAROUSEL    -------------
// -----------------------------------------------------
function directify_fn_fam_cities_carousel(){
	"use strict";
	
	var carousel = jQuery('.directify_fn_carousel_famous_cities_wrap .owl-carousel');
	
	carousel.owlCarousel({
		autoplay: true,
		loop: true,
		margin: 30,
		dots: false,
		slideBy: 1,
		dotsEach: true,
		autoWidth: true
	});
	
	jQuery('.directify_fn_carousel_famous_cities_wrap .custom_nav a.prev').on('click', function(){
		carousel.trigger('prev.owl.carousel');
		return false;
	});
	
	jQuery('.directify_fn_carousel_famous_cities_wrap .custom_nav a.next').on('click', function(){
		carousel.trigger('next.owl.carousel');
		return false;
	});
}
// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------
function directify_fn_isotope(){
	"use strict";
	
	jQuery('.directify_fn_masonry').isotope({
	  itemSelector: '.directify_fn_masonry_in',
	  masonry: {

	  }
	});
	
}
// -----------------------------------------------------
// ---------------    RATING'S DATAS    ----------------
// -----------------------------------------------------
function directify_fn_rating_datas(){
	"use strict";
	
	var rating				= jQuery('.directify_fn_rating');
	
	rating.each(function(){
		var element 		= jQuery(this);
		var behind			= element.find('.behind');
		var up				= element.find('.up');
		
		var myrate			= element.data('rating');
		var myrateLength	= 18 * myrate;
		var myrateUnLength	= 90 - myrateLength;
		
		if(myrate<=5 || myrate==="unknown"){
			up.css({width:myrateLength+'px'});
			behind.css({width:myrateUnLength +'px'});
		}else{
			up.css({width: 0});
		}
	});
}
// -----------------------------------------------------
// -----------    NICESCROLL FOR INDEX 25    -----------
// -----------------------------------------------------

function directify_fn_scroll_single(){
	"use strict";
	
	jQuery(".directify_fn_featured_scroll").niceScroll({
		cursorcolor: "#0089e2", // change cursor color in hex
        cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
        cursorborder: "none", // css definition for cursor border
        cursorborderradius: "3px", // border radius in pixel for cursor	
		background: "rgba(0,0,0,0.15)",
        autohidemode: false, // how hide the scrollbar works, possible values: 
	});
}
// -----------------------------------------------------
// -----------    LISTINGS' CATEGORIES    --------------
// -----------------------------------------------------
function directify_fn_listings_categories(){
	"use strict";
	
	var listings			= jQuery('.cat_single_wrap');
	
	listings.each(function(){
		var element			= jQuery(this);
		
		// text
		var textColor		= element.data('text-color');
		// background
		var bgColor			= element.data('bg-color');
		var bgOpacity		= element.data('bg-opacity');
		// border
		var borderW			= element.data('border-width');
		var borderColor		= element.data('border-color');
		var $skew			= element.data('skew');
		// button
		var single			= element.find('.cat_single');
		var overlay			= single.find('.overlay_color');
		var a				= single.find('.cat_single_content a');
		// hover
		var hovText			= element.data('hover-text');
		var hovBg			= element.data('hover-bg');
		var hovBorder		= element.data('hover-border');
		
		// css simple changes
		/* ---------------------------------------------- */
		overlay.css({backgroundColor: bgColor});
		overlay.css({opacity: bgOpacity});
		overlay.css({borderWidth: borderW +'px'});
		overlay.css({borderColor: borderColor});
		overlay.css("transform","skewX(-"+$skew+"deg)");
		a.css({color:textColor});
		/* ---------------------------------------------- */
		
		// css mouseenter and mouseleave changes
		/* ---------------------------------------------- */
		single.on('mouseenter',function(){
			var element2	= jQuery(this);
			var overlay2	= element2.find('.overlay_color');
			var a2			= element2.find('.cat_single_content a');
			
			a2.css({color:hovText});
			overlay2.css({backgroundColor: hovBg});
			overlay2.css({borderColor: hovBorder});
		}).on('mouseleave', function(){
			var element3	= jQuery(this);
			var overlay3	= element3.find('.overlay_color');
			var a3			= element3.find('.cat_single_content a');
			
			a3.css({color:textColor});
			overlay3.css({backgroundColor: bgColor});
			overlay3.css({borderColor: borderColor});
		});
		/* ---------------------------------------------- */
		
	});
}
// -----------------------------------------------------
// ---------------    TOTOP MYHIDE    ------------------
// -----------------------------------------------------
function directify_fn_totop_myhide(){
	"use strict";
	
	var toTop		=	jQuery("a.totop");
	var listed		=	jQuery("a.listed");
	var topOffSet 	= 	toTop.offset().top;
	
	if(topOffSet > 1000){
		toTop.addClass('opened');	
		listed.addClass('opened');	
	}else{
		toTop.removeClass('opened');
		listed.removeClass('opened');
	}
	
}
// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------
function directify_fn_totop(){
	"use strict";
	
	jQuery("a.totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}
// -----------------------------------------------------
// ----------------    SEARCH FOCUS    -----------------
// -----------------------------------------------------
function directify_fn_search_focus(){
	"use strict";
	
	/* ---------------------------------------------- */
	var searchBtn			= jQuery('.directify_fn_header_search > a');
	var searchSee			= jQuery('.directify_fn_header_search_see_wrap');
	searchBtn.on('click',function(){
		if(searchBtn.hasClass('clicked')){
			searchBtn.removeClass('clicked');
			searchSee.removeClass('two');
		}else{
			searchBtn.addClass('clicked');
			searchSee.addClass('two');
		}return false;
	});
	/* ---------------------------------------------- */
	
	/* ---------------------------------------------- */
	var searchBtnMobile		= jQuery('.directify_fn_mobile_menu .mobile_search a');
	var searchSeeMobile 	= jQuery('.directify_fn_mobile_menu_wrap .mobile_search_see');
	searchBtnMobile.on('click',function(){
		if(searchBtnMobile.hasClass('clicked')){
			searchBtnMobile.removeClass('clicked');
			searchSeeMobile.removeClass('two');
		}else{
			searchBtnMobile.addClass('clicked');
			searchSeeMobile.addClass('two');
		}return false;
	});
	/* ---------------------------------------------- */
	
	/* ---------------------------------------------- */
	var searchBtnMobileS	= jQuery('.directify_fn_mobile_menu .s-search a');
	searchBtnMobileS.on('click',function(){
		if(searchBtnMobileS.hasClass('clicked')){
			searchBtnMobileS.removeClass('clicked');
			searchSeeMobile.removeClass('two');
		}else{
			searchBtnMobileS.addClass('clicked');
			searchSeeMobile.addClass('two');
		}return false;
	});
	/* ---------------------------------------------- */
}
// -----------------------------------------------------
// -------------------    SELECT    --------------------
// -----------------------------------------------------
function directify_fn_select(){
	"use strict";
	
	jQuery(".directify_fn_select").select2({
		placeholder: "Select a state"
	});
}
// -----------------------------------------------------
// ---------------    POPULAR CITIES    ----------------
// -----------------------------------------------------
function directify_fn_popular_cities(){
	"use strict";
	
	var ul				= jQuery('.directify_fn_tabs ul.fam_city');
	var ulH				= ul.outerHeight();
	var tabContentDiv	= jQuery('.directify_fn_tabs .tabContent > nav > div');
	var tabContentNav	= jQuery('.directify_fn_tabs .tabContent > nav');
	
	tabContentDiv.css({height:ulH});
	tabContentNav.css({height:ulH});
}
// -----------------------------------------------------
// -----------------    HOVER TAB    -------------------
// -----------------------------------------------------
function directify_fn_hovertab(){
	"use strict";	
	
	jQuery('.directify_fn_tabs').tab({
		trigger_event_type: 'mouseenter' //mouseover | click 默认click
	});
}
// -----------------------------------------------------
// ------------------    HEADER    ---------------------
// -----------------------------------------------------
function directify_fn_header(){
	"use strict";
	
	var liH			= jQuery('.directify_fn_header_nav_list ul li').height();
	var logo		= jQuery('.directify_fn_header_logo a');
	var search		= jQuery('.directify_fn_header_search');
	
	var allWrapper	= jQuery('.directify_fn_wrapper_all');
	var H			= jQuery(window).height();
	
	logo.css({lineHeight:liH +'px'});
	search.css({lineHeight:liH +'px'});
	
	allWrapper.css({minHeight:H});
}
// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------
function directify_fn_img_to_svg(){
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var $img 		= jQuery(this);
		var imgClass	= $img.attr('class');
		var imgURL		= $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
	
}