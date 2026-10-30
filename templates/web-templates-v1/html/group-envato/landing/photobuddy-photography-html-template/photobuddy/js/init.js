/*
 * Copyright (c) 2017 FriendsLaboratory
 * Author: FriendsLaboratory
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";
	
	
	//var H = jQuery( window ).height();
	//var W = jQuery( window ).width();
	
	jQuery(window).on('scroll', function(e) {
		e.preventDefault();	
        photobuddy_fl_totop_myhide();
    });
	
	photobuddy_fl_google_maps_no_scroll();
	photobuddy_fl_contact_form();
	photobuddy_fl_next_slide_button();
	photobuddy_fl_vertical_menu_scroll();
	photobuddy_fl_sharing_social_icons();
	photobuddy_fl_totop();
	photobuddy_fl_sticky_sidebar();
	photobuddy_fl_menu_on();
	photobuddy_fl_vertical_menu_height_regulation();
	photobuddy_fl_img_height_regulation();
	photobuddy_fl_slider();
	photobuddy_fl_vertical_menu_trigger();
	
	jQuery(window).resize(function() {
        photobuddy_fl_img_height_regulation();
		photobuddy_fl_vertical_menu_scroll();
		photobuddy_fl_vertical_menu_height_regulation();
    });
	
	
});
// -----------------------------------------------------
// -------------    GOOGLE MAPS NO  SCROLL   -----------
// -----------------------------------------------------
function photobuddy_fl_google_maps_no_scroll(){
	"use strict";
	jQuery('.map_container').on('click', function(){
            jQuery(this).find('iframe').addClass('clicked');
	});
	jQuery('.map_container').on('mouseleave', function(){
            jQuery(this).find('iframe').removeClass('clicked');
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------
function photobuddy_fl_contact_form(){
	"use strict";
	jQuery(".photobuddy_fl_message_submit").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			//alert("Please Fill Required Fields"); 
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ xx_name: name, xx_email: email, xx_message:message, xx_subject: subject}, function(data) {
				
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
// -------------    NEXT SLIDE BUTTON ------------------
// -----------------------------------------------------
function photobuddy_fl_next_slide_button(){
	"use strict";
	jQuery('.photobuddy_fl_slider .photobuddy_fl_overlay').on('click', function() {
		setTimeout(function(){
			jQuery('.flexslider').flexslider('next');
		}, 100);
		});
		
}
// -----------------------------------------------------
// -------------    VERTICAL MENU SCROLL ---------------
// -----------------------------------------------------
function photobuddy_fl_vertical_menu_scroll(){
	
	"use strict";
	var H = jQuery( window ).height();

	
	jQuery('.photobuddy_fl_vertical_menu .scrollable').css({height:H});
	jQuery('.photobuddy_fl_vertical_menu .scrollable').niceScroll({
		touchbehavior:false,
		cursorwidth:0,
		autohidemode:true,
		cursorborder:"0px solid #fff"
	});

} 

// -----------------------------------------------------
// --------------    SHARING SOCIAL ICONS   ------------
// -----------------------------------------------------

function photobuddy_fl_sharing_social_icons(){
	"use strict";
	jQuery('.photobuddy_fl_gallery_single_in .img_list_nth .title a').on('click', function(e) {
		e.preventDefault();
		
		var social_list = jQuery(this).parent().parent().find('.share_social');
		
		// for removing old classes
		var vrem = jQuery('.photobuddy_fl_gallery_single_in .img_list_nth .title');
		vrem.removeClass('opened');
		vrem.find('a').removeClass('opened');
		vrem.parent().find('.share_social').removeClass('opened');
		
		if(!jQuery(this).hasClass('opened')){
			jQuery(this).addClass('opened');
			jQuery(this).parent().addClass('opened');
			setTimeout(function(){
				social_list.addClass('opened');
			}, 500);
		}else{
			jQuery(this).removeClass('opened');
			jQuery(this).parent().removeClass('opened');
			social_list.removeClass('opened');
		}
		return false;
	});
}
// -----------------------------------------------------
// ---------------    TOTOP MYHIDE    ------------------
// -----------------------------------------------------
function photobuddy_fl_totop_myhide(){
	"use strict";
	var totop		=	jQuery("a.totop");
	var topoffset 	= 	totop.offset().top;
	
	if(topoffset > 1000){
		totop.addClass('opened');	
	}else{
		totop.removeClass('opened');	
	}
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------
function photobuddy_fl_totop(){
	"use strict";
	jQuery("a.totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

// -----------------------------------------------------
// ---------------   STICKY SIDEBAR    -----------------
// -----------------------------------------------------
function photobuddy_fl_sticky_sidebar(){

	"use strict";
	
	jQuery('.sticky_sidebar').theiaStickySidebar({
		containerSelector: '', // The sidebar's container element. If not specified, it defaults to the sidebar's parent.
		additionalMarginTop: 20,
		additionalMarginBottom: 0,
		updateSidebarHeight: true, // Updates the sidebar's height. Use this if the background isn't showing properly, for example.
		minWidth: 1040, // The sidebar returns to normal if its width is below this value. 
	});
	
}
// -----------------------------------------------------
// --------------    MENU TRIGGER    -------------------
// -----------------------------------------------------
function photobuddy_fl_menu_on(){
	"use strict";
	jQuery('.photobuddy_fl_menu_trigger a').on('click', function(e) {
		e.preventDefault();
 

		if(!jQuery(this).hasClass('opened')){
			jQuery('.photobuddy_fl_menu_trigger').addClass('opened');
			setTimeout(function(){
				jQuery('.photobuddy_fl_vertical_menu').addClass('opened');	
			}, 500);
			
		}else{
			jQuery('.photobuddy_fl_vertical_menu').removeClass('opened');
		}
		return false;
	});
}

// -----------------------------------------------------
// --------    MENU HEIGHT REGULATION    ---------------
// -----------------------------------------------------
function photobuddy_fl_vertical_menu_height_regulation(){
	"use strict";
	
	var H 		= jQuery( window ).height();
	var menu	= jQuery('.photobuddy_fl_vertical_menu');
	
	
	menu.css({height:H});
	
}



// -----------------------------------------------------
// --------    IMG HEIGHT REGULATION    ----------------
// -----------------------------------------------------
function photobuddy_fl_img_height_regulation(){
	"use strict";
	
	var H 		= jQuery( window ).height();
	var list	= jQuery('.photobuddy_fl_slider .flexslider ul.slides li');
	
	list.css({height:H});
}


// -----------------------------------------------------
// ------------------    SLIDER    ---------------------
// -----------------------------------------------------
function photobuddy_fl_slider(){
	"use strict";
	
	jQuery('.flexslider').flexslider({
		animation: "fade",
		controlNav: false, 
    	directionNav: true,
		slideshowSpeed: 4000,
          
	});


}


// -----------------------------------------------------
// --------------    VERTICAL NAVIGATION    ------------
// -----------------------------------------------------
function photobuddy_fl_vertical_menu_trigger(){
	"use strict";
	jQuery('.photobuddy_fl_vertical_menu_in span.vertical_menu_closer a').on('click', function(e) {
		e.preventDefault();
		
		if(jQuery(this).hasClass('opened')){
			jQuery(this).removeClass('opened');
			jQuery(this).addClass('opened');
			jQuery('.photobuddy_fl_vertical_menu').addClass('opened');
		}else{
			jQuery(this).removeClass('opened');
			jQuery('.photobuddy_fl_vertical_menu').removeClass('opened');
			jQuery('.photobuddy_fl_menu_trigger').removeClass('opened');
		}
		return false;
	});
}