$(window).load(function () {
  $('#slider').nivoSlider({
    effect: "slideInRight"
  });
});

function isMobile() {
  return $('.isMobile').is(':visible');
}
if (isMobile()) {
  $('.header__search').appendTo('header>.container>.row');
}

$('.scrollToTop').on('click', function (event) {
  event.preventDefault();
  /* Act on the event */
  $('html,body').animate({
    scrollTop: 0
  }, 200);
});

if ($('#price-slider').is(':visible')) {
  noUiSlider.create(document.getElementById('price-slider'), {
    start: [3, 2549],
    connect: true,
    range: {
      'min': 3,
      'max': 2549
    },
    format: {
      to: function (value) {
        return Math.round(value);
      },
      from: function (value) {
        return value.replace(',-', '');
      }
    }
  });
  document.getElementById('price-slider').noUiSlider.on('update', function (values, handle) {
    $('#price-slider-range #min').html(values[0]);
    $('#price-slider-range #max').html(values[1]);
  });
  document.getElementById('price-slider').noUiSlider.on('end', function (values) {
    //bulunduğun sayfaya query parameter gir ?pricerange=#min-#max
    $(location).attr('href', '?pricerange=' + values[0] + '-' + values[1]);
  });
}



if (!isMobile()) {
  //
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 700) {
      $('.scrollToTop').slideDown(300);
      $('.header__mainmenu, .header__logo').addClass('navbar-fixed-top');
      $('.header__logo').removeClass('col-sm-4').addClass('col-sm-2');
      $('.dropdown__container')
        .parent().parent().addClass('navbar-fixed-top')
        .removeClass('container').addClass('container-fluid');
      //	      $('.header__cart').removeClass('col-sm-offset-1').appendTo('.header__mainmenu');

    }
    else {
      $('.scrollToTop').slideUp(300);
      $('.header__mainmenu, .header__logo').removeClass('navbar-fixed-top');
      $('.header__logo').removeClass('col-sm-2').addClass('col-sm-4');
      $('.dropdown__container')
        .parent().parent().removeClass('navbar-fixed-top')
        .addClass('container').removeClass('container-fluid');
      //	      	$('.header__cart').addClass('col-sm-offset-1').appendTo('.header .container .row');

    }
  });
}

function yuzdeKontrol() {
  $('.hesabim-toggle').click(function () {
    $('.hesabim-content>div').hide(0);
    divId = $(event.target).attr('data-toggle');
    $(divId).show(0);
  });

  if ($(".sepet-adimlar").is(':visible')) {
    var aktifSayisi = $('.sepet-adimlar li.active').length;
    switch (aktifSayisi) {
    case 1:
      $('.loadBar').html("");
      $('.sepet-adimlar li.active').eq(0).children('.loadBar').html("%25");
      //25
      break;
    case 2:
      $('.loadBar').html("");
      $('.sepet-adimlar li.active').eq(1).children('.loadBar').html("%50");
      //50
      break;
    case 3:
      $('.loadBar').html("");
      $('.sepet-adimlar li.active').eq(2).children('.loadBar').html("%75");
      //75
      break;
    case 4:
      $('.loadBar').html("");
      $('.sepet-adimlar li.active').eq(3).children('.loadBar').html("%100");
      //100
      break;
    default:
      $('.loadBar').html("");
      $('.sepet-adimlar li.active').eq(0).children('.loadBar').html("%25");
      //25
      break;
    }
  }

}


$(document).ready(function () {
  //Login kısmı dropdown hover eventi
  $('.header__logins .btn-group>.dropdown-toggle, .header__logins .btn-group>.dropdown-menu').hover(function () {
    //$('.header__logins .btn-group>.dropdown-toggle').dropdown("show");
    $(this).siblings('.dropdown-menu').show(0);
  }, function (event) {
    $('.header__logins .btn-group>.dropdown-menu').hover(function () {
      $('.header__logins .btn-group>.dropdown-menu').show(0);
    }, function () {
      $('.header__logins .btn-group>.dropdown-menu').hide(0);
    });
    $(this).siblings('.dropdown-menu').delay(100).hide(0);
  });



  if ($('.telno').is(':visible')) {
    $('.telno').mask('0(000) 000 00 00');

  }
  yuzdeKontrol();

  if ($("#adres-akordion").is(':visible')) {
    $("#adres-akordion").accordion({
      heightStyle: "content",
      navigation: false
    });

    $('#adres-akordion button').click(function (e) {

      e.preventDefault();
      var delta = ($(this).is('.next') ? 1 : -1);
      $('#adres-akordion').accordion('option', 'active', (
        $('#adres-akordion').accordion('option', 'active') + delta));

      if ($('.odeme-yontemi-akordion, .odeme-bilgisi-akordion, .dogrula-akordion').hasClass('ui-accordion-content-active')) {
        $('.sepet-adimlar li').eq(2).addClass('active');
        $('.sepet-adimlar li').eq(2).children('img').attr('src', 'img/sepet-adim/credit-card.png');
        if ($('.dogrula-akordion').hasClass('ui-accordion-content-active')) {
          $('.sepet-adimlar li').eq(3).addClass('active');
          $('.sepet-adimlar li').eq(3).children('img').attr('src', 'img/sepet-adim/check.png');
        }
      }
      else {
        $('.sepet-adimlar li').eq(2).removeClass('active');
        $('.sepet-adimlar li').eq(2).children('img').attr('src', 'img/sepet-adim/credit-card2.png');
        $('.sepet-adimlar li').eq(3).removeClass('active');
        $('.sepet-adimlar li').eq(3).children('img').attr('src', 'img/sepet-adim/check2.png');
      }

      yuzdeKontrol();
    });
  }


  $('#adres-akordion h3').click(function (event) {
    if ($('.odeme-yontemi-akordion, .odeme-bilgisi-akordion, .dogrula-akordion').hasClass('ui-accordion-content-active')) {
      $('.sepet-adimlar li').eq(2).addClass('active');
      $('.sepet-adimlar li').eq(2).children('img').attr('src', 'img/sepet-adim/credit-card.png');
      if ($('.dogrula-akordion').hasClass('ui-accordion-content-active')) {
        $('.sepet-adimlar li').eq(3).addClass('active');
        $('.sepet-adimlar li').eq(3).children('img').attr('src', 'img/sepet-adim/check.png');
      }
    }
    else {
      $('.sepet-adimlar li').eq(2).removeClass('active');
      $('.sepet-adimlar li').eq(2).children('img').attr('src', 'img/sepet-adim/credit-card2.png');
      $('.sepet-adimlar li').eq(3).removeClass('active');
      $('.sepet-adimlar li').eq(3).children('img').attr('src', 'img/sepet-adim/check2.png');
    }

    yuzdeKontrol();
  });

  var popupAc = function (event, formIcerik) {
    formIcerik.removeClass('hidden');
    $('.modal-body').html(formIcerik);
    $('.modal-title').html($(event.target).html());
    $('#popup-menu').modal();
  };
  /*Sepet buton scriptleri*/
  $('.hediye-notu-button').click(function (event) {
    popupAc(event, $('.hediye-notu-form'));
  });

  $('#adres-ekle').click(function (event) {
    popupAc(event, $('.adres-ekle-form'));
  });



  $('.kargo-radio input[name=fatura_tipi]').click(function (event) {
    if ($(event.target).val() == "kurumsal") {
      $('.kurumsal-inputlar').show(0);
    }
    else {
      $('.kurumsal-inputlar').hide(0);
    }
  });

  if ($('#popup-menu').attr('data-load') == 'true') {
    $('#popup-menu').modal();
  }


  if ($('.xzoom').is(':visible')) {
    $('.xzoom').xzoom({
      position: 'right',
      defaultScale: 1,
      scroll: true,
      Xoffset: 15,
      tint: '#333'
    });
  }
  $('#mainImage').bind('click', function (event) {
    var xzoom = $(event.target).data('xzoom');
    xzoom.closezoom();
    gallery = xzoom.gallery().cgallery;
    var i, images = new Array();
    for (i in gallery) {
      images[i] = { src: gallery[i] };
    }
    $.fancybox.open(images, { padding: 0, helpers: { overlay: { locked: false } } });
    event.preventDefault();
  });

  $('.adet-input').find('#eksi').click(function (event) {
    val = parseInt($(event.target).next('#adet').val()) - 1;
    if (val > 0) {
      $(event.target).next('#adet').val(val);
    }

  });
  $('.adet-input').find('#arti').click(function (event) {
    val = parseInt($(event.target).prev('#adet').val()) + 1;
    $(event.target).prev('#adet').val(val);
  });

  $('#sideMenuToggle').click(function (event) {
    $('.sideNav').width("100%");
    $('.sideNav').css('opacity', 1);
    $('#sideMenuToggle').hide(0);
  });

  $('.sideNav .sideNav__close').click(function (event) {
    $('.sideNav').width(0);
    $('.sideNav').css('opacity', 0);
    $('#sideMenuToggle').show(0);
  });

  //Carousel ayarları
  $('.urun-slider__urunler').slick({
    slidesToShow: 4,
    autoplay: true,
    prevArrow: $(this).find('.slider-left-arrow'),
    nextArrow: $(this).find('.slider-right-arrow'),
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }

    ]
  });


  //console.log('isMobile: ' + isMobile());

  if (isMobile()) {
    //
    $(".urun-list__yan-kategori>div").eq(0).accordion({
      header: ".yan-kategori__baslik",
      active: false,
      collapsible: true,
      heightStyle: "content"
    });

    //Mobilde açılıp kapanan footer
    $(".footer-content>div").eq(1).accordion({
      header: "span#footer-kategori-baslik",
      active: false,
      collapsible: true,
      heightStyle: "content"
    });

    /*
    $('.header__mainmenu>.menu>li>a').click(function(event) {
      var menu_id = $(event.target).attr('data-target');
      $('.dropdown__container__menu:not('+menu_id+')').hide(0);
      $(menu_id).toggle(0);
    });
    */
    $('body').swipe({
      swipeLeft: function () {
        $('.sideNav').width(0);
        $('.sideNav').css('opacity', 0);
        $('#sideMenuToggle').show(0);
      },
      treshold: 150
    });

    $('.content__urun-tablo img').addClass('img-responsive');

  }

  else {
    //Dropdown Kodu
    $('.header__mainmenu>.menu>li>a').hover(function (event) {
      /* Hover eventi */
      $('.dropdown__container__menu').hide(0);
      var menu_id = $(event.target).attr('data-target');
      $(menu_id).show(0);
      if (menu_id) { $(this).addClass('hover'); }
    }, function (event) {
      /* Hover sonu eventi */
      var menu_id = $(event.target).attr('data-target');
      $(menu_id).hover(function () {
        $(menu_id).show(0);
        if (menu_id) { $(this).addClass('hover'); }
      }, function () {
        $(menu_id).hide(0);
        if (menu_id) { $(this).removeClass('hover'); }
      });
      $('.dropdown__container__menu').delay(150).hide(0);
      if (menu_id) { $(this).removeClass('hover'); }
    });

    $('.header__cart').hover(function (event) {
        $('.cart-hover-detay').fadeIn(50);
        $('.sepet__ikon-container').addClass('hover');
      },
      function (event) {
        $('.cart-hover-detay').hover(function (evt) {
            $(evt.target).show(0);
          },
          function (evt) {
            $(evt.target).fadeOut(100);
            $('.sepet__ikon-container').removeClass('hover');
          });
        $('.cart-hover-detay').delay(100).fadeOut(0);
        $('.sepet__ikon-container').delay(100).removeClass('hover');
      });
  }

  //Arama gösterme scripti
  $('#aramaGoster').click(function (event) {
    if (isMobile()) {
      $('.header__mainmenu.scrolling, header .btn-group, .header-cagri').fadeOut(0);
      $('.header__logo').hide(0);
      $('.header__logins').hide(0);
      $(this).parent().removeClass('col-xs-1').addClass('col-xs-11');
    }
    $('.arama-bolumu').fadeIn(300).css('display', 'inline-block').addClass('active');
  });
  $('#aramaGizle').click(function (event) {
    if (isMobile()) {
      $('.header__mainmenu.scrolling, header .btn-group, .header-cagri').fadeIn(300);
      $('.header__logo').show(0);
      $('.header__logins').show(0);
      $(".arama-container").removeClass('col-xs-11').addClass('col-xs-1');
    }
    $('.arama-bolumu').removeClass('active').css('display', 'none').fadeOut(300);
  });

  $('.urun-liste-resim').has('.urun-liste-resim_2').mouseenter(function () {
    $(this).find('.urun-liste-resim_2').removeClass('hidden');
    $(this).find('.urun-liste-resim_1').addClass('hidden');
  });
  $('.urun-liste-resim').has('.urun-liste-resim_2').mouseleave(function (event) {
    $(this).find('.urun-liste-resim_1').removeClass('hidden');
    $(this).find('.urun-liste-resim_2').addClass('hidden');
  });
});
