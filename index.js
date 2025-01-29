let age
const myResult = document.getElementById("result")
let myText = document.getElementById("userAge")
const mySubmit = document.getElementById("button")
mySubmit.onclick = function ageCheck(){
    age = myText.value;
    age = Number(age)
    if(age<0){
        return document.getElementById("result").textContent = "There is no way you are that young."
    } else if (age == 0){
        return document.getElementById("result").textContent = "Welcome to the world little one!!"
    } else if (age <= 10){
        return document.getElementById("result").textContent = "It's friday! Friday! Gotta get down on friday!"
    } else if(age >= 21){
        return document.getElementById("result").textContent = "Shots shots shots shots shots shots \nShots shots shots shots shots \nShots shots shots shots shots \nEverybody!!"
    } else if(age > 100){
        return document.getElementById("result").textContent = "THE BRITISH ARE COMING!!!!"
    } else {
        return document.getElementById("result").textContent = "Hi, their"
    }

}



