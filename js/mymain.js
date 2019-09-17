$(document).ready(function(){  
    $("#menu_item1").click(function(){  
        document.querySelector('#project').scrollIntoView({ 
            behavior: 'smooth' 
          }); 
        $('.menu_mobile').hide();
    });
    $("#menu_item2").click(function(){  
        document.querySelector('#search').scrollIntoView({ 
            behavior: 'smooth' 
          }); 
        $('.menu_mobile').hide();
    });
    $("#menu_item3").click(function(){  
        document.querySelector('#tech').scrollIntoView({ 
            behavior: 'smooth' 
          }); 
        $('.menu_mobile').hide();
    });
    $("#menu_item4").click(function(){  
        document.querySelector('#eco').scrollIntoView({ 
            behavior: 'smooth' 
          }); 
        $('.menu_mobile').hide();
    });
    $("#menu_item5").click(function(){  
        document.querySelector('#team').scrollIntoView({ 
            behavior: 'smooth' 
          }); 
        $('.menu_mobile').hide();
    }); 
    $("#menu_item6").click(function(){  
    document.querySelector('#partner').scrollIntoView({ 
        behavior: 'smooth' 
        }); 
    $('.menu_mobile').hide();
    }); 

    $("#menu_item7").click(function(){  
    document.querySelector('#contact').scrollIntoView({ 
        behavior: 'smooth' 
        }); 
        
    $('.menu_mobile').hide();
    });

    $(".jumbo_btn").click(function(){  
    document.querySelector('#contact').scrollIntoView({ 
        behavior: 'smooth' 
        }); 
    });

    $(".up").click(function(){  
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    }); 

    $(".menu_icon_img").click(function(){  
        $( ".menu_mobile" ).slideDown();
    }); 

    $(".close_menu_btn>i").click(function(){  
        $( ".menu_mobile" ).slideUp();
    }); 

    
});  