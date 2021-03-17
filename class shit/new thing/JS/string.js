//#region variables
var text;
var userChoice;
var win;
var error = 'wrong answer mx. employee, restarteru!';


//#endregion

//#region start
function start(){
    text = 'Pick your profession \n(1)manual labor \r(2)office worker';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            employee();
            break;
        case '2':
            employee();
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
    
}

//#endregion

//#region class

//0
function employee(){
    text = 'your in the middle of working when your boss pulls you aside and gives you more work. \rTired of not only his shit, but all of Capitalism you: \r(1)Cuss out your boss \r(2)Walk out \r(3)Get back to work, putting aside your anger.';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            cuss();
            break;
        case '2':
            walkOut()
            break;
        case '3':
            work()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}

//#endregion

//#region 1

//1
function cuss(){
    text = 'you cuss out your boss, how loud do you speak? (1)quietly (2)loudly';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            deaf();
            break;
        case '2':
            fired()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}

//1.1
function deaf(){
    text = 'he didnt hear you,,, you go back to work. you can escape anouther day';
    alert(text)
}

//1.2
function fired(){
    text = 'Your boss fires you, on hearing such vulgar language. He comands that you leae t once, threatening to vall security. <br>what do you do? <br>(1)stay outa spite <br>(2)walk out';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            spite();
            break;
        case '2':
            walkOut()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}



//1.2.1
function spite(){
    text = 'you stayed out of spite for him,, he called security. \rWhat will you do? \r(1)fight security \r(2)cooperate?';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            fight();
            break;
        case '2':
            cooperate()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }

}

//1.2.1.1
function fight(){
    text = 'You attempted to fight the security guard,,, sadly  today is not the day to awaken your inner fighting spirit. you lost,, horribly,,, youre now bleeding out on the floor.'
    win = 'Good job you have found the Police Brutality ending, you escaped this capitalistic world, good luck on your journey after death. congrats!!!';
    alert(text);
    alert(win);
}

//1.2.1.2
function cooperate(){


}

//1.2.1.1.1
function Brutality(){


}

//#endregion

//#region 2



//2
function walkOut(){


}

//2.1
function newJob(){


}

//2.2
function drive(){


}

//2.2.1
function study(){


}

//2.2.2
function leave(){


}

//2.2.1.1
function spidereman(){


}

//2.2.2.1
function buss(){


}

//2.2.2.2
function car(){


}

//2.2.2.1.1
function kissBuss(){


}

//2.2.2.2.1
function music(){


}

//2.2.2.2.1.1
function no(){


}

//2.2.2.2.1.2
function yes(){


}

//2.2.2.2.1.2
function wreck(){


}

//2.2.2.2.1.1.1
function bossPancake(){


}

//#endregion

//3
function work(){
    alert('you go back to work, to escape anouther day');
    start();
}

