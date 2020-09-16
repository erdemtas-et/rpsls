function randomGenerator(){
    rnd1 = Math.floor((Math.random()*5) +1);
    rnd2 = Math.floor((Math.random()*5) +1);
}

function pathGenerator(){
    randomGenerator();
    path1 = "images/img"+rnd1+".png";
    path2 = "images/img"+rnd2+".png";
}

function p1Wins(){document.getElementsByClassName("h1")[0].innerHTML = "Player 1 Wins!";}
function p2Wins(){document.getElementsByClassName("h1")[0].innerHTML = "Player 2 Wins!";}
function tryAgain(){document.getElementsByClassName("h1")[0].innerHTML = "Try Again!";}


document.getElementById("button").addEventListener("click",function(){
randomGenerator();
    pathGenerator();



   


    if(rnd1===1){
        if(rnd2===1){
            tryAgain();
            document.getElementsByTagName("h2")[0].innerHTML = "Lizard";
            document.getElementsByTagName("h2")[1].innerHTML = "Lizard";
        }
        else if(rnd2===2){
           p1Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Lizard";
            document.getElementsByTagName("h2")[1].innerHTML = "Paper";
        }
        else if(rnd2===3){
            p2Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Lizard";
            document.getElementsByTagName("h2")[1].innerHTML = "Rock";
        }

        else if(rnd2===4){
            p1Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Lizard";
            document.getElementsByTagName("h2")[1].innerHTML = "Scissors";
        }

        else if(rnd===5){
            p1Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Lizard";
            document.getElementsByTagName("h2")[1].innerHTML = "Spock";
        }

    }
    
    
    if(rnd1===2){
        if(rnd2===1){
            p2Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Paper";
            document.getElementsByTagName("h2")[1].innerHTML = "Lizard";
        }
        else if(rnd2===2){
            tryAgain();
            document.getElementsByTagName("h2")[0].innerHTML = "Paper";
            document.getElementsByTagName("h2")[1].innerHTML = "Paper";
        }
        else if(rnd2===3){
            p1Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Paper";
            document.getElementsByTagName("h2")[1].innerHTML = "Rock";
        }

        else if(rnd2===4){
            p2Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Paper";
            document.getElementsByTagName("h2")[1].innerHTML = "Scissors";
        }

        else if(rnd===5){
            p1Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Paper";
            document.getElementsByTagName("h2")[1].innerHTML = "Spock";
        }

    }


    if(rnd1===3){
        if(rnd2===1){
           p1Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Rock";
            document.getElementsByTagName("h2")[1].innerHTML = "Lizard";
        }
        else if(rnd2===2){
            p2Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Rock";
            document.getElementsByTagName("h2")[1].innerHTML = "Paper";
        }
        else if(rnd2===3){
            tryAgain();
            document.getElementsByTagName("h2")[0].innerHTML = "Rock";
            document.getElementsByTagName("h2")[1].innerHTML = "Rock";
        }

        else if(rnd2===4){
            p1Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Rock";
            document.getElementsByTagName("h2")[1].innerHTML = "Scissors";
        }

        else if(rnd===5){
            p2Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Rock";
            document.getElementsByTagName("h2")[1].innerHTML = "Spock";
        }

    }

    
    if(rnd1===4){
        if(rnd2===1){
            p1Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Scissors";
            document.getElementsByTagName("h2")[1].innerHTML = "Lizard";
        }
        else if(rnd2===2){
            p1Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Scissors";
            document.getElementsByTagName("h2")[1].innerHTML = "Paper";
        }
        else if(rnd2===3){
            p2Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Scissors";
            document.getElementsByTagName("h2")[1].innerHTML = "Rock";
        }

        else if(rnd2===4){
            tryAgain();
            document.getElementsByTagName("h2")[0].innerHTML = "Scissors";
            document.getElementsByTagName("h2")[1].innerHTML = "Scissors";
        }

        else if(rnd===5){
            p2Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Scissors";
            document.getElementsByTagName("h2")[1].innerHTML = "Spock";
        }

    }

    if(rnd1===5){
        if(rnd2===1){
            p2Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Spock";
            document.getElementsByTagName("h2")[1].innerHTML = "Lizard";
        }
        else if(rnd2===2){
            p2Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Spock";
            document.getElementsByTagName("h2")[1].innerHTML = "Paper";
        }
        else if(rnd2===3){
            p2Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Spock";
            document.getElementsByTagName("h2")[1].innerHTML = "Rock";
        }

        else if(rnd2===4){
            p1Wins();
            document.getElementsByTagName("h2")[0].innerHTML = "Spock";
            document.getElementsByTagName("h2")[1].innerHTML = "Scissors";
        }

        else if(rnd===5){
            tryAgain();
            document.getElementsByTagName("h2")[0].innerHTML = "Spock";
            document.getElementsByTagName("h2")[1].innerHTML = "Spock";
        }

    }
    
    document.getElementById("image1").setAttribute("src",path1);
    document.getElementById("image2").setAttribute("src",path2);
    document.getElementById("button").innerHTML = "Roll Again!"
    
})