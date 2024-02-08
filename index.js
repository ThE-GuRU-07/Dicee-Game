var randomNumber1 = Math.floor((Math.random()*10));
var img_1;
var img_2;
if(randomNumber1 >= 0 && randomNumber1 <= 1.5){
    randomNumber1 = 1;
    img_1 = "images/dice1.png";
    console.log(randomNumber1);
}else if(randomNumber1 >= 1.6 && randomNumber1 <= 3.0){
    randomNumber1 = 2;
    console.log(randomNumber1);
    img_1 = "images/dice2.png";
}else if(randomNumber1 >= 3.1 && randomNumber1 <= 4.5){
    randomNumber1 = 3;
    img_1 = "images/dice3.png";
    console.log(randomNumber1);
}else if(randomNumber1 >= 4.6 && randomNumber1 <= 6.0){
    randomNumber1 = 4;
    img_1 = "images/dice4.png";
    console.log(randomNumber1);
}else if(randomNumber1 >= 6.1 && randomNumber1 <= 7.5){
    randomNumber1 = 4;
    img_1 = "images/dice5.png";
    console.log(randomNumber1);
}else{
    randomNumber1 = 6;
    img_1 = "images/dice6.png";
    console.log(randomNumber1);
}
var randomNumber2 = Math.floor((Math.random()*10));
if(randomNumber2 >= 0 &&randomNumber2 <= 1.5){
    randomNumber2 = 1;
    img_2 = "images/dice1.png";
    console.log(randomNumber2);
}else if(randomNumber2 >= 1.6 && randomNumber2 <= 3.0){
    randomNumber2 = 2;
    img_2 = "images/dice2.png";
    console.log(randomNumber2);
}else if(randomNumber2 >= 3.1 && randomNumber2 <= 4.5){
    randomNumber2= 3;
    img_2 = "images/dice3.png";
    console.log(randomNumber2);
}else if(randomNumber2 >= 4.6 && randomNumber2 <= 6.0){
    randomNumber2 = 4;
    img_2 = "images/dice4.png";
    console.log(randomNumber2);
}else if(randomNumber2 >= 6.1 && randomNumber2 <= 7.5){
    randomNumber2 = 5;
    img_2 = "images/dice5.png";
    console.log(randomNumber2);
}else{
    randomNumber2 = 6;
    img_2 = "images/dice6.png";
    console.log(randomNumber2);
}
document.querySelector(".img1").setAttribute("src" ,img_1);
document.querySelector(".img2").setAttribute("src" ,img_2);