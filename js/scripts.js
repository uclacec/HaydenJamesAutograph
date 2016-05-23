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
        if(window.innerWidth > 480){
            //animates autograf logo to bottom left
            autograf.animate({
                top:70+'vh',
                left:2+'vw',
                width:13+'vw'
            },1000);

            //animates haydenjames logo to top right
            haydenjames.animate({
                top:10+'vh',
                left:71+'vw',
                width:13+'vw'
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
        }
        
      


        setTimeout(function(){
            $('#btn').fadeOut();
        },10)
    }
})();