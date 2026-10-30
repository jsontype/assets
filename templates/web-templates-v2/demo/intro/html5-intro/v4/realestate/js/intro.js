$(window).on("load", function () {
  "use strict";

  $.ready.then(function () {

    var count = 0;

    // AUTO detect total frames
    var frames = $('[id^="frame"]');
    var pagenum = frames.length;

    var playing = false;
    var idSound = $('#playerintro');
    var loader = $('.preloaderintro');
    var n = document.getElementById('playerintro');
    var allelement = $('div, h1, h2, h3, h4, h5, p, ul, li, a, i, button, section, span');
    var box = $('#boxintro');
    var boxwrap = $('#main-intro');
    var boxskip = $('#boxskip');

    // redirect landing page
    function directpage() {
      window.location.href = 'https://themeforest.net/item/artha-interactive-interior-wordpress-theme/21477696';
    }

    // skip button
    boxwrap.mouseover(function () {
      boxskip.show();
    });
    boxwrap.mouseout(function () {
      boxskip.hide();
    });
    $('#skipbtn').click(function () {
      $(this).fadeOut(500);
      setTimeout(function () {
        endpage();
      }, 600);
    });

    // =================
    // PRELOADER ONLY (NO AUTOPLAY, NO AUTO ANIMATION)
    // =================
    loader.fadeOut('slow', function () {
      $('#boxintro').fadeIn(300);
      // DO NOT start animation here
      // DO NOT start sound here
      // Wait for Play button click
    });


    // =====================
    // PLAY BUTTON CONTROL
    // =====================
    $('#intro-play-btn').on('click', function () {

      $('#intro-play-overlay').fadeOut(1500);

      $('#frame1').fadeOut(600, function () {
        animationstart();

        n.muted = false;
        n.play();

        idSound[0].volume = 0;
        idSound.animate({ volume: 1 }, 2000);

        playing = true;
        $('#soundintro').removeClass('soundOffintro').addClass('soundOnintro');

      });

    });



    // =====================
    // SOUND BUTTON TOGGLE
    // =====================
    $('#soundintro').on("click", function () {
      $(this).toggleClass("soundOffintro");

      if (playing === false) {
        n.muted = false;
        n.play();
        playing = true;

        idSound[0].volume = 0;
        idSound.animate({ volume: 1 }, 1000);

      } else {
        playing = false;

        idSound[0].volume = 1;
        idSound.animate({ volume: 0 }, 1000, function () {
          n.pause();
        });
      }
    });


    // =========================
    // ANIMATION START
    // =========================
    function animationstart() {

      count++;

      var page = $('#frame' + count);

      if (!page.length) {
        endpage();
        return;
      }

      var timeframe = page.attr("data-frame");

      if (count >= pagenum) {
        setTimeout(endpage, timeframe);
      } else {
        setTimeout(animress, timeframe);
      }

      page.fadeIn(1000);

      allelement.each(function () {
        var $this = $(this);
        var time = $this.attr('data-time');

        if (time) {
          setTimeout(function () {
            $this.addClass('intro');
          }, time);
        }
      });
    }


    // =================
    // CLEAR ANIMATION
    // =================
    
    function animress() {

    var page = $('#frame' + count);
    var fallText = page.find('.fall-text');

    if (fallText.length) {
      fallText.removeClass('intro done');
      void fallText[0].offsetWidth;
      fallText.addClass('out');
    }
    allelement.each(function (i) {
      var t = $(this);
      setTimeout(function () {
        t.removeClass('intro');
      }, (i + 1) * 10);
    });

    setTimeout(function () {
      page.fadeOut(1000, 'swing', function () {
        if (fallText.length) {
          fallText.removeClass('out');
        }
        animationstart();
      });
    }, fallText.length ? 500 : 0); 
  }


    // ============
    // END PAGE
    // ============
    function endpage() {

      $('#main-intro').fadeOut(1000, 'swing');

      var page = $('#frame' + count);
      page.fadeOut(500, 'swing');

      // show first frame again softly
      $('#frame1').fadeIn(3000);

      // wait intro fade first
      setTimeout(function () {

        if (playing === true) {

          // smooth fade out sound
          idSound.stop(true); // stop any previous animation
          idSound.animate(
            { volume: 0 },
            1500,              // fade duration (1.5s – very smooth)
            'linear',
            function () {
              n.pause();
              n.currentTime = 0;
              playing = false;

              // redirect ONLY after sound finished fading
              directpage();
            }
          );

        } else {
          // no sound playing, go directly
          directpage();
        }

      }, 300); // small delay so fade visuals start first
    }

    // ===== SPLIT TEXT INTO SPANS (FOR FALL EFFECT) =====
    $('.fall-text').each(function () {
      var text = $(this).text().trim();   
      var html = '';
      var delay = 0;

      for (var i = 0; i < text.length; i++) {
        var char = text[i];

        if (char === ' ') {
          html += '&nbsp;'; 
        } else {
          html += '<span style="animation-delay:' + (delay * 0.08) + 's">' + char + '</span>';
          delay++;
        }
      }

      $(this).html(html);
    });

  });

});
