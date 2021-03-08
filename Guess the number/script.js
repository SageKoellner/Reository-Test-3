//random number
var randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber)

var pastGuesses = []

//start function
function myFunction(){
    var x, text;
    x = document.getElementById('DAVE').value;

//Player cant put letters or number abover/bellow 1-10 
    if(x >= 1 && x <= 20) {
        if( x == randomNumber){
            text = 'NICE WORK YOU LAZY BAG OF BONES!!! YOU DID IT!!!';
        }else{
            text = 'sorry bud, better luck next time :/' 
        };
    }else{
        text = "N-no! Bad!! Stop it!! 1 - 20 ONLY!! Grrrrr";
    };
    document.getElementById('JAMIE').innerHTML = text;

    pastGuesses.push(x);
    document.getElementById('numbersGuessed').innerHTML = pastGuesses;
}


