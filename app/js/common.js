$(function() {


	$('.call-modal').magnificPopup({
		items: {
			src: '#modal',
			closeBtnInside: true,
			type: 'inline'
		}
	});

	$('.call-modal-tel').magnificPopup({
		items: {
			src: '#modal-tel',
			closeBtnInside: true,
			type: 'inline'
		}
	});


	$('.mfp-image').magnificPopup({
		delegate: 'img',
		type: 'image',
		image: {
			cursor: 'mfp-zoom-out-cur',
			verticalFit: true,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		}
	});


	$(".text-img").click(function(){
		if ($('.images-modal').hasClass('for-images-modal')){

			$('.images-modal').empty().removeClass('for-images-modal');

		}else{

			var mfpImg = $(this).data('mfp');
			$('.images-modal').append('<img src ='+mfpImg+'>');
			$('.images-modal').append('<div id="modal-close"></div>');
			$('.images-modal img').css({"width":"300px","margin":"0","height":"260px","display":"block"});

			$('.images-modal').addClass('for-images-modal');

			$('#modal-close').click(function(){
				$('.images-modal').empty().removeClass('for-images-modal');
				$.magnificPopup.close();
			});
			
		}
	});


	$(document).mouseup(function (e){
		var div = $(".images-modal");
		if ( (!div.is(e.target) && div.has(e.target).length === 0) && div.hasClass('for-images-modal') ) {

			$('.images-modal').empty().removeClass('for-images-modal');
			$.magnificPopup.close();

		}
	});




	// $('#js-block-1-slider').slick({
	// 	slidesToShow: 1,
	// 	infinite: true,
	// 	autoplay: true,
	// 	arrows: false
	// });
	// $('.slick-1-next').on('click', function() {
	// 	$('#js-block-1-slider').slick('slickNext');
	// });
	// $('.slick-1-prev').on('click', function() {
	// 	$('#js-block-1-slider').slick('slickPrev');
	// });

	// $('#js-block-7-slider').slick({
	// 	lazyLoad: 'ondemand',
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	infinite: true,
	// 	// autoplay: true,
	// 	arrows: false,
	// 	responsive: [
	// 		{
	// 		breakpoint: 991,
	// 		settings: {
	// 			slidesToShow: 2
	// 			}
	// 		},
	// 		{
	// 		breakpoint: 767,
	// 		settings: {
	// 			slidesToShow: 1
	// 			}
	// 		}
	// 	]
	// });
	// $('.slick-7-next').on('click', function() {
	// 	$('#js-block-7-slider').slick('slickNext');
	// });
	// $('.slick-7-prev').on('click', function() {
	// 	$('#js-block-7-slider').slick('slickPrev');
	// });



	if(($('.tel').length > 0)){
		$('.tel').inputmask("+7 (999) 999-99-99");
	}

	// $(".block-9-address-close").on("click",function(){
	// 	$(this).children(".block-9-address-close-btn-wrap").prepend('<span class="block-9-address-close-btn">Закрыть</span>');
	// 	$(this).removeClass("block-9-address-close");
	// 	$("img.lazy").show().lazyload();
	// });

	// $("body").on("click", ".block-9-address-close-btn", function(){
	// 	$(this).parents(".block-9-address").addClass("block-9-address-close");
	// 	$(this).parent(".block-9-address-close-btn-wrap").html("");

	// });




	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {	
			$('.scroll-button-wrap').fadeIn();
		} else {
			$('.scroll-button-wrap').fadeOut();
		}
	});

	$('.scroll-button').click(function () {
		$('body,html').animate({scrollTop: 0}, 500);
		return false;
	});	


	$('body').copyright();


	$(".form").submit(function(e) {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(".form-button").text("Отправлено");
			$(".form-button").attr("disabled","");
			setTimeout(function() {
				th.trigger("reset");
				$(".form-button").text("Заказать звонок");
				$(".form-button").removeAttr("disabled");
			}, 3000);
		});
		return false;
	});	

	$(".modal-form").submit(function(e) {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(".modal-form-button").text("Отправлено");
			$(".modal-form-button").attr("disabled","");
			setTimeout(function() {
				th.trigger("reset");
				$.magnificPopup.close();
				$(".modal-form-button").text("Заказать звонок");
				$(".modal-form-button").removeAttr("disabled");
			}, 3000);
		});
		return false;
	});	
	// ================================================


	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		vertical: true,
		verticalSwiping: true,
		arrows: false,
		responsive: [
			{
			breakpoint: 991,
			settings: {
				vertical: false,
				centerPadding: '15px',
				adaptiveHeight: true
				}
			},
			{
			breakpoint: 767,
			settings: {
				vertical: false,
				slidesToShow: 2
     				}
			}
		]
	});
	$('.slider-nav-next').on('click', function() {
		$('.slider-nav').slick('slickNext');
	});
	$('.slider-nav-prev').on('click', function() {
		$('.slider-nav').slick('slickPrev');
	});

	$('.slider-otzuvu').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	});
		$('.slider-otzuvu-next').on('click', function() {
		$('.slider-otzuvu').slick('slickNext');
	});
	$('.slider-otzuvu-prev').on('click', function() {
		$('.slider-otzuvu').slick('slickPrev');
	});


	$('.navicon').on('click', function () {
		$(this).toggleClass('navicon--active');
		$('.toggle').toggleClass('toggle--active');
	});


	// $(".header-nav-link").click(function (event) {
	// 	var id  = $(this).attr('href');
	// 	if ($(id).length) {
	// 		var top = $(id).offset().top -100;
	// 		event.preventDefault();
	// 		$('body,html').animate({scrollTop: top}, 1500);
	// 	}
	// 	});

	// $(".top-menu").on("click","a", function (event) {
	// 	event.preventDefault();
	// 	var id  = $(this).attr('href'),
	// 		top = $(id).offset().top;
	// 	$('body,html').animate({scrollTop: top}, 1500);
	// });





	

});
