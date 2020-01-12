$(document).ready(function() { 

  // $('.main-burger-btn').click(function(){
  //   $('.modal-categories').toggleClass('hide');
  // }); 
   $('.btn-catalog-items').click(function(){
    $('.modal-categories').toggleClass('hide');
    $('.downArrow').toggleClass('hide');
    $('.upArrow').toggleClass('hide');
  }); 
        $('.first-level').click(function(){
      if($(window).width() <= '1128'){
        $('.first-level-categories').toggleClass('hide');
        $('.second-level-categories').removeClass('hide');
        $('.second-level-categories').removeClass('show');
        $('.third-level-categories').removeClass('hide');
        $('.third-level-categories').removeClass('show');
        $('.categories-3').removeClass('hide');
        $('.categories-3').removeClass('show');
        $('.categories-4').removeClass('hide');
        $('.categories-4').removeClass('show');
        $(this).parent().toggleClass('show');
        $(this).parent().children().toggleClass('show');
      }
      });
       $('.second-level').click(function(){
        if($(window).width() <= '1128'){
        $('.second-level-categories').toggleClass('hide');
        $('.third-level-categories').removeClass('hide');
        $('.third-level-categories').removeClass('show');
        $('.categories-4').removeClass('hide');
        $('.categories-4').removeClass('show');
         $(this).parent().toggleClass('show');
        $(this).parent().children().toggleClass('show');
      }
      });
        $('.third-level').click(function(){
          if($(window).width() <= '1128'){
        $('.third-level-categories').toggleClass('hide');
         $(this).parent().toggleClass('show');
        $(this).parent().children().toggleClass('show');
      }
      });
      if ($(window).width() > '1128') {
        $('.first-level-categories').hover(function(){
          $(this).children('ul').toggleClass('show');
        });
        $('.second-level-categories').hover(function(){
          $(this).children('ul').toggleClass('show');
        });
        $('.third-level-categories').hover(function(){
          $(this).children('ul').toggleClass('show');
        });
      }

$(".icons-grid a").parent().click(function(){
    return false;
});
$(".list-btn a").click(function(){
    $('.result-item').addClass('result-item-list');
    $('.wrapper-item-text-grid').addClass('wrapper-item-text-grid-list');
    $('.wrapper').addClass('wrapper-propherty-list');
    $('.add-comparison-grid').addClass('add-comparison-list');
    $('.list-btn img').css('opacity', '1');
    $('.grid-btn img').css('opacity', '0.5');
});
$(".grid-btn a").click(function(){
    $('.result-item').removeClass('result-item-list');
    $('.wrapper-item-text-grid').removeClass('wrapper-item-text-grid-list');
    $('.wrapper').removeClass('wrapper-propherty-list');
    $('.add-comparison-grid').removeClass('add-comparison-list');
    $('.grid-btn img').css('opacity', '1');
    $('.list-btn img').css('opacity', '0.5');
});

  $(".hide-car-model-btn").click(hideLeftBlocks('car-model'));
  $(".show-car-model-btn").click(showLeftBlocks('car-model'));
  $(".hide-car-brand-btn").click(hideLeftBlocks('car-brand'));
  $(".show-car-brand-btn").click(showLeftBlocks('car-brand'));
  $(".hide-construction-btn").click(hideLeftBlocks('construction'));
  $(".show-construction-btn").click(showLeftBlocks('construction'));
  $(".show-color-btn").click(showLeftBlocks('color'));
  $(".show-color-btn").click(hideLeftBlocks('color'));
  $(".show-price-btn").click(showLeftBlocks('price'));
  $(".show-price-btn").click(hideLeftBlocks('price'));
  $(".show-state-btn").click(showLeftBlocks('state'));
  $(".show-state-btn").click(hideLeftBlocks('state'));
  $(".show-location-btn").click(showLeftBlocks('location'));
  $(".show-location-btn").click(hideLeftBlocks('location'));
  $(".show-additionally-btn").click(showLeftBlocks('additionally'));
  $(".show-additionally-btn").click(hideLeftBlocks('additionally'));
  

  var blocksValue = ['car-model', 'car-brand', 'construction', 'color', 'price', 'state', 'location', 'additionally'];

  function hideLeftBlocks(string){
    $(".hide-" + string + "-btn").click(function(){
      $('.hide-show-' + string).toggle('fast');
      $('.hide-' + string + '-btn').addClass('hide');
      $('.show-'+ string +'-btn').removeClass('hide');
  });
  }
    function showLeftBlocks(string){
    $(".show-"+ string +"-btn").click(function(){
      $('.hide-show-' + string).toggle('fast');
      $('.show-'+ string +'-btn').addClass('hide');
      $('.hide-'+ string +'-btn').removeClass('hide');
  });
  }

  $('.btn-catalog-items-vertical').click(function(){
    $('.side-catalog-menu').toggleClass('hide');
    $('.btn-catalog-items-vertical-arrow').toggleClass('active');
  }); 

  $('.btn-catalog-items-vertical-arrow').click(function(){
    $('.side-catalog-menu').toggleClass('hide');
    $('.btn-catalog-items-vertical-arrow').toggleClass('active');
  }); 

  $('.first-level-categories-vertical').click(function(){
    $(this).find('~ .category-2-vertical').toggleClass('active');
    $(this).find('~ .btn-catalog-items-vertical-arrow2').toggleClass('active');
  });
  $('.btn-catalog-items-vertical-arrow2').click(function(){
    $(this).toggleClass('active');
    $(this).find('~ .category-2-vertical').toggleClass('active');
   
  });
  
  $('.second-level-categories-vertical').click(function(){
    $(this).find('~ .category-3-vertical').toggleClass('active');
    $(this).find('~ .btn-catalog-items-vertical-arrow3').toggleClass('active');
  });
  $('.btn-catalog-items-vertical-arrow3').click(function(){
    $(this).find('~ .category-3-vertical').toggleClass('active');
    $(this).toggleClass('active');
  });

  $('.third-level-categories-vertical').click(function(){
    $(this).find('~ .category-4-vertical').toggleClass('active');
    $(this).find('~ .btn-catalog-items-vertical-arrow4').toggleClass('active');
  });
  $('.btn-catalog-items-vertical-arrow4').click(function(){
    $(this).find('~ .category-4-vertical').toggleClass('active');
    $(this).toggleClass('active');
  });

  // $(".list-btn-catalog").click(function(){
  //   $('.product-item').addClass('product-item-list');
  //   $('.product-img').addClass('product-img-list');
  //   $('.product-img img').addClass('product-img-list img');
  //   $('.product-line').addClass('product-line-list');
  //   $('.product-price').addClass('product-price-list');
  //   $('.product-list').addClass('product-list-text');
  //   $('.product-name-block').addClass('product-name-block-list');
  //   $('.product-opportunities').addClass('product-opportunities-list');
    
  // });
  // $(".grid-btn-catalog").click(function(){
  //   $('.product-item').removeClass('product-item-list');
  //   $('.product-img').removeClass('product-img-list');
  //   $('.product-img img').removeClass('product-img-list img');
  //   $('.product-line').removeClass('product-line-list');
  //   $('.product-price').removeClass('product-price-list');
  //   $('.product-list').removeClass('product-list-text');
  //   $('.product-name-block').removeClass('product-name-block-list');
  //   $('.product-opportunities').removeClass('product-opportunities-list');
  // });

  $(".grid-btn-catalog-auto").click(function(){
    $('.product-item-list-auto').addClass('product-item-auto');
    $('.product-img-auto-list').addClass('product-img-auto');
    $('.product-img-auto-list img').addClass('product-img-auto-list img');
    $('.product-list-auto-text').addClass('product-list-auto');
    $('.product-name-block-auto-list').addClass('product-name-block-auto');
    $('.product-line-auto-list').addClass('product-line-auto');
    $('.product-opportunities-auto-list').addClass('product-opportunities-auto');
    $('.product-price-auto-list').addClass('product-price-auto');
    
    
  });
  $(".list-btn-catalog-auto").click(function(){
    $('.product-item-list-auto').removeClass('product-item-auto');
    $('.product-img-auto-list').removeClass('product-img-auto');
    $('.product-img-auto-list img').removeClass('product-img-auto-list img');
    $('.product-list-auto-text').removeClass('product-list-auto');
    $('.product-name-block-auto-list').removeClass('product-name-block-auto');
    $('.product-line-auto-list').removeClass('product-line-auto');
    $('.product-opportunities-auto-list').removeClass('product-opportunities-auto');
    $('.product-price-auto-list').removeClass('product-price-auto');
   
    
  });
 

});
$(".grid-btn-catalog-seller").click(function(){
  $('.product-item-list-seller').addClass('product-item-seller');
  $('.product-img-seller-list').addClass('product-img-seller');
  $('.product-img-seller-list img').addClass('product-img-seller-list img');
  $('.product-list-seller-text').addClass('product-list-seller');
  $('.product-name-block-seller-list').addClass('product-name-block-seller');
  $('.product-line-seller-list').addClass('product-line-seller');
  $('.product-opportunities-seller-list').addClass('product-opportunities-seller');
  $('.product-price-seller-list').addClass('product-price-seller');
});
$(".list-btn-catalog-seller").click(function(){
  $('.product-item-list-seller').removeClass('product-item-seller');
  $('.product-img-seller-list').removeClass('product-img-seller');
  $('.product-img-seller-list img').removeClass('product-img-seller-list img');
  $('.product-list-seller-text').removeClass('product-list-seller');
  $('.product-name-block-seller-list').removeClass('product-name-block-seller');
  $('.product-line-seller-list').removeClass('product-line-seller');
  $('.product-opportunities-seller-list').removeClass('product-opportunities-seller');
  $('.product-price-seller-list').removeClass('product-price-seller');
});


$(document).ready(function(){
  var list = $(document).find('.nav_catalog');
  $.each(list, function(value){
    if($(this).children('.goods-list').length) {
      var arrow = $('<div>').attr({
        class: 'arrow'
      });
      $(this).append(arrow);
    }
  }) 
});



    // $('.first-level-categories').mouseenter(function() {
    //   $(this).append('<div class="categories-2 show"><div class="second-level-categories"><a href="#" class="second-level">Подкатегория 1</a></div></div>');
    //   }).mouseleave(function() {
    //       $('div.categories-2').remove();
    //   });
    //   $('div.categories-2').mouseleave(function() {
    //       $(this).remove();
    //   });

$(".tab_item").not(":first").hide();
$(".wrapper_tabs .tab").click(function() {
	$(".wrapper_tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(document).ready(function(){
  $('.top-slider-right').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      responsive: [
          {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
          },
          {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
      ]
  });
});
$(document).ready(function(){
  $('.bot-slider-right').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 3000,
      responsive: [
          {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
          },
          {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
      ]
  });
});
$(document).ready(function(){
  $('.horizontal_menu').slick({
      dots: false,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
        breakpoint: 1702,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 1428,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 1156,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        },
        },
        {
        breakpoint: 668,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }
        
    ]
  });
});


$(document).ready(function($) {
  $('.popup-open').click(function() {
      $('.popup-fade').fadeIn();
      return false;
  });	
  
  $('.popup-close').click(function() {
      $(this).parents('.popup-fade').fadeOut();
      return false;
  });		

  $(document).keydown(function(e) {
      if (e.keyCode === 27) {
          e.stopPropagation();
          $('.popup-fade').fadeOut();
      }
  });
  
  $('.popup-fade').click(function(e) {
      if ($(e.target).closest('.popup').length == 0) {
          $(this).fadeOut();					
      }
  });
});

$(document).ready(function(){
  $('.catalog-top-slider').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
  });
});


$(document).ready(function(){  
 $('.country_block_select').change(function(){
   var data= $(this).val();
    if (data != "") {
      $('.main-country-select-active').addClass('hide');
      $(".main-country-select-noactive").css({"display":"block"})
    } else {
      $('.main-country-select-active').removeClass('hide');
      $(".main-country-select-noactive").css({"display":"none"})
    }       
 });
});

$(document).ready(function(){  
  $('.product-category-auto-show-number').click(function(){
    $(this).find("~ .product-category-auto-number").css({"display":"block","padding":"0px 10px"})
    $(this).css({"display":"none"})
  });
});
$(document).ready(function(){  
  $('.product-category-seller-show-number').click(function(){
    $(this).find("~ .product-category-seller-number").css({"display":"block","padding":"0px 10px"})
    $(this).css({"display":"none"})
  });
});

$('.currency_auto_block_wrapper').eq(0).on("change", function(e){ 
  $('input[name^=field]').each(function()
  { 
    if(e.target != this)
      this.checked = false; 
  });
})

$('.type_auto_block_wrapper').eq(0).on('submit', function() {
   return $('input[name^=field]:checked:enabled').length == 1;
});
$('.type_auto_block_wrapper').eq(0).on("change", function(e){ 
  $('input[name^=field]').each(function()
  { 
    if(e.target != this)
      this.checked = false; 
  });
})
$('.type_auto_block_wrapper').eq(0).on('submit', function() {
   return $('input[name^=field]:checked:enabled').length == 1;
});

$(document).ready(function(){  
  $('.mobile-btn-for-auto-catalog-menu').click(function(){
    $(".catalog-right-auto-section").toggle('fast')
  });
});

$(document).ready(function(){  
  $('.mobile-btn-for-catalog-menu').click(function(){
    $(".catalog-left-section-wrapper").toggle('fast')
  });
});

$(document).ready(function(){  
  $('.b-detail-main-aside-about-call-show-number').click(function(){
    $(this).find("~ .b-detail-main-aside-about-call-number").css({"display":"block","padding":"0px 10px"})
    $(this).css({"display":"none"})
  });
});

$(document).ready(function(){  
  $('.product-category-show-number').click(function(){
    $(this).find("~ .product-category-hide-number").css({"display":"block"})
    $(this).css({"display":"none"})
  });
});

$(document).ready(function(){  
  $('.product-category-show-number').click(function(){
    $(this).find("~ .product-category-number").css({"display":"block"})
    $(this).css({"display":"none"})
  });
});
$(document).ready(function(){  
  $('.product-category-show-number-main').click(function(){
    $(this).find("~ .product-category-hide-number-main").css({"display":"block"})
    $(this).css({"display":"none"})
  });
});



$(function () {
  $('.product-main-item-top-how-much-plus').on('click',function(){
      var $qty=$(this).closest('p').find('.product-main-item-top-how-much-count');
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal) && currentVal < 100) {console.log(currentVal);
          $qty.val(currentVal + 1);
      }
  });
  $('.product-main-item-top-how-much-minus').on('click',function(){
      var $qty=$(this).closest('p').find('.product-main-item-top-how-much-count');
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal) && currentVal > 1) {console.log(currentVal);
          $qty.val(currentVal - 1);
      }
  });
});

$(document).ready(function(){  
  $('.product-main-item-top-center-side-show-number').click(function(){
    $(this).find("~ .product-main-item-top-center-side-number").css({"display":"block","padding":"0px 10px"})
    $(this).css({"display":"none"})
  });
});

$(document).ready(function($) {
  $('.popup-open-pa').click(function() {
      $('.popup-fade-pa').fadeIn();
      return false;
  });	
  
  $('.popup-close-pa').click(function() {
      $(this).parents('.popup-fade-pa').fadeOut();
      return false;
  });		

  $(document).keydown(function(e) {
      if (e.keyCode === 27) {
          e.stopPropagation();
          $('.popup-fade-pa').fadeOut();
      }
  });
  
  $('.popup-fade-pa').click(function(e) {
      if ($(e.target).closest('.popup-pa').length == 0) {
          $(this).fadeOut();					
      }
  });
});

$(document).ready(function(){
	var dropZone = $('#upload-container');

	$('#file-input').focus(function() {
		$('label').addClass('focus');
	})
	.focusout(function() {
		$('label').removeClass('focus');
	});


	dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
		return false;
	});

	dropZone.on('dragover dragenter', function() {
		dropZone.addClass('dragover');
	});

	dropZone.on('dragleave', function(e) {
		let dx = e.pageX - dropZone.offset().left;
		let dy = e.pageY - dropZone.offset().top;
		if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
			dropZone.removeClass('dragover');
		}
	});

	dropZone.on('drop', function(e) {
		dropZone.removeClass('dragover');
		let files = e.originalEvent.dataTransfer.files;
		sendFiles(files);
	});

	$('#file-input').change(function() {
		let files = this.files;
		sendFiles(files);
	});


	function sendFiles(files) {
		let maxFileSize = 5242880;
		let Data = new FormData();
		$(files).each(function(index, file) {
			if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
				Data.append('images[]', file);
			};
		});

		$.ajax({
			url: dropZone.attr('action'),
			type: dropZone.attr('method'),
			data: Data,
			contentType: false,
			processData: false,
			success: function(data) {
				alert ('Файлы были успешно загружены!');
			}
		});
	}
})

// $(".form-price-block-btn").click(function(){
//   $(".form-price-block-btn").removeClass("active");
//   $(this).addClass("active");
// });

// $(".pa-settings-tab").click(function(){
//   $(".pa-settings-tab").removeClass("active-tab");
//   $(this).addClass("active-tab");
// });

// $("#settings-tab-1").click(function(){
//   $(".pa-settings-tabs-item-1").removeClass("active");
//   $(".pa-settings-tabs-item-2").addClass("active");
// });

// $("#settings-tab-2").click(function(){
//   $(".pa-settings-tabs-item-2").removeClass("active");
//   $(".pa-settings-tabs-item-1").addClass("active");
// });

$(".grid-btn-catalog-favorite").click(function(){
  $('.product-item-list-favorite').addClass('product-item-favorite');
  $('.product-img-favorite-list').addClass('product-img-favorite');
  $('.product-img-favorite-list img').addClass('product-img-favorite-list img');
  $('.product-list-favorite-text').addClass('product-list-favorite');
  $('.product-name-block-favorite-list').addClass('product-name-block-favorite');
  $('.product-line-favorite-list').addClass('product-line-favorite');
  $('.product-opportunities-favorite-list').addClass('product-opportunities-favorite');
  $('.product-price-favorite-list').addClass('product-price-favorite');
});
$(".list-btn-catalog-favorite").click(function(){
  $('.product-item-list-favorite').removeClass('product-item-favorite');
  $('.product-img-favorite-list').removeClass('product-img-favorite');
  $('.product-img-favorite-list img').removeClass('product-img-favorite-list img');
  $('.product-list-favorite-text').removeClass('product-list-favorite');
  $('.product-name-block-favorite-list').removeClass('product-name-block-favorite');
  $('.product-line-favorite-list').removeClass('product-line-favorite');
  $('.product-opportunities-favorite-list').removeClass('product-opportunities-favorite');
  $('.product-price-favorite-list').removeClass('product-price-favorite');
});
$(document).ready(function(){  
  $('.product-category-favorite-show-number').click(function(){
    $(this).find("~ .product-category-favorite-number").css({"display":"block","padding":"0px 10px"})
    $(this).css({"display":"none"})
  });
});

$(".grid-btn-catalog").click(function(){
  $('.product-item-list').addClass('product-item');
  $('.product-img-list').addClass('product-img');
  $('.product-img-list img').addClass('product-img-list img');
  $('.product-list-text').addClass('product-list');
  $('.product-name-block-list').addClass('product-name-block');
  $('.product-line-list').addClass('product-line');
  $('.product-opportunities-list').addClass('product-opportunities');
  $('.product-price-list').addClass('product-price');
  $('.product-hover').addClass('product-hover-grid');
});
$(".list-btn-catalog").click(function(){
  $('.product-item-list').removeClass('product-item');
  $('.product-img-list').removeClass('product-img');
  $('.product-img-list img').removeClass('product-img-list img');
  $('.product-list-text').removeClass('product-list');
  $('.product-name-block-list').removeClass('product-name-block');
  $('.product-line-list').removeClass('product-line');
  $('.product-opportunities-list').removeClass('product-opportunities');
  $('.product-price-list').removeClass('product-price');
  $('.product-hover').removeClass('product-hover-grid');
});

$(document).ready(function($) {
  $('.popup-open-dilivery').click(function() {
      $('.popup-fade-dilivery').fadeIn();
      return false;
  });	
  
  $('.popup-close-dilivery').click(function() {
      $(this).parents('.popup-fade-dilivery').fadeOut();
      return false;
  });		

  $(document).keydown(function(e) {
      if (e.keyCode === 27) {
          e.stopPropagation();
          $('.popup-fade-dilivery').fadeOut();
      }
  });
  
  $('.popup-fade-dilivery').click(function(e) {
      if ($(e.target).closest('.popup-dilivery').length == 0) {
          $(this).fadeOut();					
      }
  });
});

$(document).ready(function(){
  $('.reg-tab').click(function(){
    $('.reg-tab').removeClass('active')
    $(this).addClass('active')
  })
});

$(document).ready(function(){
  $('#reg-tab-1').click(function(){
    $('#reg-tabs-item-1').addClass('active')
    $('#reg-tabs-item-2').removeClass('active')
  })
});

$(document).ready(function(){
  $('#reg-tab-2').click(function(){
    $('#reg-tabs-item-2').addClass('active')
    $('#reg-tabs-item-1').removeClass('active')
  })
});

$(document).ready(function($) {
  // $('.reg-fade-open').click(function() {
  //     $('.reg-fade').fadeIn();
  //     return false;
  // });	
  
  $('.reg-pop-up-close').click(function() {
      $(this).parents('.reg-fade').fadeOut();
      return false;
  });		

  $(document).keydown(function(e) {
      if (e.keyCode === 27) {
          e.stopPropagation();
          $('.reg-fade').fadeOut();
      }
  });
  
  $('.reg-fade').click(function(e) {
      if ($(e.target).closest('.reg-pop-up-in').length == 0) {
          $(this).fadeOut();					
      }
  });
});

$('.reg-fade-open').on('click', function(e){
  e.preventDefault();
  var $id = $(this).attr('data-id');
  if($id){
    $ind = $id;
  }else{
    $ind = 1;
  }
    console.log($ind);
    $('.reg-fade').fadeIn();
    jQuery('.reg-tab[data-id="' + $id + '"]').trigger('click')
  });

