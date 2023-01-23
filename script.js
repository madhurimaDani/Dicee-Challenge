function diceRoll(){
    var d1 = Math.ceil(Math.random()*6);
    var d2 = Math.ceil(Math.random()*6);
    var result;

    if(d1 == d2){
        result = "Its a tie between Player 1 and Player 2!"
    }else{
        result = (d1 > d2)?"Player 1 Won": "Player 2 Won";
    }

    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+d1+".png");
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+d2+".png");

    document.querySelector("h1").innerText = result;

}