/* 
 _____   _           _         _                        _                  
|_   _| | |         | |       | |                      | |                 
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___ 
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/
Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes
*/

$(document).ready(function() {
  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }, 7000);
  
});

function nextMsg() {
    if (messages.length == 0) {
        // once there is no more message, do whatever you want
        // alert("redirecting");
    } else {
        // change content of message, fade in, wait, fade out and continue with next message
        $('#loader_contentx').text(messages.pop()).fadeIn(100).delay(850).fadeOut(100, nextMsg);
    }
};
// list of messages to display
var messages = [
  "Assembling Bolt the Robot...",
  "Prancing the plains for Bob the Caveman...",
  "Excavating the earth for Cleopetra's tomb...",
  "Testing Frank's Polyjuice potion...",
  "Hover over characters for more magic...",
  "Hover over characters for more magic...",
  "Voila!",
].reverse();

// initially hide the message
$('#message').hide();

// start animation
nextMsg();

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#right").on('click', function(event) {

    $("#go_right").hide();

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('#scrolling-wrapper').animate({
        scrollLeft: $(hash).offset().left
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollLeft();
    var docViewBottom = docViewTop + $(window).width();
    docViewBottom-=100;
    // offset of added
    var elemTop = $(elem).offset().left;
    var elemBottom = elemTop + $(elem).width();
    // console.log(docViewTop,docViewBottom,elemTop,elemBottom);
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom >= docViewBottom) && (elemTop >= docViewTop));
}

$('#scrolling-wrapper').scroll(function() {  
    // alert("Working");  
    if(isScrolledIntoView($('#card2')))
    {
        $("#go_right").hide();
    }    
});