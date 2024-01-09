var i = 0;
var txt1 =
    "Hi Bestie My Cute Little Panda .....!  <<               Now I want to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < well it was online only bcoz you never meet in real I wish I could one day it will be sucess. it feels a special connection to you.  <<                  As the days goes < you are becoming my that person whom I began to trust ....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > I don't Know but whenever I talk to you , whether you are roasting me or normal talks it feels like you are the special person whom i can say everything without being judge....!                     << I am somewhat nervous Because I haven't said these words to anyone , but now from the dept of my heart i wanna say this to you...!                                                     > I dont how will you react ????                    << Thank You Pradnya , Thank You So much , you just change this Mrunal From an agrresive , arrogant , impolite   to most patient and polite person and lovable person ....!                                                             >I Love U <My Panda .....!                  <<<< Thank You for Being in my life .... Thank You so Much... lots of love from me to you. You are my best no not best best friend urf bestiie Pradnya. >Aaani ho ek goshta ajun : छोटासा हृदय तु माझा chorlay <या वर नीट बघ तुझच नाव कोरलेय. <he flirt karna nhi sodnar mi ..!       <<<<By Mrunal Yewatkar";
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
