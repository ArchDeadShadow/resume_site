// Automatically set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear()

// Owl Carousel 2
$('.owl-carousel').owlCarousel({
	lazyLoad: true,
	nav: false,
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
		},
		600: {
			items: 3,
			nav: false,
		},
		1000: {
			items: 5,
			nav: true,
			loop: false,
		},
	},
})

// Mousewheel
owl.on('mousewheel', '.owl-stage', function (e) {
	if (e.deltaY > 0) {
		owl.trigger('next.owl')
	} else {
		owl.trigger('prev.owl')
	}
	e.preventDefault()
})
