let num=require("readline-sync")
var computermove=["rock","paper","secissor"]
var movesofcomputer=computermove[Math.floor(Math.random()*computermove.length)]
console.log(movesofcomputer)
var plyarname=num.question("enter your name:-->")
console.log("HII",plyarname,"welcome to the Game(:")
console.log("---------------------")
var plyarchoice=num.question("____choose your move rock,paper,secissor____")
if (plyarchoice==movesofcomputer){
    console.log("Game Draw!")
}else if (plyarchoice=="rock" && movesofcomputer=="secissor"){
    console.log("you win!!")
}else if (plyarchoice=="paper" && movesofcomputer=="rock"){
    console.log("you win!!")
}else if (plyarchoice=="secissor" && movesofcomputer=="paper"){
    console.log("you win!!")
}else if (plyarchoice=="rock" && movesofcomputer=="paper"){
    console.log("you loss!!")
}else if (plyarchoice=="paper" && movesofcomputer=="secissor"){
    console.log("you loss!!")
}else if (plyarchoice=="secissor" && movesofcomputer=="rock"){
    console.log("you loss!!")
}else{
    console.log("Nice played!!")
}
