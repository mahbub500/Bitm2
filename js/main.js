$(document).ready(function(){
       /* //Basic
   // $('h1').hide(1000);
        //$('h1').show(1000);
       $('h1').click(function(){
           alert('Hello Jquery');
       }); */
    
    /* //  Selector
    $('li:even').addClass('abc');
    $('li:odd').addClass('xyz');*/
    
    // Animation
    /*$('#b1').mouseover(function(){
        $(this).val('Hide The Div');
        $('div.one').slideUp(1000);
    });
    $('#b1').mouseout(function(){
        $(this).val('Show The Div');
        $('div.one').slideDown(1000);
    });*/
    
   /*$('#b1').mouseover(function(){
        $('#b1').val('Hide The Div');
        $('div.one').stop().slideToggle(1000);
    });*/
    
    //  Color Plate
    /*color = $('#colors').val();
    $('body').css('background',color);
    $('#colors').change(function(){
        color = $('#colors').val();
        $('body').css('background',color);
    });*/
    
        // Slide Animated Image
        /*$('a').mouseover(function(){
            $(this).animate({'width':'400px'},50);
        });
        $('a').mouseout(function(){
            $(this).animate({'width':'150px'},50);
        });*/
    
        // Drop Down Menu
        $('ul li').hover(function(){
            $(this).find('ul li').slideToggle(500);
        });
});




















