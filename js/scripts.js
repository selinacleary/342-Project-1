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

        //spotlight fades in and out
        $('.lightbeam').delay(1000).fadeIn(1500).fadeOut(2000);

        //and then bowie fades in
        $('.naked').delay(2000).fadeIn(1000);

    });
});

//*REPETITIVE EVENTS*//

//when user clicks on bowie 
$(function () {
    $('.naked').click(function () {
        //text appears
        $('.pintro').fadeIn(1000);
    })

});

//when user clicks on .ziggy, .p1 fades in
$(function () {
    $('.ziggy').click(function () {
        $('.p1').fadeIn(1000);
    })
});

//when user clicks on .spaceoddity, .p2 fades in
$(function () {
    $('.spaceoddity').click(function () {
        $('.p2').fadeIn(1000);
    })
});

//when user clicks on .lifeonmars, .p3 fades in
$(function () {
    $('.lifeonmars').click(function () {
        $('.p3').fadeIn(1000);
    })
});


//when user clicks on .bodysuit, .p4 fades in
$(function () {
    $('.bodysuit').click(function () {
        $('.p4').fadeIn(1000);
    })
});

//when user clicks on .kimono, .p5 fades in
$(function () {
    $('.kimono').click(function () {
        $('.p5').fadeIn(1000);
    })
});

//when user clicks on .tokyo, .p6 fades in
$(function () {
    $('.tokyo').click(function () {
        $('.p6').fadeIn(1000);
    })
});


$(function () {
    //when user clicks on first link
    $('.intro_page_link').click(function () {
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
        $(window).scrollTo($('.section1'), 1000);
    });
    $('.page2_link').click(function () {
        $(window).scrollTo($('.section2'), 1000);
    });
    $('.page3_link').click(function () {
        $(window).scrollTo($('.section3'), 1000);
    });
    $('.page4_link').click(function () {
        $(window).scrollTo($('.section4'), 1000);
    });
    $('.page5_link').click(function () {
        $(window).scrollTo($('.section5'), 1000);
    });
    $('.page6_link').click(function () {
        $(window).scrollTo($('.section6'), 1000);
    });
    $('.page7_link').click(function () {
        $(window).scrollTo($('.section7'), 1000);
    });
    $('.page8_link').click(function () {
        $(window).scrollTo($('.section8'), 1000);
    });

});

//*waypoints*//

$(function () {
    $('.section1').waypoint(function (direction) {
        $('nav a div').removeClass('selected', 200);
        if (direction === 'down') {
            $('.circle1').addClass('selected', 200);
        } else {
            $('.circle0').addClass('selected', 200);
        }
    });
});

$(function () {
    $('.section2').waypoint(function (direction) {
        $('nav a div').removeClass('selected', 200);
        if (direction === 'down') {
            $('.circle2').addClass('selected', 200);

            //on .section2: (animate.css)
            //.flag slides in and out, .ziggy fades in. 
            $('.flag').toggleClass('animatedCustom slideAcrossCustom');
            $('.ziggy').delay(1000).fadeIn(1000);
        } else {
            $('.circle1').addClass('selected', 200);
        }
    });
});

$(function () {
    $('.section3').waypoint(function (direction) {
        $('nav a div').removeClass('selected', 200);
        if (direction === 'down') {
            $('.circle3').addClass('selected', 200);

            //on .section3: (animate.css)
            //.spotlight1 and .spotlight2 slide in and out, .spaceoddity fades in
            $('.spotlight1').toggleClass('animatedCustom slideAcrossCustom');
            $('.spotlight2').delay(1000).toggleClass('animatedCustom slideAcrossCustom');
            $('.spaceoddity').delay(2000).fadeIn(1000);
        } else {
            $('.circle2').addClass('selected', 200);
        }
    });
});

$(function () {
    $('.section4').waypoint(function (direction) {
        $('nav a div').removeClass('selected', 200);
        if (direction === 'down') {
            $('.circle4').addClass('selected', 200);

            //on .section4: (animate.css)
            //.space slides in and out, .lifeonmars fades 
            $('.space').toggleClass('animatedCustom slideAcrossCustom');
            $('.lifeonmars').delay(1000).fadeIn(1000);
        } else {
            $('.circle3').addClass('selected', 200);
        }

    });
});

$(function () {
    $('.section5').waypoint(function (direction) {
        $('nav a div').removeClass('selected', 200);
        if (direction === 'down') {
            $('.circle5').addClass('selected', 200);
            //on .section5: plugin? .fadeTo? ease?
            //lights fade to black (ease) and then fade back in .bodysuit fades in
            $('.bg').animate({
                backgroundColor: 'rgba(0, 0, 0, 1)'
            });
            $('.bodysuit').delay(1000).fadeIn(1000);

            $('.bg').delay(2000).animate({
                backgroundColor: '#58595B'
            });
        } else {
            $('.circle4').addClass('selected', 200);
        }
    });
});

$(function () {
    $('.section6').waypoint(function (direction) {
        $('nav a div').removeClass('selected', 200);
        if (direction === 'down') {
            $('.circle6').addClass('selected', 200);

            //on .section6: (animate.css)
            //.screen slides in and out, .kimono fades in
            $('.screen').toggleClass('animatedCustom slideAcrossCustom');
            $('.kimono').delay(1000).fadeIn(1000);
        } else {
            $('.circle5').addClass('selected', 200);
        }
    });
});

$(function () {
    $('.section7').waypoint(function (direction) {
        $('nav a div').removeClass('selected', 200);
        if (direction === 'down') {
            $('.circle7').addClass('selected', 200);
            $('.spotlight3').toggleClass('animatedCustom slideAcrossCustom');
            $('.spotlight4').delay(1000).toggleClass('animatedCustom slideAcrossCustom');
            $('.tokyo').delay(2000).fadeIn(1000);
        } else {
            $('.circle6').addClass('selected', 200);
        }

        //on .section 8: plugin(??) 
        //falling glitter covers page 6, .tokyo fades in

    });
});

$(function () {
    $('.section8').waypoint(function (direction) {
        $('nav a div').removeClass('selected', 200);
        if (direction === 'down') {
            $('.circle8').addClass('selected', 200);
        } else {
            $('.circle7').addClass('selected', 200);
        }
    });
});






//*SPECIAL EVENTS*//




//when user clicks item 5 on nav
//page fades to black (ease) and scrolls to page 5 
//when window reaches page 5, page returns to normal to reveal next outfit