/*let name="Divya";
var age=19;
const height="5.2";
console.log(name);
console.log(age);
console.log(age+5);
console.log(age-3);
console.log(age*2);
console.log(age/2);
console.log(age%4);
age+=3;
console.log(age);
age-=2;
console.log(age);
age*=2;
console.log(age);
age/=2;
console.log(age);
age%=4;
console.log(age);
age++;
console.log(age);
age--;
console.log(age);
let age1=25;
console.log(age>age1);
console.log(age<age1);
console.log(age>=age1);
console.log(age<=age1);
console.log(age==age1);
console.log(age!=age1);*/

/*let break_fast="dosa";
let food1="puri";
let food2="Pasta";

if(food1==break_fast)
{
    console.log("I love Puri and I want to eat it.");
}else if(food2==break_fast)
{
    console.log("I love Pasta and I want to eat it.");
}*/
/*t cash = 4700;

let thousands = (cash - cash % 1000) / 1000;
let hundreds = (cash % 1000) / 100;

console.log("1000 notes = " + thousands);
console.log("100 notes = " + hundreds);
 
function cook()
{
  console.log("pour the flour into the bowl");
  console.log("add the sugar and salt");
  console.log("add the water and mix well");
  console.log("pour the batter into the pan");
  console.log("cook until golden brown");    
}
cook(); 
function num(n)
{
    if(n>10  0){
        return;
    }
    console.log(n);
    n+=1
    num(n);
}   
num(1);
let chocolates=["melodi","fivestar","kitkat","kachamango","alphenlebe","darkchocolate"];
let sales={
    siddikha:chocolates[0],
    dinesh:chocolates[1],
    sam:chocolates[2],
    henaa:chocolates[3],
    denial:chocolates[4],
    sana:chocolates[5]
}
console.log(sales)*/
function guess(n) {
    let userGuess = Number(prompt("Enter a number between 1 and 5:"));

    if (userGuess === n) {
        console.log("Congratulations! You guessed the number.");
    } 
    else if (userGuess < n) {
        console.log("Too Low! Try Again.");
        guess(n);
    } 
    else {
        console.log("Too High! Try Again.");
        guess(n);
    }
}

let number = Math.floor(Math.random() * 5) + 1;

console.log("Random Number:", number); // For testing
guess(number);
