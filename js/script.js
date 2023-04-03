$(document).ready(function(){
    $('#logo-slider').owlCarousel({
        margin:64,
        loop:true,
        nav:false,
        dots: false,
        autoWidth:true, 
        responsiveClass:true,
        responsive:{
            0:{
                margin:47,              
            },
            768:{
                margin:47,              
            },
            992:{
                margin:50,              
            },
            1400:{
                margin:64,   
            }
        }
    })
    $('#logo-slider2').owlCarousel({
        margin:64,
        loop:true,
        nav:false,
        dots: false,
        autoWidth:true, 
        responsiveClass:true,
        responsive:{
            0:{
                margin:47,              
            },
            768:{
                margin:47,              
            },
            992:{
                margin:50,              
            },
            1400:{
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