/**
 * Created by Daniel on 5/20/2016.
 */
(function(){
    //when clicked
    $('#btn').on('click',introAnimate);

    function introAnimate(){
        var autograf=$('#autograf');
        var haydenjames=$('#haydenjames');
        var line=$('#line');
        //animates autograf logo to bottom left
        autograf.animate({
            top:76+'vh',
            left:1+'vw',
            width:10+'vw'
        },1000);

        //animates haydenjames logo to top right
        haydenjames.animate({
            top:5+'vh',
            left:78+'vw',
            width:10+'vw'
        },1000);

        //animates line to take up more width
        line.animate({
            width:60+'vw',
            left:20+'vw',
            opacity:.8
        },1000);
        setTimeout(function(){
            $('#line-content').fadeIn();
        },1000);


        setTimeout(function(){
            $('#btn').fadeOut();
        },500)
    }
})();