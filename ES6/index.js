// jshint esnext : true

let score = 90;

let wrath = "angry"


let myobj = { 
  user  : 'jhon',
  score :  200,
  angry : 99,
  highscore  (){
  console.log('highscore is :' + this.score + 'and angry level is :' + this.angry)
  } 
};

console.log(myobj.score)
myobj.highscore()
console.log(myobj.angry)