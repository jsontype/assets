

	function tm_animate_text(){
	
		"use strict";
		
		var animateSpan			= jQuery('.animation_text_word');
		
			animateSpan.typed({
				strings: ["Branding,", "Branding,", "Branding,"],
				loop: true,
				startDelay: 1e3,
				backDelay: 3e3
			});
	}

	function tm_animate_text_2(){
	
		"use strict";
		
		var animateSpan			= jQuery('.animation_text_word_2');
		
			animateSpan.typed({
				strings: ["Amazing", "Amazing", "Amazing"],
				loop: true,
				startDelay: 1e3,
				backDelay: 3e3
			});
	}

	function tm_animate_text_3(){
	
		"use strict";
		
		var animateSpan			= jQuery('.animation_text_word_3');
		
			animateSpan.typed({
				strings: ["Organiser,", "Organiser,", "Organiser,"],
				loop: true,
				startDelay: 1e3,
				backDelay: 3e3
			});
	}

	function tm_animate_text_4(){
	
		"use strict";
		
		var animateSpan			= jQuery('.animation_text_word_4');
		
			animateSpan.typed({
				strings: ["writter", "writte,", "writter"],
				loop: true,
				startDelay: 1e3,
				backDelay: 3e3
			});
	}

	jQuery(document).on('ready', function () {
		(function ($) {
			tm_animate_text();
			tm_animate_text_2();
			tm_animate_text_3();
			tm_animate_text_4();
		})(jQuery);
	});



