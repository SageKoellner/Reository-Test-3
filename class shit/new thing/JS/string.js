//#region variables
var text;
var userChoice;
var error = 'wrong answer mx. employee, restarteru!';

//#endregion

//#region start
function start(){
    text = 'Pick your profession <br>(1)manual labor <br>(2)office worker';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            employee();
            break;
        case '2':
            break;
        default:
            alert(error);
            start();
            break;

    }
}

//#endregion

//#region class

//0
function employee(){
    text = '';
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
            alert(error);
            start();
            break;
}

//#endregion

//#region 1

//1
function cuss(){
    text = '';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            deaf();
            break;
        case '2':
            fired()
            break;
        default:
            alert(error);
            start();
            break;
    }
}

//1.1
function deaf(){
    text = 'he didnt hear you,,, you go back to work. you can escape anouther day';
    alert(text)
    start();
}

//1.2
function fired(){
    text = 'Your boss fires you on hearing such vulgar language. He comands that you leae t once, threatening to vall security. <br>what do you do? <br>(1)stay outa spite <br>(2)walk out';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            spite();
            break;
        case '2':
            walkOut()
            break;
        default:
            alert(error);
            start();
            break;
    }

}
/*
//1.2.1
function spite(){


}

//1.2.1.1
function fight(){


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

//#region 3

//3
function work(){
    alert('you go back to work, to escape anouther day')
    start();
}
*/

//#endregion