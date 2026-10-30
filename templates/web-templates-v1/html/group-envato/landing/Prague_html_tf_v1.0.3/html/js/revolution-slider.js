$(document).ready(function () {

    $('.carousel').carousel({
        interval: 10000
    })

    var $number = $('.item').length;
   

    setInterval(function(){
 
    var $number = $('.item').length;
        
    if ($('.active').hasClass('element1')) {
        $('.changed1').html($number);
    }

    else if ($('.active').hasClass('element2')) {
        $('.changed1').html($number - 3);
    }
    else if ($('.active').hasClass('element3')) {
        $('.changed1').html($number - 2);
    }
    else if ($('.active').hasClass('element4')) {
        $('.changed1').html($number - 1);
    }
    }, 100);

    setInterval(function(){
 
        var $number = $('.item').length;
            
        if ($('.active').hasClass('element1')) {
            $('.changed2').html($number - 2);
        }
    
        else if ($('.active').hasClass('element2')) {
            $('.changed2').html($number - 1);
        }
        else if ($('.active').hasClass('element3')) {
            $('.changed2').html($number);
        }
        else if ($('.active').hasClass('element4')) {
            $('.changed2').html($number - 3);
        }
        }, 100);
});