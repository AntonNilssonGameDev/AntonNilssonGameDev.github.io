var $grid = $('.resume-items').isotope('layout');

$('.resume-filter').on( 'click', 'a', function(e) {
  	var filterValue = $(this).attr('data-filter');
  	$grid.isotope({ filter: filterValue });

  	$('.resume-filter li a').removeClass('active');
  	$(this).closest('li a').addClass('active');
});