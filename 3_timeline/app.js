
gsap.registerPlugin(ScrollTrigger);

/* 
gsap.to('.box', {
	x: 500,
	duration: 2
})
gsap.to('.box', {
	y: 200,
	duration: 3,
	delay: 2
})
gsap.top('.box', {
	x: 0, 
	duration: 2, 
	delay: 5
})
*/

const t1 = gsap.timeline({
	scrollTrigger: {
		trigger: '.box',
		markers: true,
		start: 'top 80%',
		end: 'top 30%',
		scrub: 1
	}
});

t1.to('.box', {
		x: 500,
		duration: 2
	})
	.to('.box', {
		y: 200,
		duration: 3,
		delay: 2
	})
	.to('.box', {
		x: 0, 
		duration: 2, 
		delay: 5
	})