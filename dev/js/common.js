$(document).ready(function () {
    //    function inputsCounterWidthBehaviour() {
    //
    //        $("input[type='number']").bind('keydown', function () {
    //            $(this).attr("size", Math.max(10, $(this).val().length));
    //        });
    //
    //    }
    //    inputsCounterWidthBehaviour();

    //Plus/Minus Incrementer 
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // burger behaviour
    $(".burger").on("click", function (e) {
        //        alert("dsdsd");
        e.preventDefault();
        $(".header_nav").slideToggle();
    })

    function header_nav_Hide() {
        //        alert($(window).width());
        if ($(window).width() <= 904) {
            $(".header_nav").hide();
        } else {
            $(".header_nav").show();
        }
    }
    header_nav_Hide();
    $(window).on("resize", header_nav_Hide);


    //modals 
    (function modal() {
        // Click function for show the Modal
        $(".choice").on("click", function (e) {
            e.preventDefault();
            $(".overlay").addClass("active");
            $("body").addClass("oh");

        });

        // Function for close the Modal

        function closeModal() {
            $(".overlay").removeClass("active");
            $("body").removeClass("oh");
        }

        // Call the closeModal function on the clicks/keyboard

        $(".close, .overlay").on("click", function () {
            closeModal();
        });

        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                closeModal();
            }
        });
    })();

    //carousel function

    (function carousel() {
        let corousel_container = $(".carousel_container"),
            carousel_item = corousel_container.find(".item"),
            item_amount = carousel_item.length;

        function move_slide(event) {
            event = event || window.event;
            event.preventDefault();
            let scrolled_position = +corousel_container.attr("data-scrolled"),
                corousel_container_width = corousel_container.outerWidth(),
                carousel_item_width = carousel_item.outerWidth(),
                total_width_of_items = carousel_item_width * item_amount,
                direction = $(this).data("direction"),
                amount_not_scroll_steps = corousel_container_width / carousel_item_width,
                max_amount_of_scrolled_steps = Math.round(item_amount - amount_not_scroll_steps),
                item_translation;

            if (direction) {
                if (scrolled_position == max_amount_of_scrolled_steps) {
                    scrolled_position = 0;
                } else {
                    scrolled_position++;
                }

            } else {
                if (scrolled_position == 0) {
                    scrolled_position = max_amount_of_scrolled_steps;
                } else {
                    scrolled_position--;
                }

            };

            corousel_container.attr("data-scrolled", scrolled_position);

            item_translation = scrolled_position * carousel_item_width * -1;
            carousel_item.each(function () {
                $(this).eq(0).css('transform', 'translateX(' + item_translation + 'px)');
            });
        }

        $(".corousel_left, .corousel_right").on("click", move_slide);

        function setTransitionToItems() {
            let scrolled_position = +corousel_container.attr("data-scrolled"),
                corousel_container_width = corousel_container.outerWidth(),
                carousel_item_width = carousel_item.outerWidth(),
                amount_not_scroll_steps = corousel_container_width / carousel_item_width,
                max_amount_of_scrolled_steps = Math.round(item_amount - amount_not_scroll_steps),
                item_translation;

            if (scrolled_position > max_amount_of_scrolled_steps) {
                scrolled_position = max_amount_of_scrolled_steps;
                corousel_container.attr("data-scrolled", scrolled_position);
            }

            item_translation = scrolled_position * carousel_item_width * -1;
            carousel_item.each(function () {
                $(this).eq(0).css('transform', 'translateX(' + item_translation + 'px)');
            });
        }

        $(window).on("resize", function () {
            setTimeout(setTransitionToItems, 550);
        });

    })();

    (function showTooltip() {
        let tooltip = $(".tooltip").eq(0),
            clonedTooltip,
            closeButtonForClonedTooltip;
        
        $(".show_tooltip").on({
            mouseenter: function () {

                let topOffset = $(this).offset().top,
                    leftOffset = $(this).offset().left,
                    positionedClass;

                if (leftOffset < 95) positionedClass = "closeToLeft";

                this_target = $(this);
                clonedTooltip = tooltip.clone().addClass("active-tooltip").addClass(positionedClass);
                closeButtonForClonedTooltip = clonedTooltip.find(".close_tooltip");
                clonedTooltip.prependTo("body").css({
                    left: leftOffset + 20,
                    top: topOffset - 15
                }).stop().slideDown();
            },
            mouseleave: function () {
                setTimeout(function () {
                    clonedTooltip.slideUp();
                }, 200);
            }
        });

        $("body").on("click", ".close_tooltip", function () {
            $(this).parent().slideUp();
        });
    })();
});