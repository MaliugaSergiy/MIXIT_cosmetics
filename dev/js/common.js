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
        let corousel_container = $(".corousel_container"),
            carousel_item = corousel_container.find(".item"),
            item_amount = carousel_item.length;

        function move_slide(event) {
            event.preventDefault();
            let scrolled_position = +corousel_container.attr("data-scrolled"),
                corousel_container_width = corousel_container.outerWidth(),
                carousel_item_width = carousel_item.outerWidth(),
                total_width_of_items = carousel_item_width * item_amount,
                direction = $(this).data("direction"),
                item_translation;

            if (direction) {
                if (scrolled_position == item_amount) {
                    scrolled_position = 0;
                } else {
                    scrolled_position++;
                }

            } else {
                if (scrolled_position == 0) {
                    scrolled_position = item_amount;
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

        //        $(".corousel_left").on("click", function (event) {
        //            event = event || window.event;
        //            event.preventDefault();
        //            move_slide(0);
        //        });
        //        
        //        $(".corousel_right").on("click", function (event) {
        //            event = event || window.event;
        //            event.preventDefault();
        //            move_slide(1);
        //        });

        $(".corousel_left, .corousel_right").on("click", move_slide);

        function setTransitionToItems() {
            let scrolled_position = +corousel_container.attr("data-scrolled"),
                carousel_item_width = carousel_item.outerWidth(),
                item_translation;

            item_translation = scrolled_position * carousel_item_width * -1;
            carousel_item.each(function () {
                $(this).eq(0).css('transform', 'translateX(' + item_translation + 'px)');
            });
        }

        $(window).on("resize", setTransitionToItems);
        setTransitionToItems();

    })();

});




/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
