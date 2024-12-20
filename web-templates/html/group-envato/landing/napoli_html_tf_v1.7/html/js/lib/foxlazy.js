jQuery(function($){
 

	$.fn.foxlazy = function(threshold, callback) {

	  var $w = $(window),
	      th = threshold || 0,
	      retina = window.devicePixelRatio > 1,
	      attrib = retina ? "data-lazy-src-retina" : "data-lazy-src",
	      images = this,
	      loaded;

	  this.one("foxlazy", function() {
	    var source = this.getAttribute(attrib);
	    source = source || this.getAttribute("data-lazy-src");
	    if (source) { 
	      this.setAttribute("src", source);
	      if ($(this).hasClass('s-img-switch')) {
	      	$(this).parent().css( 'background-image' , 'url(' + source + ')' );
	      	$(this).hide();
	      }
	    }
	    if (typeof callback === "function") callback.call(this);
	  });

	  function foxlazy() {
	    var inview = images.filter(function() {
	      var $e = $(this);

	      var scrollTop = $w.scrollTop(),// scrollTop
	          scrollTopHeight = scrollTop + $w.height(), // scrollTopHeight
	          offsetTop = $e.offset().top, // offsetTop
	          offsetTopHeight = offsetTop + $e.height(); // offsetTopHeight

	      return offsetTopHeight >= scrollTop - th && offsetTop <= scrollTopHeight + th;
	    });

	    loaded = inview.trigger("foxlazy");
	    images = images.not(loaded);
	  }

	  $w.on("load.foxlazy scroll.foxlazy resize.foxlazy lookup.foxlazy", foxlazy);

	  foxlazy();

	  return this;

	};
 
	$("img[data-lazy-src]").foxlazy();

});