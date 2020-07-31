function play()
{
    var a = Math.floor(Math.random()*6)+1;
    var b = Math.floor(Math.random()*6)+1;
    if(a>b)
    {
        document.getElementById("WinnerText").innerHTML = "Player 1 Wins!";
    }
    else if(a==b)
    {
        document.getElementById("WinnerText").innerHTML = "Match Draw!";
    }
    else
    {
        document.getElementById("WinnerText").innerHTML = "Player 2 Wins!";
    }
    var player1 = document.getElementById('player1');
    var player2 = document.getElementById('player2');
    player1.setAttribute('src','images/dice'+ a +'.png');
    player2.setAttribute('src','images/dice'+ b +'.png');
}