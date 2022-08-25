

const person = {
    firstName : "Ruhul",
    lastName : "Amin",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}
const person_1 = {
    firstName:"Ruhul",
    lastName : "Amin"
}
const ruhul = person.fullName.apply(person_1)

