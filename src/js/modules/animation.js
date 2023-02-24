gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({ 
  paused: true, 
  reversed: true,
})

// Анимация второго экрана
// const introImage = document.querySelector('.intro__scrolling');
// if(helpers.$window.width() >= 1200) {
//   gsap.from(introImage, {
//     xPercent: 100,
//     ease: "none"
//   })
//   let scrollTween = gsap.to(introImage, {
//     xPercent: -100,
//     ease: "none", // <-- IMPORTANT!
//     scrollTrigger: {
//       trigger: '.intro__block',
//       scrub: true,
//       pin: true,
//       anticipatePin: 1,
//       ease: "none",
//       end: () => "+=" + introImage.offsetWidth, 
//     },
//   });
  
//   ScrollTrigger.create({
//     trigger: introImage,
//     containerAnimation: scrollTween,
//     toggleClass: "is-active",
//     start: "center 60%",
//     id: "3"
//   });
// }

// Анимация дабовление активного класса
const jsTarget = gsap.utils.toArray(".js-target");

jsTarget.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    toggleClass: "is-active",
    start: "top 60%",
    once: true
  });
});

// Анимация счетчика
const counters = (target, bar) => {
  $(target).each(function(index, element) {
    var count = $(this),
        zero = {val:0},
        num = count.data("number"),
        split = (num + "").split("."),
        decimals = split.length > 1 ? split[1].length : 0;
  
      gsap.to(zero, {
        val: num,
        duration: 2,
        scrollTrigger: element,
        onUpdate: function() {
          if (!bar) {
            count.text(zero.val.toFixed(decimals))
          } else {
            count.css('height', zero.val.toFixed(decimals) + '%')
          }
        }
      });
  });
}

counters(".counts", false);
counters(".second-counter", true);

ScrollTrigger.update();

// Поочередная появление блоков
ScrollTrigger.batch(".batch", {
	onEnter: (elements) => {
		gsap.from(elements, {
			autoAlpha: 0,
			y: 60,
			stagger: 0.15,
		});
	},
	once: true,
  overwrite: true,
});


// Анимация появление пунктов меню
function navItemsAnimation() {
  if($(window).width() < 1200) {
    tl.fromTo(".header__link", { autoAlpha: 0, y: 60}, {
      y: 0,
      autoAlpha: 1,
      stagger: 0.15,
      ease: 'none'
    })
  }
}

navItemsAnimation();

$(window).on('resize', function(){
  navItemsAnimation();
});

$(".js-burger").on("click", function () {
	tl.reversed() ? tl.play() : tl.reverse();
});

AOS.init({
  once: true,
});

