window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
}) 