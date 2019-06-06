$(document).ready(function(){
    $('#play').click(function(){
        $('#slider').cycle('resume');
    });
    $('#pause').click(function(){
        $('#slider').cycle('pause');
    });
    $('#slider').cycle({
        fx : 'all',
        speed: 1000,
        timeout: 2000,
        next: '#next',
        prev: '#prev',
        pager: '#pager'
    });
});