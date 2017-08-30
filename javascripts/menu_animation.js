// JavaScript Document

var action = 1;

$(document).ready(function() {
  $(".navbar-toggle").click(function viewSomething() {
    if ( action == 1 ) {
        $('.bar-01').addClass('rotatedLeft');
        $('.bar-01').css({position: 'relative',top: '13px'});
        $('.bar-02').toggle(250);
        $('.bar-03').addClass('rotatedRight');
        $('.bar-03').css({position: 'relative',top: '0px'});
        action = 2;
    } else {
        $('.bar-01').removeClass('rotatedLeft');
        $('.bar-01').css({position: 'relative',top: '0px'});
        $('.bar-02').toggle(250);
        $('.bar-03').removeClass('rotatedRight');
        $('.bar-03').css({position: 'relative',top: '0px'});
        action = 1;
    }
  });
});
