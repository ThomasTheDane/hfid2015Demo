$(document).ready(function() {

  var peckCounter = 0;
  $('.peckBox').click(function(){
    peckCounter += 1;
    $(this).attr(
      'src', "http://pngimg.com/upload/pigeon_PNG3426.png"
    )
  });
  // Place JavaScript code here...
    $("#leoMessage").on("click", function(){
        $("#name").text("Learning Leo");
    })
    $("phoebeMessage").on("click", function(){
        $("#name").text("Philosophical Phoebe");
    });
    $("carlMessage").on("click", function(){
        $("#name").text("Cultural Carl");
    });
});

var sendMessage = function(){
    bootstrap_alert.success("Message Sent")
};

var bootstrap_alert = function() {

};

bootstrap_alert.success = function(message) {
    $('#alert_placeholder').html('<div class="alert alert-success"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>');
};
