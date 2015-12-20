(function(){
	var $container = $('#container');

	$container.isotope({
		masonry: {
			itemSelector:'.item',
			columnWidth: 240
		}
	});

	$('#filters li').on('click',function(){
		var $this = $(this);
		var filterVal = $this.attr('data-filter');
		$container.isotope({filter:filterVal});
	});

})();