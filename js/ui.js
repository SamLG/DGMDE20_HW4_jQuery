// jQuery UI page
$(document).ready(function(){
    $( "#resizable" ).resizable({
      containment: "#container",
      helper: "ui-resizable-helper",
      animate: true,
      aspectRatio: 3 / 2
    });

    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Head Home": function() {
          $( this ).dialog( "close" );
          $(location).attr('href',"index.html");
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      },
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });

    $( "#opener" ).on( "click", function() {
      $( "#dialog-confirm" ).dialog( "open" );
    });
    var state = true;
    $( "#button" ).on( "click", function() {
        runEffect();
    });
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();

      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#00524d",
          color: "#ffffff",
        }, 1000 ).toggle( selectedEffect, options, 500 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#5b2022",
          color: "#ffffff",
        }, 1000 ).toggle( selectedEffect, options, 500 );
      }
      state = !state;
      // Run the effect
    //   $( "#effect" ).toggle( selectedEffect, options, 500 );
    };

    $( document ).tooltip({
      track: true
    });
});
