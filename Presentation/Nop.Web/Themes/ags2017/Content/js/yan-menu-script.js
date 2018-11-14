if ($('.isMobile').is(':visible')) {
	//Dropdown menuyu yan bara taşı
	$('.header__mainmenu ul.menu').appendTo($('.sideNav__content'));		
	$('.header__cart').clone().appendTo($('.sideNav__content'));
	$('.login_to-side .fb-icon-top').attr('src', '/Themes/ags2017/Content/img/fb-3.png');
	$('.login_to-side').appendTo($('.sideNav__content'));
	$('.header__logins .btn-group .dropdown-menu').addClass('login_to-side')
		.removeClass('dropdown-menu').appendTo($('.sideNav__content'));
	//Yan bardaki her itemin açacağı listeyi altına ekle
	//for (var i = $('.sideNav__content ul.menu li').length - 1; i >= 0; i--) {
	var menu_id = $('.sideNav__content ul.menu li a').eq(i).attr('data-target');
		$('.sideNav__content ul.menu li a').eq(i).attr({
			'data-toggle': 'collapse',
			'data-target': '.sidebar__collapse-' + i,
			'aria-expanded': 'false',
			'href': '#null'
		});
	
		$(menu_id + '>div>div').addClass('collapse').addClass('sidebar__collapse-' + i).appendTo($('.sideNav__content ul.menu li').eq(i));
	//}
		
}



$('.yan-kategori__list li>a.subKategoriAc').attr({
	'data-toggle': 'collapse',
	'aria-expanded': 'false',
});
$('.yan-kategori__list li>ul').addClass('collapse');

$(document).ready(function(){
	 $('.collapse').on('show.bs.collapse', function () {
		$(this).siblings('a').addClass('active');
	  });

	  $('.collapse').on('hide.bs.collapse', function () {
		$(this).siblings('a').removeClass('active');
	  });
});
