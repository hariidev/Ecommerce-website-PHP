$(document).ready(function (){


//top sale owl carousel
$("#top-sale .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },

        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
});



//new arrival owl carousel
$("#new-arrival .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },

        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
});




$("#products-main .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },

        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
});




//Isotope Filter
 var $grid = $(".grid").isotope({
     itemSelector : '.grid-item',
     layoutMode : 'fitRows'
 });

 //Filter Items on button click 
$(".button-group").on("click", "button" , function (){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({filter:filterValue});
})




});