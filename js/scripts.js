//*OPENING PAGE*//

$(function () {
    $(window).stellar();


});



$(function () {

    //when user clicks over button
    $('.button').click(function () {

        //curtains slide out
        $('.leftcurtain').toggleClass('animated slideOutLeft');
        $('.rightcurtain').toggleClass('animated slideOutRight');
        //button fades out 
        $('.button').fadeOut(1000);

    });
});


$(function () {
    //spotlight fades in and out
    $('.lightbeam').delay(2000).fadeIn(1500).fadeOut(2000);

    //and then bowie fades in
    $('.naked').delay(2000).fadeIn(1000);
});




//*REPETITIVE EVENTS*//

//when user clicks on bowie 
$(function () {
    $('.naked').click(function () {

        //text appears
        $('.pintro').fadeIn(1000);

    })

});


//when user clicks on item on nav
//page scrolls to next outfit (point on page)
//transition happens (slides in and out, or whatever happens)
//subsequently, bowie outfit is revealed (fades in)


$(function () {

    //when user clicks on first link
    $('.intropage_link').click(function () {
        //page scrollTo top
        $(window).scrollTo($('header'), 1000);
        //curtains slide in
        $('.leftcurtain').toggleClass('animated slideInLeft');
        $('.rightcurtain').toggleClass('animated slideInRight');
        //button fades in
        $('.button').fadeIn(1000);


    });

    //when user clicks a link in the nav
    $('.page1_link').click(function () {
        //scroll to that particular page, smoothly
        $(window).scrollTo($('.page1'), 1000);

    });

    $('.page2_link').click(function () {
        $(window).scrollTo($('.section2'), 1000);

    });

    $('.page4_link').click(function () {
        $(window).scrollTo($('.section3'), 1000);
    });

    $('.page5_link').click(function () {
        $(window).scrollTo($('.section4'), 1000);
    });


    $('.page6_link').click(function () {
        $(window).scrollTo($('.section5'), 1000);
    });

    $('.page7_link').click(function () {
        $(window).scrollTo($('.section6'), 1000);
    });


    $('.page8_link').click(function () {
        $(window).scrollTo($('.section7'), 1000);
    });


    $('.page9_link').click(function () {
        $(window).scrollTo($('.section8'), 1000);
    });




});
//*waypoints*//



$(function () {

});









//*SPECIAL EVENTS*//




//when user clicks item 5 on nav
//page fades to black (ease) and scrolls to page 5 
//when window reaches page 5, page returns to normal to reveal next outfit