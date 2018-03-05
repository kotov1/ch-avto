$(function() {


	$(".mfp-image").click(function(){
		if ($('.images-modal').hasClass('for-images-modal')){

			$('.images-modal').empty().removeClass('for-images-modal');

		}else{
			if($(window).width() > 500 ) {
			$( document.body ).append('<div class="modal-overlay"></div>');
			var mfpImg = $(this).children('img').data('mfp');
			$('.images-modal').append('<img src ='+mfpImg+'>');
			$('.images-modal').append('<div id="modal-close"></div>');
			$('.images-modal img').css({"width":"300px","margin":"0","height":"260px","display":"block"});

			$('.images-modal').addClass('for-images-modal');

			$('#modal-close').click(function(){
				$('.images-modal').empty().removeClass('for-images-modal');
				$('.modal-overlay').remove();
			});
			}
		}
	});


	$(document).mouseup(function (e){
		var div = $(".images-modal");
		if ( (!div.is(e.target) && div.has(e.target).length === 0) && div.hasClass('for-images-modal') ) {

			$('.images-modal').empty().removeClass('for-images-modal');
			$('.modal-overlay').remove();

		}
	});



	if(($('.tel').length > 0)){
		$('.tel').inputmask("+7 (999) 999-99-99");
	}
	if(($('.modal-date').length > 0)){
		$('.modal-date').inputmask("99.99.99");
	}
	if(($('.modal-time').length > 0)){
		$('.modal-time').inputmask("99:99");
	}




	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {	
			$('.scroll-btn-wrapper').fadeIn();
		} else {
			$('.scroll-btn-wrapper').fadeOut();
		}
	});

	$('.btn-top').click(function () {
		$('body,html').animate({scrollTop: 0}, 500);
		return false;
	});	


	$('body').copyright();



	$(".send-form").submit(function(e) {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$.magnificPopup.open({
				items: {
		   		src: '.success-modal-wrap',
		    		type: 'inline',
		   		mainClass: 'mfp-fade'
				} 
			});
			setTimeout(function() {
				th.trigger("reset");
				$.magnificPopup.close();
			}, 2000);
		});
		return false;
	});	


	$('.call-mfp-feedback').magnificPopup({
		items: {
			src: '.feedback-modal-wrap',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.call-mfp-callback').magnificPopup({
		items: {
			src: '.callback-modal-wrap',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	

	$('.call-mfp-1').magnificPopup({
		items: {
			src: '#modal-form-1',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.call-mfp-2').magnificPopup({
		items: {
			src: '#modal-form-2',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.call-mfp-3').magnificPopup({
		items: {
			src: '#modal-form-3',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.call-mfp-4').magnificPopup({
		items: {
			src: '#modal-form-4',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.call-mfp-5').magnificPopup({
		items: {
			src: '#modal-form-5',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.call-mfp-6').magnificPopup({
		items: {
			src: '#modal-form-6',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.call-mfp-7').magnificPopup({
		items: {
			src: '#modal-form-7',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.call-mfp-8').magnificPopup({
		items: {
			src: '#modal-form-8',
			closeBtnInside: true,
			type: 'inline'
		}
	});


	$('.js-modal-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			lazyLoad: 'ondemand',
			autoplay: true,
			nextArrow: '<div class="slick-arrow slider-modal-next"></div>',
			prevArrow: '<div class="slick-arrow slider-modal-prev"></div>'
		});



	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		vertical: true,
		verticalSwiping: true,
		arrows: false,
		focusOnSelect: true,
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



	$(".menu-link").click(function (event) {
		var id  = $(this).attr('href');
		if ($(id).length) {
			var top = $(id).offset().top -100;
			event.preventDefault();
			$('body,html').animate({scrollTop: top}, 1500);
			$('.navicon').toggleClass('navicon--active');
			$('.toggle').toggleClass('toggle--active');
		}
	});









});
