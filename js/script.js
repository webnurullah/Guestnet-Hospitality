$(document).ready(function(){
    $('#logo-slider').owlCarousel({
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 2200,
        autoplayTimeout: 2200,
        autoplayHoverPause: false,
        margin:64,
        loop:true,
        nav:false,
        dots: false,
        autoWidth:false, 
        responsiveClass:true,
        responsive:{
            0:{
                items:4,
                margin:47,              
            },
            576:{
                items:5,
                margin:47,              
            },
            768:{
                items:6,
                margin:47,              
            },
            992:{
                items:8,
                margin:50,              
            },
            1400:{
                items:10,
                margin:64,   
            }
        }
    })
    $('#logo-slider2').owlCarousel({
        rtl: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 2200,
        autoplayTimeout: 2200,
        autoplayHoverPause: false,
        margin:64,
        loop:true,
        nav:false,
        dots: false,
        autoWidth:false, 
        responsiveClass:true,
        responsive:{
            0:{
                items:4,
                margin:47,              
            },
            576:{
                items:5,
                margin:47,              
            },
            768:{
                items:6,
                margin:47,              
            },
            992:{
                items:8,
                margin:50,              
            },
            1400:{
                items:10,
                margin:64,   
            }
        }
    })
    $('#discover-slider').owlCarousel({
        margin:40,
        loop:true,
        nav:true,
        navText : ["<i class='fa-regular fa-arrow-left-long'></i>","<i class='fa-regular fa-arrow-right-long'></i>"],   
        items:3,
        dots: false,
        autoWidth:true, 
        responsiveClass:true,
        responsive:{
            0:{
                nav:false,    
                margin:20,              
            },
            768:{
                nav:false,    
                margin:30,  
                       
            },
            992:{
                nav:true,    
                margin:40,              
            },
            1400:{
               
            }
        }
    })
});