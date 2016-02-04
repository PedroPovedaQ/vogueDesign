$(document).ready(function() {

    // var width= window.innerHeight*16.35;

    // $(".fullpage").width(width); 

    (function($) {
        $.jInvertScroll(['.fullpage'], {});
    }(jQuery));


    $(window).bind('resize', function() {
    		


        (function($) {
            $.jInvertScroll(['.fullpage'], {});
        }(jQuery));

    });
});
