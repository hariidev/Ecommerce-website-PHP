$(document).ready(function (){


$("#top-sale .owl-carousel").owlCarousel({
    loop:true,
    dots:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },

        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
});