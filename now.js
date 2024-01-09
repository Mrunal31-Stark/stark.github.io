var i = 0;
var txt1 =
    "Hi Bestie Meri Jaan.....!  <<               Now I want to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < well it was online only bcoz you never meet in real i wish i could one day it will be sucess. it feels a special connection to you.  <<                  As the days goes < you are becoming my that person whom I began to trust ....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >I Love U <My dear Best Friend .....! |                  <<<< Thank You for Being in my life .... Thank You so Much... lots of love from me to you..!   by Mrunal Yewatkar";
var speed = 55;
typeWriter();

function typeWriter() {
    if (i < txt1.length) {
        if (txt1.charAt(i) === "<")
            document.getElementById("text1").innerHTML += "</br>";
        else if (txt1.charAt(i) === ">")
            document.getElementById("text1").innerHTML = "";
        else if (txt1.charAt(i) === "|") {
            $(".bg_heart").css("background-image", "')");
        } else document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}