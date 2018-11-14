$(function () {

  $(document).ready(function () {

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    $(".product-photo-area").css("height", $(".product-photo-area").find("figure").height());

    $(".main-bg").css("min-height", $(".carousel").height());
    //$("#myCarousel").css("height",$(window).height());
    if ($(".main-area").length) {
      if (!isMobile) {
        $(".index-popup").fadeIn(500);
      }
    }

    var imagesWidth = 0;
    $(".product-photo-area").find(".image-slide").each(function () {
      //$(this).css("margin-right","-610px");
    });

    //$(".product-photo-area").find( ".image-slide" ).eq(0).fadeIn(300);
    //$(".product-photo-area").find( ".image-slide" ).eq(1).fadeIn(300);
    //$(".product-photo-area").find( ".image-slide" ).eq(2).fadeIn(300);
    $(".product-photo-area").find(".image-slide").eq(2).css("margin-right", "-610px");
    $(".product-photo-area").find(".image-slide").eq(3).css("margin-right", "-610px");
    $(".product-photo-area").find(".image-slide").eq(4).css("margin-right", "-2220px");




  });

  $(window).resize(function () {
    $(".product-photo-area").css("height", $(".product-photo-area").find("figure").height());
    $(".main-bg").css("min-height", $(".carousel").height());
  });

  ////////Search Box/////

  $(".nav-shop li, .nav-main li, .dropdown-items li").click(function () {
    if ($(this).next().hasClass("dropdown-li")) {
      $(this).next().slideToggle(300);
    }
  });

  $(".search-button").click(function () {
    $(".search-popup").fadeIn(500);
    $("#search").focus();
  });

  $(".close-search").click(function () {
    $(".search-popup").fadeOut(500);
  });

  $(".menu-mobile-btn").click(function (e) {
    e.preventDefault();
    $(".mobile-menu").fadeIn(500);
  });


  $(".m-press-overlay").click(function () {
    $(".press-popup").fadeIn(500);
  });

  $(".account-menu-mobile-btn").click(function () {
    $(".account-menu-mobile-area").slideToggle(500);
  });



  $(".taksit-text").click(function () {
    $(".taksit-popup").fadeIn(500);
  });

  $(".beden-olculeri").click(function () {
    $(".beden-popup").fadeIn(500);
  });

  $(".close-popup").click(function () {
    $(this).parent().parent().fadeOut(500);
  });

  $(".add-note").click(function () {
    $(this).next(".order-note-area").fadeToggle(10);
  });

  $("#getFromShop").change(function () {
    $(".cart-select-shop-area").fadeToggle(10);
  });

  $(".new-address-button, .address-edit-button").click(function () {
    $(".new-address-area").fadeToggle(10);
  });

  $(".close-area").click(function () {
    $(".new-address-area").fadeOut(10);
  });

  var slidecount = 0;
  var totalImages = $(".product-photo-area").find(".image-slide").length - 1;
  $(".slide-left").click(function () {
    if (slidecount === totalImages) {
      return;
    }

    $(".image-slide").eq(slidecount).css("margin-left", "-610px");
    $(".image-slide").eq(slidecount).next().next().css("margin-right", "0");
    slidecount++;
  });

  $(".slide-right").click(function () {
    if (slidecount === 0) {
      return;
    }
    slidecount--;
    $(".image-slide").eq(slidecount).css("margin-left", "0");
    $(".image-slide").eq(slidecount).next().next().css("margin-right", "-610px");
  });


  $(".m-shop-overlay").click(function () {
    var isHovered = !!$('.quick-view-button').
      filter(function () { return $(this).is(":hover"); }).length;

    if (isHovered === false) {
      window.location.href = $(this).data("url");
    }
  });




  $(".cart-addres-shipping-dropdown").click(function () {
    $(this).next(".address-single-dropdown").fadeToggle(10);
  });


  $(".payment-tab").click(function () {
    $(".payment-tab").removeClass("payment-active");
    $(this).addClass("payment-active");
    if ($(this).data("payment") === "payment_0") {
      $(".card-info-area").css("display", "block");
      $(".havale-info-area").css("display", "none");
      $(".havale-title").css("display", "none");
      $(".card-title").css("display", "block");
    }
    if ($(this).data("payment") === "payment_1") {
      $(".card-info-area").css("display", "none");
      $(".havale-info-area").css("display", "block");
      $(".havale-title").css("display", "block");
      $(".card-title").css("display", "none");
      $(".card-info-taksit-area").css("display", "none");
    }
  });


  ///////////////////////////////




  //$(window).on('scroll', function () {
  //  //alert($(".main-area").position().top);
  //  if ($(".main-area").length && $(window).scrollTop() > $(".main-area").position().top - 175) {
  //    $(".nav-top").css("background", "white")
  //    $(".nav-top .nav-top-item a, .nav-top .nav-top-item,.nav-top .nav-top-item-2 a, .nav-top .nav-top-item-2").css("color", "black")
  //    $(".nav-top .nav-top-item").addClass("border-bottom");
  //    $(".nav-mid").css("opacity", "1");
  //  } else if ($(".main-area").length && $(window).scrollTop() < $(".main-area").position().top - 175) {
  //    $(".nav-top").css("background", "transparent");
  //    $(".nav-top .nav-top-item a, .nav-top .nav-top-item,.nav-top .nav-top-item-2 a, .nav-top .nav-top-item-2").css("color", " #3D3B3B")
  //    $(".nav-top .nav-mid").css("opacity", "0");
  //    $(".nav-top .nav-top-item").removeClass("border-bottom");
  //  }
  //});



  $('.m-overlay').hover(function () {
    $(this).parent().find('.m-overlay').css('opacity', '1');
    $(this).parent().find('img').css("transform", "scale(1.1)");
  }, function () {
    // on mouseout, reset the background colour
    $(this).parent().find('.m-overlay').css('opacity', '0');
    $(this).parent().find('img').css("transform", "scale(1.0)");
  });

  $('#cardNumber2').bind('keyup', function (e) {

    if ($(this).val().length > 2) {
      $(".card-info-taksit-area").css("display", "block");
    }

  });


});

