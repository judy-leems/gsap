
gsap.registerPlugin(ScrollTrigger);

/* 
ScrollTrigger.create({
	trigger: '.box',
	start: 'top 80%',
	end: 'top 50%',
	markers: true,
	toggleClass: 'box-red'
})
*/
/*
ScrollTrigger.create({
	start: 'top 6%',
	markers: true,
	trigger: '.panel',
	toggleClass: {
		targets: 'nav',
		className: 'nav-active'
	}
})*/

ScrollTrigger.create({
	markers: true,
	start: 'top 80%',
	end: 'top 50%',
	trigger: '.box',
	// onEnter: () => console.log('enter!'),
	// onLeave: () => console.log('leave!'),
	// onEnterBack: () => console.log('enterback!'),
	// onLeaveBack: () => console.log('leaveback!'),
	onUpdate: (self) => console.log(self)
})