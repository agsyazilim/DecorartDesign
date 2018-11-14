$(document).ready(function() {
	$('#grid_to4').click(function() {
		$('.grid-list').removeClass('grid-list').addClass('grid').addClass('grid-3');
		$('.grid.grid-3').removeClass('grid-3').addClass('grid-4');
		$('.grid-4 .urun-list__urun').removeClass('col-sm-4')
			.addClass('col-sm-3').css('height', 520);
		$('.grid .urun-list__urun .urun-liste-resim').removeClass('col-sm-4');
		$('.grid .urun-list__urun .urun-list__urun-yazi').removeClass('col-sm-8');
		$('.grid .urun-list__urun .urun-border').removeClass('col-xs-12');

	});

	$('#grid_to3').click(function() {
		$('.grid-list').removeClass('grid-list').addClass('grid').addClass('grid-4');
		$('.grid.grid-4').removeClass('grid-4').addClass('grid-3');
		$('.grid-3 .urun-list__urun').removeClass('col-sm-3')
			.addClass('col-sm-4').css('height', 520);
		$('.grid .urun-list__urun .urun-liste-resim').removeClass('col-sm-4');
		$('.grid .urun-list__urun .urun-list__urun-yazi').removeClass('col-sm-8');
		$('.grid .urun-list__urun .urun-border').removeClass('col-xs-12');
	});

	$('#grid_tolist').click(function() {
		$('.grid').removeClass('grid').removeClass('grid-4').removeClass('grid-3').addClass('grid-list');
		$('.grid-list .urun-list__urun').removeClass('col-sm-3').removeClass('col-sm-4')
			.addClass('col-sm-12').css('height', 300);
		$('.grid-list .urun-list__urun .urun-liste-resim').addClass('col-sm-4');
		$('.grid-list .urun-list__urun .urun-list__urun-yazi').addClass('col-sm-8');
		$('.grid-list .urun-list__urun .urun-border').addClass('col-xs-12');

	});
});

