function isotope(){
  if( $('.masonry').length ){
    $('.masonry').each(function(){
      var self = $(this);
      var gutter_val  = parseInt( self.attr('data-space'), 10 ) || 10 ;
        if ($(window).width() <= 980) {
            gutter_val  = parseInt(self.attr('data-space-tablet'), 10) || gutter_val;
        }
        if ($(window).width() < 767) {
            gutter_val  = parseInt(self.attr('data-space-mobile'), 10) || gutter_val;
        }

        $('.masonry').isotope({
        layoutMode: 'masonry',
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer',
            gutter: gutter_val
          }
        })
      })
  }
}


$(window).on('load', function(){
  isotope()
})

  $(window).on('resize', function(){
    isotope()
  })

 