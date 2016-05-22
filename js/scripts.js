/**
 * Created by Daniel on 5/20/2016.
 */
(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDjsSaVcA5Sb_JB5QujIK3Ayhwao2Knlgc",
        authDomain: "project-8001030731840866776.firebaseapp.com",
        databaseURL: "https://project-8001030731840866776.firebaseio.com",
        storageBucket: "",
    };
    firebase.initializeApp(config);
    // Get a reference to the database service
    var database = firebase.database();

    //when clicked
    $('#btn').on('click',introAnimate);
    //var original= firebase.database().ref('imageName');
    //var imgname= firebase.database().update('imageName');
    var num;
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
        },1500);


        setTimeout(function(){
            $('#btn').fadeOut();
        },500);
        var post=document.getElementById("autograf");
        $('#postinput').on("click",function(){
            html2canvas(document.getElementById("post")).then(function(canvas) {
                //document.body.appendChild(canvas);
                var a = document.createElement('a');
                //saves canvas image as jpg
                a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                num++;
                //imgname.update(num);

                //push url to firebase
                database.ref('images').push(a.href);

                var imgRef = firebase.database().ref('images/');
                imgRef.on('child_added', function(data) {
                    $("#realpost").attr("src",data.val());
                    //fbs_click(post);
                    window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(imgRef+data.val)+'&t=','sharer','toolbar=0,status=0,width=626,height=436');
                });
            });
        });
        function fbs_click(TheImg) {
            u=TheImg.src;
            // t=document.title;
            t=TheImg.getAttribute('alt');
            window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;
        }
    }
})();