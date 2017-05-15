
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// JE SUIS DISPONIBLE POUR UN STAGE DU 21 AOUT AU 27 OCTOBRE 2017 !!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


$(document).ready(function () {

    var stickyNavTop = $('.menuGen').offset().top;

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.menuGen').addClass('sticky');
            $(".navbar").addClass('noshadow');
        } else {
            $('.menuGen').removeClass('sticky');
            $(".navbar").removeClass('noshadow')
        }
    };
    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });

    /* konami code - Essaye, ça retourne la tête !*/
    var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        n = 0;
    $(document).keydown(function (e) {
        if (e.keyCode === k[n++]) {
            if (n === k.length) {
                $('body').toggleClass("rotate")
                n = 0;
                return false;
            }
        } else {
            n = 0;
        }
    });

    var colours = ["#003333"];

    var competences = ["Html5", "CSS3", "Javascript", "jQuery", "Ajax", "NodeJs", "PHP", "Git", "ReactJs", "Bootstrap", "Photoshop", "inDesign", "Illustrator", "PremierePro"]


    for (var i = 0; i < competences.length; i++) {
        var num = Math.floor(Math.random() * colours.length);
        $("#cptces").append("<p class='competence " + competences[i] + "'>" + competences[i] + "</p>");
        $('.' + competences[i]).css("background-color", colours[num]);
    }


})