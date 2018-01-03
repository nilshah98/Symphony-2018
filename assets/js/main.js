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
	}, 3000);
	
});

function nextMsg() {
    if (messages.length == 0) {
        // once there is no more message, do whatever you want
        // alert("redirecting");
    } else {
        // change content of message, fade in, wait, fade out and continue with next message
        $('#loader_content').text(messages.pop()).fadeIn(100).delay(850).fadeOut(100, nextMsg);
    }
};
// list of messages to display
var messages = [
	"Loading Awesomeness...",
	"Hover over characters for more magic",
	"Voila!",
].reverse();

// initially hide the message
$('#message').hide();

// start animation
nextMsg();

// $('#go_right').click(function() {
//     $('#scrolling-wrapper').animate({
//         scrollLeft : 100 
//     }, 500);
// });