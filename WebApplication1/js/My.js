
$(document).ready(function () {


    $('.go-back').on('click', function (el) {
        $(".page").hide();
        var id = $(el.currentTarget).attr("data-panel");
        $(id).show();
    });


    $('.go-back').on('click', function (el) {
        $(".page").hide();
        var id = $(el.currentTarget).attr("data-panel1");
        $(id).show();
    });


    $('.go-back').on('click', function (el) {
        $(".page").hide();
        var id = $(el.currentTarget).attr("data-panel2");
        $(id).show();
    });



    $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");


    $("#accordion, #accordion2 ").accordion({
        heightStyle: "content"
    });

    $("#Classes").tabs();
    $("#strokamenu1").menu();


    $('.groops').on('click', function () {
        $('.link').hide();
        $('#groops-inf').show();
    });

    $('.school').on('click', function () {
        $('.link').hide();
        $('#school-inf').show();
    });

    $('.music').on('click', function () {
        $('.link').hide();
        $('#music-inf').show();
    });

    $('.individual').on('click', function () {
        $('.link').hide();
        $('#ind-inf').show();
    });

    $('.english').on('click', function () {
        $('.link').hide();
        $('#english-inf').show();
    });

       $('.art').on('click', function () {
        $('.link').hide();
        $('#art-inf').show();
    });

    $('.peace').on('click', function () {
        $('.link').hide();
        $('#peace-inf').show();
    }); 

    $('.theatre').on('click', function () {
        $('.link').hide();
        $('#theatre-inf').show();
    });

    $('.sport').on('click', function () {
        $('.link').hide();
        $('#sport-inf').show();
        page = '#sport-inf';
    });


    $('.menuClick1').on('click', function () {
        $('.link').hide();
        $('#our-garden').show();
    });


    $('.menuClick2').on('click', function () {
        $('.link').hide();
        $('#classes').show();
    });




    $('.active-link-g, .active-link-gl').on('click', function () {
        $('.link').hide();
        $('#mainPane').show();
    });

   
    $('.menuClick3').on('click', function () {
        $('.link').hide();
        $('#english-inf').show();
    });

    $('.menuClick4').on('click', function () {
        $('.link').hide();
        $('#school-inf').show();
    });

    $('.menuClick5').on('click', function () {
        $('.link').hide();
        $('#music-inf').show();
    });

    $('.menuClick6').on('click', function () {
        $('.link').hide();
        $('#sport-inf').show();
    });

    $('.menuClick7').on('click', function () {
        $('.link').hide();
        $('#ind-inf').show();
    });

    $('.menuClick8').on('click', function () {
        $('.link').hide();
        $('#peace-inf').show();
    });

    $('.menuClick9').on('click', function () {
        $('.link').hide();
        $('#theatre-inf').show();
    });


    $('.menuClick10').on('click', function () {
        $('.link').hide();
        $('#art-inf').show();
    });

    $('.menuClick11').on('click', function () {
        $('.link').hide();
        $('#our-command').show();
    });

    $('.menuClick12').on('click', function () {
        $('.link').hide();
        $('#food').show();
    });

    $('.menuClick13').on('click', function () {
        $('.link').hide();
        $('#day').show();
    });



    $('#linkengl').on('click', function () {
        $('.link').hide();
        $('#english-inf').show();
    });

    $('#linkschool').on('click', function () {
        $('.link').hide();
        $('#school-inf').show();
    });

    $('#linkmusic').on('click', function () {
        $('.link').hide();
        $('#music-inf').show();
    });

    $('#linksport').on('click', function () {
        $('.link').hide();
        $('#sport-inf').show();
    });

    $('#linkind').on('click', function () {
        $('.link').hide();
        $('#ind-inf').show();
    });

    $('#linkpeace').on('click', function () {
        $('.link').hide();
        $('#peace-inf').show();
    });

    $('#linktheatre').on('click', function () {
        $('.link').hide();
        $('#theatre-inf').show();
    });

    $('#linkart').on('click', function () {
        $('.link').hide();
        $('#art-inf').show();
    });


    $('#our').on('click', function () {
        $('.link').hide();
        $('#our-about').show();
    });


    /*slider*/

    $('.fade2').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 500,
    });

    $('.english sl-img').on('click', function () {
        $('.link').hide();
        $('#english-inf').show();
    });

    $('.school sl-img').on('click', function () {
        $('.link').hide();
        $('#school-inf').show();
    });

    $('.music sl-img').on('click', function () {
        $('.link').hide();
        $('#music-inf').show();
    });


    $('.sport sl-img').on('click', function () {
        $('.link').hide();
        $('#sport-inf').show();
        page = '#sport-inf';
    });

    $('.individual sl-img').on('click', function () {
        $('.link').hide();
        $('#ind-inf').show();
    });

    $('.peace sl-img').on('click', function () {
        $('.link').hide();
        $('#peace-inf').show();
    });

    $('.theatre sl-img').on('click', function () {
        $('.link').hide();
        $('#theatre-inf').show();
    });

    $('.art sl-img').on('click', function () {
        $('.link').hide();
        $('#art-inf').show();
    });



});



























// конец ready


