// Automatically set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear()

// Owl Carousel 2
$('.owl-carousel').owlCarousel({
	lazyLoad: true,
	nav: true,
	loop: true,
	margin: 10,
	responsive: {
		0: {
			items: 1,
		},
		480: {
			items: 2,
		},
		768: {
			items: 3,
		},
		1000: {
			items: 4,
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
