

const person = {
    firstName : "Ruhul",
    lastName : "Amin",
    id : 4451,
    fullName:function(){
        return this.firstName + " " + this.lastName; 
    }
}


// console.log(person.fullName());

// JavaScript objects cannot be compared.


// objects value can be compared ! 
function checkObject(){
    let obj_1 = {
        name:"Ruhul"
    }
    let obj_2 = {
        name: "Ruhul"
    }
    if(obj_1 === obj_2)console.log("Objects  matches !!");
    else {
        console.log("Objects cannot be compared !");
    }
}
checkObject();