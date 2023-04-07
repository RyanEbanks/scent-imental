// gsap.registerPlugin(CSSRulePlugin);
// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//   toggleActions: "restart pause resume pause",
//   scroller: ".myborder"
// });

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.seasons',
    }
});

tl.from('.seasons', {opacity: 0, duration: 2, x: '-100%', ease: 'power4' });


//This is saying we want to animate from a particular state to a new state
gsap.from('.anim1', {opacity: 0, duration: 1.5, y: '100%', ease: 'back', stagger: 0.6 });


// gsap.from('.introduction', {duration: 1.5, y: '-100%', ease: 'back' });


gsap.from('.hero-info', {opacity: 0, duration: 1.5, y: '-100%', ease: 'power4' });