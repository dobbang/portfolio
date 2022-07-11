$("document").ready(function(){



function random(min, max) {
     
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector,delay,size){
 
  gsap.to(selector, random(1.5,2.5), {
    y: size,
    repeat: -1, // -1 무한반복
    yoyo: true, // 애니메이션 되돌아오기(설정안할 시 끈킴)
    ease: Power1.easeInOut, // 타이밍함수
    delay: random(0,delay) // 지연시간
  })
}
floatingObject('.floating1', 0.2, 12)
floatingObject('.floating2', 0.1 , -17)
floatingObject('.floating3', 1 , 8)
floatingObject('.floating4', 0.0 , 15)



$(".web-p").slick({
  arrows: true,
  dots: true, 
  slidesToShow: 1, 
  slidesToScroll: 3, 
  autoplay: true,
  autoplaySpeed: 1000, 
  centerMode: true,
})





let more_count = 1;


$(".more-btn").click(function(){
  more_count++;
  $(".design .design-wrap ul li.product-" + more_count).show()

  if( more_count == 2){
    $(".more-btn").hide()
    $(".design .design-wrap ul li.product-2:last-child").css("margin-bottom", "170px")
    alert
  }
  
})



})
    




function randomDirection() {
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 } });

}

function makeItRain() {
  document.getElementById("makeItRain").disabled = true;
  var end = Date.now() + 2 * 1000;

  // go Buckeyes!
  var colors = ['#bb0000', '#ffffff'];

  function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors });

    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors });


    if (Date.now() < end) {
      requestAnimationFrame(frame);
    } else
    {
      document.getElementById("makeItRain").disabled = false;
    }
  };
  frame();
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
