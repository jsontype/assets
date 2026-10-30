$(window).on("load", function(){	 
 "use strict";

$.ready.then(function(){
 var count = 0;
 var pagenum = 5;
 var playing = true;
 var idSound = $('#playerintro');
 var loader = $('.preloaderintro');
 var n = document.getElementById('playerintro');
 var b = $('.bgintro img');
 var l = $('.logointro');
 var h = $('.headingintro');
 var s = $('.subheadingintro');
 var box = $('#boxintro');
 var boxwrap = $('#boxwrap');
 var boxskip = $('#boxskip');
 var videoInt = document.getElementById("my-video"); 

 // skipp button
   boxwrap.mouseover(function() {
   boxskip.show();
   });
   boxwrap.mouseout(function() {
   boxskip.hide();
   });
   $('#skipbtn').click(function() {
   directpage();
   });
   
  // ridirect landing page
 function directpage() {
     return window.location.href = 'https://codecanyon.net/user/on3-step/portfolio'; //change url here
 }


//preloader 
function checkLoad() {
   
   if (videoInt.readyState === 4) {
   loader.fadeOut('slow', function() {
   box.fadeIn(300);
   
  

   // start video
   videoInt.play();
	
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
   });
    } else {
		setTimeout(checkLoad, 100);
    }
   }
checkLoad();
console.log(checkLoad);


 // animation start
 function animationstart() {
  count++;
   window.page = $('#frame' + count).each(function() {
     var $this = $(this);
     var timeframe = $(this).attr("data-frame");
     if (count === pagenum) {
     setTimeout(endpage, 8000);
   	 } else {
     setTimeout(animress, timeframe);
     }
   });
   console.log(page);
   page.fadeIn(1000);
   $([b, l, h]).each(function(index, foundElements) {
       	foundElements.each(function(element) {
        	var $this = $(this);
        	var time = $(this).attr('data-time');
        	setTimeout(function() {
            $this.addClass('intro');
        	}, time);
        	console.log(time);
        });
    });
   $([s]).each(function(index, foundElements) {
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

 // clear class animation
 function animress() {
   page.fadeOut(1000);
   b, l, h, s.removeClass('intro');
   setTimeout(animationstart, 800);
 }
 
 function endpage() {
   loader.fadeIn(1000);
   page.fadeOut(1000);
   if (playing === true) {
     n.play();
     playing = false;
     idSound[0].volume = 1;
     idSound.animate({
       volume: 0
     }, 1000);
   }
   directpage();
 }

});
});