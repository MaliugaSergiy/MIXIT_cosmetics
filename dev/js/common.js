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
    
    // Click function for show the Modal

    $(".choice").on("click", function(e) {
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
