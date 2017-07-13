$(document).ready(function () {

    carousel();

});

function carousel() {
    $('.slid').slick({
		dots: false,
		infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
		      breakpoint: 690,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 590,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
        ]
	});
}