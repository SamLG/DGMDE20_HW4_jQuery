/**
 * This js file add functionality to coffe.samgrise.me for form validation,
 * interaction, and virtual-barrista
 *
 * @author Sam Grise
 * @version Last modified 12_8_16
**/
$(document).ready(function(){

    $('main').bind('swipeleft', function(event){
		// $('main').addClass('red');
        /* Useful sources for creating below functionality
           https://api.jquerymobile.com/pagecontainer/#method-change
           http://stackoverflow.com/questions/23852890/jquery-mobile-swipe-to-navigate-as-single-page-style */
        $( ":mobile-pagecontainer" ).pagecontainer( "change", "#sitesPage", {
                transition: "slide",
            });
	}); //end swipe left

	$('main').bind('swiperight', function(event){
		// $('main').removeClass('red');
        $( ":mobile-pagecontainer" ).pagecontainer( "change", "#home", {
                transition: "slide",
                reverse: true
            });
	});

    // $('main').bind('taphold', function(event){
	// 	$('#kitteh').removeClass().addClass('lots');
	// }); //end taphold
    //
    $(window).on('orientationchange', function(){
		if(window.orientation == 0) {
            // i < 100 gets the bean off the screen
            for (i=0; i < 100; i++){
                $('h1').append('<div class="leaf">*</div>');
                var pos = Math.round(Math.random()*40);
                var fallPos = '+='.concat(String(pos)).concat('px');
                $('.leaf').attr("top", 0).attr("left", fallPos);

                $('.leaf').animate({
                        bottom: "700px",
                    }, 100, function() {
                    // Animation complete
                });
            }
		} else {
			// $('#kitteh').removeClass().addClass('three');
		}
	}); //end orientationchange

    //check that all requried fields validate before submission and display error if necessary
    $('#submit-btn').click(function(submit){
        var nE = nameError();
        var eE = emailError();
        if (!nE || !eE){
            $('#submit-msg').html('Please Fill All Required Fields');
            submit.preventDefault();
        }
    }); //end click

    /**
     * This method will check to make sure name has length and display error if necessary
     *
     * @return  Returns boolean value
     */
    function nameError () {
        if ($('#name').val().length == 0){
            $('#name').attr({
                'placeholder': 'REQUIRED ex: Jane Doe'
            }).addClass('error');
            return false;
        }
        else {
            return true;
        }
    };

    /**
     * This method will check to make sure email is x@x.x and display error if necessary
     *
     * @return  Returns boolean value
     */
    function emailError () {
        if (!$('#email').val().match(/\S+\@\S+\.\S/g)){
            $('#email').attr({
                'placeholder': 'REQUIRED ex: example@site.com'
            }).addClass('error');
            return false;
        }
        else {
            return true;
        }
    };

    //validate name when user leaves input area
    $('#name').focusout(function(){
        nameError();
    }); //end focusout

    //on focus remove error styling and remove submit error message
    $('#name').focus(function(){
        $('#name').removeClass('error').attr({
            'placeholder': 'Jane Doe'
        });
        $('#submit-msg').html('');
    }); //end focus

    //validate email when user leaves input area
    $('#email').focusout(function(){
        emailError();
    }); //end focusout

    //on focus remove error styling and remove submit error message
    $('#email').focus(function(){
        $('#email').removeClass('error').attr({
            'placeholder': 'example@site.com'
        });
        $('#submit-msg').html('');
    }); //end focus

});//end doc ready
