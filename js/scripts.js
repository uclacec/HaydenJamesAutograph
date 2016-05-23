/**
 * Created by Daniel on 5/20/2016.
 */
(function(){
    //when clicked
    $('#btn').on('click',
        function(){
            var line=$('#line');
            //if screen size is less than 500 pixels
         if($(window).width()<500){
             var autograf=$('#autograf');
             var haydenjames=$('#haydenjames');
             autograf.fadeOut();
             haydenjames.fadeOut();

             //animates line to take up more width
             line.animate({
                 width:79+'vw',
                 left:11+'vw',
                 opacity:.8
             },1000);
         }
            else{
             introAnimate();
             //animates line to take up more width
             line.animate({
                 width:60+'vw',
                 left:20+'vw',
                 opacity:.8
             },1000);
         }

            setTimeout(function(){
                $('#line-content').fadeIn();
            },1500);


            setTimeout(function(){
                $('#btn').fadeOut();
            },500);
            var post=document.getElementById("autograf");
            $('#postinput').on("click",function(){
                html2canvas(document.getElementById("post"),{
                    onrendered:function(canvas) {
                        //document.body.appendChild(canvas);
                        var a = document.createElement('a');
                        //saves canvas image as jpg
                        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                        a.download = "HaydenJamesAutografLyrics.jpg";
                        a.click();
                    }
                }
                );
            });
        });
    //var original= firebase.database().ref('imageName');
    //var imgname= firebase.database().update('imageName');
    var num;
    function introAnimate(){
        var autograf=$('#autograf');
        var haydenjames=$('#haydenjames');
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
    }
})();