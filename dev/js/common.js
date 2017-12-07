$(document).ready(function () {
    function inputsCounterWidthBehaviour() {

        $("input[type='number']").bind('keydown', function () {
            $(this).attr("size", Math.max(10, $(this).val().length));
        });

    }
    inputsCounterWidthBehaviour();

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
