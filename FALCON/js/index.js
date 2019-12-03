// МОДАЛЬНОЕ ОКНО МОЖНО СОЗДАВАТЬ НЕСКОЛЬКО НА СТРАНИЦЕ!
   !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

   document.addEventListener('DOMContentLoaded', function() {
      /* Записываем в переменные массив элементов-кнопок и подложку.
         Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
      var modalButtons = document.querySelectorAll('.js-open-modal'),
         overlay      = document.querySelector('.js-overlay-modal'),
         closeButtons = document.querySelectorAll('.js-modal-close');
      /* Перебираем массив кнопок */
      modalButtons.forEach(function(item){
         /* Назначаем каждой кнопке обработчик клика */
         item.addEventListener('click', function(e) {
            /* Предотвращаем стандартное действие элемента. Так как кнопку разные
               люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
               Нужно подстраховаться. */
            e.preventDefault();
            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
               и будем искать модальное окно с таким же атрибутом. */
            var modalId = this.getAttribute('data-modal'),
               modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            /* После того как нашли нужное модальное окно, добавим классы
               подложке и окну чтобы показать их. */
            modalElem.classList.add('active');
            overlay.classList.add('active');
         }); // end click
      }); // end foreach
      closeButtons.forEach(function(item){
         item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
         });
      }); // end foreach
      document.body.addEventListener('keyup', function (e) {
         var key = e.keyCode;
         if (key == 27) {
               document.querySelector('.modal.active').classList.remove('active');
               document.querySelector('.overlay').classList.remove('active');
         };
      }, false);
      overlay.addEventListener('click', function() {
         document.querySelector('.modal.active').classList.remove('active');
         this.classList.remove('active');
      });
   }); // end ready
// КОНЕЦ МОДАЛЬНОГО ОКНА

//поворачиваюшиеся менюшки
$('body').waitForImages(function() {
   $('.spinner').fadeOut();
}, $.noop, true);

// (function(){
// 	$(".flex-slide").each(function(){
// 		$(this).hover(function(){
// 			$(this).find('.flex-title').css({
// 				transform: 'rotate(0deg)',
// 				top: '30%'
// 			});
// 			$(this).find('.flex-about').css({
// 				opacity: '1'
// 			});
// 		}, function(){
// 			$(this).find('.flex-title').css({
// 				transform: 'rotate(90deg)',
// 				top: '45%'
// 			});
// 			$(this).find('.flex-about').css({
// 				opacity: '0'
// 			});
// 		})
// 	});
// })();
//поворачиваюшиеся менюшки(конец)


// ХЭДЕР
$(document).ready(function(){
   // Фикмированная шапка при скролле
   $(window).scroll(function(){
      if ($(this).scrollTop() >= 300) {
         $('.header_bottom_2').fadeIn("slow")
      } else {
         $('.header_bottom_2').fadeOut("slow");
      };
   });
});

// ХЭДЕР(конец)

//кнопка подъема вверх
      $(document).ready(function(){
         $('body').append('<a href="#" id="go-top" title="Вверх">&#9650;</a>');
       });
       $(function() {
        $.fn.scrollToTop = function() {
         $(this).hide().removeAttr("href");
         if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
         var scrollDiv = $(this);
         $(window).scroll(function() {
          if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
          else $(scrollDiv).fadeIn("slow")
         });
         $(this).click(function() {
          $("html, body").animate({scrollTop: 0}, "fast")
         })
        }
       });
       
       $(function() {
        $("#go-top").scrollToTop();
       });
//кнопка подъема вверх(конец)


// мобильное меню
$('.menu-btn').on('click', function(e) {
   e.preventDefault();
   $('.mobile_menu_in').toggleClass('menu-active');
   $('.content').toggleClass('content-active');
      if ($(".mobile_menu_in").hasClass('menu-active')) { // начиная с этой строки я сделал затемнение заднего экрана
      $('<div class="overlay_mobile">&nbsp;</div>').prependTo($('body'));
      } else {
      $('.overlay_mobile').remove();
}
});

// мобильное меню (конец)

// анимированная мобильная кнопка
$(document).ready(function(){
  $(".hamburger").click(function(){
     $(this).toggleClass("open");
  });
});
// анимированная мобильная кнопка (конец)



