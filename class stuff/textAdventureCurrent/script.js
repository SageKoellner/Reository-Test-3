var name, riddleOneUser, riddleTwoUser;
var event = ['start', 'class', 'wake', 'yesQuest', 'noQuest', 'wood', 'cave', 'village', 'drunkard', 'preist', 'pitFall', 'trollRiddleOne', 'trollRiddleTwo', 'splitTwo', 'snake', 'caveIn', 'freedom']	//div ids

function submit(x, y) {
    name = document.getElementById('name').value; //gets user input for name value
    riddleOneUser = document.getElementById('riddleOneUser').value; //gets user input for riddle One 
    riddleTwoUser = document.getElementById('riddleTwoUser').value; //gets user input for riddle Two 
    if (x == 0 && name !== '') { //if div id equals start and name input is filled out, continue 
        main(x, y);
        document.getElementById('nameOutput').innerHTML = name; //replaces span with id nameOuput with the inputed name 
    } else if (riddleOneUser.toLowerCase() == 'two') { //if div id is trollRiddleTwo and user input equals two, call main
        main(x, y);
    } else if (x == 12 && riddleTwoUser.toLowerCase == 'egg') { //if div id is trollRiddleTwo and user input equals egg,call main
        main(x, y);
    } else { //if answers are all wrong, hide current page and go back to start div, restarting the game
        main(x, 0);
    }
}

function main(x, y) { //hides and shows different div tags
    var x = document.getElementById(event[x]); //uses x to get div id from the array 'events'
    x.style.display = "none"; //uses css to hide selected div by id

    var y = document.getElementById(event[y]);  //uses y to get div id from the array 'events'
    y.style.display = "block"; //uses css to show selected div by id
}