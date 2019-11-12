$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  var scene1 = new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      triggerHook: .8, // show, when scrolled 40% into view
      duration: "75%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 0 // move trigger to center of element
    })
    .setClassToggle(".reveal1", "visible") // add class to reveal1
    //.addIndicators() // add indicators (requires plugin)


  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: .6, // show, when scrolled 20% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 0 // move trigger to center of element
  })
    .setClassToggle(".reveal2", "visible") // add class to reveal2
    //.addIndicators() // add indicators (requires plugin)

    controller.addScene([
      scene1,
      scene2,
    ]);
});
