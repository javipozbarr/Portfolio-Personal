(function ($) {
    "use strict";
    $(window).on("load", function () {
        $("#status").fadeOut();
        $("#preloader").delay(450).fadeOut("slow");
        $('.grid').masonry({
            itemSelector: '.grid-item'
        });
    });
    $(document).ready(function () {

        smoothScroll.init({
            selector: '[data-scroll]',
            selectorHeader: '[data-scroll-header]',
            speed: 500,
            easing: 'easeInOutCubic',
            updateURL: true,
            offset: 0,
            callback: function (toggle, anchor) {}
        });
        var bodyEl = document.body,
            content = document.querySelector('.content-wrap'),
            openbtn = document.getElementById('open-button'),
            closebtn = document.getElementById('close-button'),
            isOpen = false;

        function inits() {
            initEvents();
        }

        function initEvents() {
            openbtn.addEventListener('click', toggleMenu);
            if (closebtn) {
                closebtn.addEventListener('click', toggleMenu);
            }
            content.addEventListener('click', function (ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleMenu();
                }
            });
        }

        function toggleMenu() {
            if (isOpen) {
                classie.remove(bodyEl, 'show-menu');
            } else {
                classie.add(bodyEl, 'show-menu');
            }
            isOpen = !isOpen;
        }
        inits();
        $('input').blur(function () {
            if ($(this).val()) $(this).addClass('used');
            else
                $(this).removeClass('used');
        });
        jQuery('.skillbar').each(function () {
            jQuery(this).appear(function () {
                jQuery(this).find('.count-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 3000);
                var percent = jQuery(this).attr('data-percent');
                jQuery(this).find('.count').html('<span>' + percent + '</span>');
            });
        });
    });

  /*  function inits() {
        window.addEventListener('scroll', function (e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 300,
                header = document.querySelector(".for-sticky");
            if (distanceY > shrinkOn) {
                classie.add(header, "opacity-nav");
            } else {
                if (classie.has(header, "opacity-nav")) {
                    classie.remove(header, "opacity-nav");
                }
            }
        });
    }
    window.onload = inits();*/


})(jQuery);
