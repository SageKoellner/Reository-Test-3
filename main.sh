#!/bin/bash

#where do you wanna search
search () {
  echo 'Where would you like to look?'
  echo '(1)Around town'
  echo '(2)look in the cave' 
  echo '(3)look in the woods'
  read choice
  if [ $choice -eq 1 ]
  then
    echo 'you look around town'
  elif [ $choice -eq 2 ]
  then
    echo'you walk over to the cave'
  elif [ $choice -eq 3 ]
  then
    echo 'you walk into the woods aimlessly'
  else
    echo 'please pick a valid choice, no letters'
  fi
  clear
}

#you wake up
wake () {
  echo 'goodmornng,', name, 'you wake up and your brother is gone with a note saying he was kidnapped,, do you wish to go on a quest?'
  echo '(1)yes'
  echo '(2)no'
  read choice
  if [ $choice -eq 1 ] 
  then
    echo 'Quest it is, be safe, have fun, dont die! Best of luck'
  elif [ $choice -eq 2]
  then
    echo 'Safe choice! your brother never came home but  you were safe,, good job!'
  else
    echo 'please pick a valid choice, no letters'
  fi
  clear
  search
}
#story ^^^

#start commands vvv
# ask class
pickClass () {
  echo 'hello' $name 'please pick your class' 
  echo '(1)Archer: Average Stats all around' 
  echo '(2)Fighter: heightened HP, lowered Atk' 
  echo '(3)Rogue: hightened atk, lowered HP'
  read choice
  clear

  if [ $choice -eq 1 ]
  then
    echo 'you chose number 1, archer'

  elif [ $choice -eq 2 ]
  then
    echo 'you chose number 2, fighter'

  elif [ $choice7 -eq 3 ]
  then
    echo 'you chose number 3, rogue'
  else
    echo 'please pick a valid choice, no letters'
  fi
  clear
  wake
}

# ask name
pickName () {
  echo 'please enter name!'
  read name
  echo 'welcome' $name'!'
  clear
  pickClass
}

#start
echo 'press any button to continue'
read startVariable
clear

echo 'welcome to the game, please enjoy!'
pickName
