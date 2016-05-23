/**
 * Created by Daniel on 5/21/2016.
 */
(function(){
    var list=[
        {
            fl:"There's something about you",
            ll:" There's something about",
            sign:"."
        },
        {
            fl:"What about a hit?",
            ll:"What about a hit of your",
            sign:"."
        },
        {
          fl:"Start to shake",
            ll:"Start to shake with your",
            sign:"."
        },
        {
            fl:"What of a click?",
            ll: "What of a click, are you a",
            sign:"?"
        },
        {
            fl:"You turn and face me",
            ll:"Maybe this time I'll",
            sign:"."
        },
        {
            fl:"When are you coming back",
            ll:"I miss your strong",
            sign:"."
        },
        {
            fl:"I want to believe we have",
            ll:"Chance to let our hearts",
            sign:"."
        },
        {
            fl:"I need you here with me",
            ll:"You see it on my",
            sign:"."
        },
        {
            fl:"And know that when our heart beats run",
            ll:"Troubles will be",
            sign:"."
        },
        {
            fl:"I get permission to love",
            ll:"I get permission to",
            sign:"."
        },
        {
            fl:"I get the mission to love",
            ll:"I get the mission to",
            sign:"."
        }
    ];
    var randLyric=Math.floor((Math.random() * 11 ) + 1)-1;
    $('.first-line').text(list[randLyric].fl);
    $('.last-line').text(list[randLyric].ll);
    $('#sign').text(list[randLyric].sign);
})();