$(document).ready(function() {

  // Place JavaScript code here...
  var peckCounter = 0;
  $('.peckBox').click(function(){
    peckCounter += 1;
    $(this).attr(
      'src', "http://pngimg.com/upload/pigeon_PNG3426.png"
    )
  });
});