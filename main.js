$(document).ready(function(){
  $('.navbar-toggle').click(function(){
    if($('#bs-example-navbar-collapse-1').hasClass('in')){
      $('.main-slogan').show();
    }
    else {
      $('.main-slogan').hide();
    }
  });

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.main-slogan',
    reverse: false
  })
  .setClassToggle('.main-slogan', 'fadeInUp') 
  .addTo(controller);

  // build a scene
  var ourScene2 = new ScrollMagic.Scene({
    triggerElement: '.about',
    reverse: false
  })
  .setClassToggle('.about', 'fadeInUp') 
  .addTo(controller);

  // build a scene
  var ourScene3 = new ScrollMagic.Scene({
    triggerElement: '.about-2',
    reverse: false
  })
  .setClassToggle('.about-2', 'slideInRight')
  .addTo(controller);

  // build a scene
  var ourScene4 = new ScrollMagic.Scene({
    triggerElement: '.how-works-text',
    reverse: false
  })
  .setClassToggle('.how-works-text', 'fadeInUp')
  .addTo(controller);

  // build a scene
  var ourScene5 = new ScrollMagic.Scene({
    triggerElement: '.client-img',
    reverse: false
  })
  .setClassToggle('.client-img', 'slideInRight')
  .addTo(controller);

   // build a scene
  var ourScene6 = new ScrollMagic.Scene({
    triggerElement: '.price-help',
    reverse: false
  })
  .setClassToggle('.price-help', 'fadeInUp')
  .addTo(controller);

  // build a scene
  var ourScene7 = new ScrollMagic.Scene({
    triggerElement: '.map-text',
    reverse: false
  })
  .setClassToggle('.map-text', 'fadeInDown')
  .addTo(controller);

  // build a scene
  var ourScene8 = new ScrollMagic.Scene({
    triggerElement: '.inline-box-price',
    reverse: false
  })
  .setClassToggle('.inline-box-price', 'slideInRight')
  .addTo(controller);



});
