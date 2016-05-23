/**
 * Created by Daniel on 5/20/2016.
 */
(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDjsSaVcA5Sb_JB5QujIK3Ayhwao2Knlgc",
        authDomain: "project-8001030731840866776.firebaseapp.com",
        databaseURL: "https://project-8001030731840866776.firebaseio.com",
        storageBucket: "project-8001030731840866776.appspot.com"
    };
    firebase.initializeApp(config);

    // Get a reference to the storage service, which is used to create references in your storage bucket
    var storage = firebase.storage();

    // Create a storage reference from our storage service
    var storageRef = storage.ref();
    // Create a child reference

    window.fbAsyncInit = function() {
        FB.init({
            appId      : '',
            xfbml      : true,
            version    : 'v2.6'
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

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
                a.download = "HaydenJamesAutografLyrics.jpg";
                a.click();
            });
        });

    }
})();