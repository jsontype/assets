$(window).on("load", function(){	 
 "use strict";
 
$.ready.then(function(){
 var count = 0;
 var pagenum = 5; //change your frame of intro
 var playing = true;
 var idSound = $('#playerintro');
 var loader = $('.preloaderintro');
 var n = document.getElementById('playerintro');
 var allelement = $('div, h1, h2, h3, h4, h5, p, ul, li, a, i, button, section, span');
 var box = $('#boxintro');
 var boxwrap = $('#main-intro');
 var boxskip = $('#boxskip');

 // ridirect landing page
 function directpage() {
     return window.location.href = 'https://themeforest.net/item/artha-interactive-interior-wordpress-theme/21477696'; //change with your url
 }
 
 // skipp button
   boxwrap.mouseover(function() {
   boxskip.show();
   });
   boxwrap.mouseout(function() {
   boxskip.hide();
   });
   $('#skipbtn').click(function() {
   $(this).fadeOut(500);
   	setTimeout(function() {
             endpage(); 
        	}, 600);
   });

 //preloader
 loader.fadeOut('slow', function() {					 
   $('#boxintro').fadeIn(300);
    if ( jQuery( window ).width() > 1024 ) {
	   // start sound
	   idSound[0].volume = 0;
	   idSound.animate({
	     volume: 1
	   }, 3000);
	   n.play();

	   //sound button
	   $('#soundintro').on("click", function(e) {
	     $(this).toggleClass("soundOffintro");
	     if (playing === false) {
	       n.play();
	       playing = true;
	       idSound[0].volume = 0;
	       idSound.animate({
	         volume: 1
	       }, 1000);
	     } else {
	       playing = false;
	       idSound[0].volume = 1;
	       idSound.animate({
	         volume: 0
	       }, 1000);
	     }
	   });
	setTimeout(animationstart, 1000);
	} else {
		$('#soundintro').on("click", function(e) {
			$(this).toggleClass("soundOffintro");
			 n.play();
		     if (playing === true) {
		       playing = false;
		       idSound[0].volume = 0;
		       idSound.animate({
		         volume: 1
		       }, 1000);
		     } else {
		       n.pause();		
		       playing = true;
		       idSound[0].volume = 1;
		       idSound.animate({
		         volume: 0
		       }, 1000);
		     }
		});
	setTimeout(animationstart, 1000);
	}
 });


 // animation start
 function animationstart() {
   count++;
   window.page = $('#frame' + count).each(function() {
     var $this = $(this);
     var timeframe = $(this).attr("data-frame");
     if (count === pagenum) {
     setTimeout(endpage, timeframe);
   	 } else {
     setTimeout(animress, timeframe);
     }
   });
   page.fadeIn(1000);
    $([allelement]).each(function(index, foundElements) {
       	foundElements.each(function(element) {
        	var $this = $(this);
        	var time = $(this).attr('data-time');
        	setTimeout(function() {
            $this.addClass('intro');
        	}, time);
        	console.log(time);
        });
    });
 }

 // clear animation
 function animress() {
   $([allelement]).each(function(i){
      var t = $(this);
      setTimeout(function(){ t.removeClass('intro'); }, (i+1) * 10);
   });
   page.fadeOut(3000, 'swing');
   setTimeout(animationstart, 100);
 }
 
 // end page
 function endpage() {
   $('#main-intro').fadeOut(1000, 'swing');
   page.fadeOut(500, 'swing');
   setTimeout(function() {
   if (playing === true) {
     n.play();
     playing = false;
     idSound[0].volume = 1;
     idSound.animate({
       volume: 0
     }, 500);
	 directpage();
   }
  }, 1000);
 }
});

});















