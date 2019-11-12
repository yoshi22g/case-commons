$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      triggerHook: .6, // show, when scrolled 40% into view
      duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 0 // move trigger to center of element
    })
    .setClassToggle("#reveal1", "visible") // add class to reveal
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});
