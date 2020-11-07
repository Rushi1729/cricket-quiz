var questions = [
    {
        que: "How many balls or deliveries are bowled in one over?",
        option1: "4", option2: "5",
        option3: "6", option4: "10", ans: 3
    },
    {
        que: "Which one of these is not a way you can be out in cricket?",
        option1: "obstructing the field", option2: "hit wicket",
        option3: "LBW", option4: "1 tip 1 hand", ans: 4
    },
    {
        que: "On what surface is cricket traditionally played?",
        option1: "turf", option2: "grass", option3: "roof",
        option4: "cement", ans: 2
    },
    {
        que: "Which two countries compete for cricket's \"Ashes\"?",
        option1: "Ind and Pak", option2: "brazil and argentina",
        option3: "Eng and Aus", option4: "Ind and Eng", ans: 3
    },
    {
        que: "If a batsman is out on the very first ball he faced, what is it called?",
        option1: "duck", option2: "golden duck",
        option3: "silver duck", option4: "none", ans: 2
    },
    {
        que: "What does the term \"LBW\" stand for in cricket?",
        option1: "leg before wicket", option2: "leg bye wicket",
        option3: "leg bye wide", option4: "none ", ans: 1
    },
    {
        que: "Which of these is not a fielding position in cricket",
        option1: "third man", option2: "mid wicket",
        option3: "gully", option4: "centre back", ans: 4
    },
    {
        que: "what is the name given to the two people who officiate in a cricket match?",
        option1: "refree", option2: "umpire", option3: "pundit",
        option4: "none of the above", ans: 2
    },
    {

        que: "Which colour of cricket ball has not been used in an official cricket match?",
        option1: "red", option2: "green", option3: "white",
        option4: "pink", ans: 2
    },

    {
        que: "who is the most successful captain in international cricket?",
        option1: "dhoni", option2: "ponting", option3: "imran khan",
        option4: "irfan pathan", ans: 4
    }

]
var zh = -1;
var a = 0;
var score = 0;
var k = 0;
var Ans = 0;
var score = 0;
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}
var zak = [];
for(var j=0;j<questions.length;j++)
{
    zak.push(j);
}
var ranNums = shuffle(zak);
function startfunction() {
    if (zh == -1) {
        zh = 0;
        a = ranNums[zh];
    }
    k = 1;
    zfunction();
}
var user = [];
function opt1function() {
    if (zh != -1 && k == 1) {
        Ans = 1;k=0;confirmfunction();
    }
}
function opt2function() {
    if (zh != -1 && k == 1) {
        Ans = 2;k=0;confirmfunction();
    }
}
function opt3function() {
    if (zh != -1 && k == 1) {
        Ans = 3;k=0;confirmfunction();
    }
}
function opt4function() {
    if (zh != -1 && k == 1) {
        Ans = 4;k=0;confirmfunction();
    }
}
function confirmfunction(){
    if(zh!=-1)
    {
        k = 0;
        user.push(Ans);
        if(Ans==questions[a].ans)
        {
            var ks = document.getElementById("opt"+Ans);
            ks.style.backgroundColor = "green";
            score++;
        }
       else 
       {
            var ks = document.getElementById("opt"+Ans);
            ks.style.backgroundColor = "red";
            var ks = document.getElementById("opt"+questions[a].ans);
            ks.style.backgroundColor = "green";
       }
    }
}
function nextfunction() {
    for(var i=1;i<=4;i++)
    {
        var z1 = document.getElementById("opt"+i);
        z1.style.backgroundColor = "aqua";
    }
    if(zh!=-1)
    {
        k++;
        zh++;
        if(k==1)
        {
            if(zh<=questions.length-1)
            {

                a = ranNums[zh];
                zfunction();
                if(zh==questions.length-1)
                {
                    var sk = document.getElementById("next");
                    sk.textContent = "SUBMIT";
                }
            }
            else
            {
                alert("your score is " + score);
                zh = -1;
                window.location.reload();
            }
        }
        else
        {
            a = ranNums[zh];
            zfunction();
            dashfunction();
        }
    }
}
function previousfunction()
{
    
    if(zh>0)
    {
        k--;
        for(var i=1;i<=4;i++)
        {
            var z1 = document.getElementById("opt"+i);
            z1.style.backgroundColor = "aqua";
        }
        zh--;
        a = ranNums[zh];
        zfunction();
        dashfunction();
    }
}
function zfunction()
{
    var z = document.getElementById("quest");
    z.textContent = questions[a].que;
    var z = document.getElementById("opt1");
    z.textContent = questions[a].option1;
    var z = document.getElementById("opt2");
    z.textContent = questions[a].option2;
    var z = document.getElementById("opt3");
    z.textContent = questions[a].option3;
    var z = document.getElementById("opt4");
    z.textContent = questions[a].option4;
}
function dashfunction()
{
    var kp = questions[a].ans;
    var mz = user[zh];
    if(kp==mz)
    {
        var kz = document.getElementById("opt"+kp);
        kz.style.backgroundColor = "green";
    }
    else
    {
        var kz = document.getElementById("opt"+mz);
        kz.style.backgroundColor = "red";
        var ky = document.getElementById("opt"+questions[a].ans);
        ky.style.backgroundColor = "green";
    }
}

/*var mm = 9,ss = 9,ms = 9;
function clockfunction()
{
    if(zh>=0)
    {
        var z = document.getElementById("clock");
        z.textContent = mm + ":" + ss + ":"+ ms;
        ms++;
        if(ms==60)
        {
            ss++;ms=0;
            if(ss==60)
            {
                mm++; ss = 0;ms = 0;
            }
        }
    }
}
setInterval(clockfunction(), 10);
*/




