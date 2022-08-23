

const person = {
    firstName : "Ruhul",
    lastName : "Amin",
    id : 4451,
    fullName:function(){
        return this.firstName + " " + this.lastName; 
    }
}


console.log(person.fullName());