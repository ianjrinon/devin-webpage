$(function(){

$('.navbar-toggle').on('click',function(e){
  $('.container-fluid').toggleClass('open-nav');
  $('nav div.container').toggleClass('nav-height');
});

}());
