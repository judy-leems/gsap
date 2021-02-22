
gsap.registerPlugin(ScrollTrigger);

gsap.to('.square', {
	x: 700,
	duration: 8,
	scrollTrigger: {
		trigger: '.square2',
		start: 'top 30%',   
		end: () => `+=${document.querySelector('.square').offsetHeight}`,
		scrub: true, //4 
		toggleAction: 'restart none none none', // onEnter onLeave onEnterBack onLeaveBack
		pin: '.square',
		pinSpacing: true,
		markers: true
		
	}
})