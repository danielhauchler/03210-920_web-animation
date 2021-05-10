var circleIn = document.getElementById('ring_two')

var tl = new gsap.timeline();

tl.to(circleIn, 5, {rotation:"-360", ease:Linear.easeNone, repeat:-1});

new AnimPanel(tl)