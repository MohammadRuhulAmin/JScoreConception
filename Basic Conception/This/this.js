/**
 * Reference : 
 * https://www.youtube.com/watch?v=75W8UPQ5l7k&ab_channel=AkshaySaini
 */

 /**
  * More on 
  * https://betterprogramming.pub/when-to-use-bind-call-and-apply-in-javascript-1ae9d7fa66d5
  */

const Info = {
    firstName : "Ruhul",
    lastName : "Amin",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(Info.fullName());


const Object = {
    firstName : "Aynun",
    lastName : "Jariya",
    allInfo : function(){
        return this.firstName;
        //return this => return the object 
    }
}
console.log(Object.allInfo());

const name_1 = {
    firstName:"Ruhul",
    lastName : "Amin",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const name_2 = {
    firstName : "Sakib",
    lastName : "Hasan"
}

/**
 * call method takes an argument as object and it use another objects function to print 
 * 
 */
const sName = name_1.fullName.call(name_2);
console.log("Using call Method : ");
console.log(sName);

const Details = {
    name : "Ruhul amin",
    email : "ruhul@gmail.com",
}
function PrintAllInfo(){
    return this.name + " " + this.email;
}

let fullInfo = PrintAllInfo.call(Details);
console.log(fullInfo)

function AddressInfo(homeTown,District){
    return this.fullName + "\n" + this.country + "\n" + homeTown + "\n" +
    District; 
}

const addressInf = {
    fullName :"Ruhul Amin",
    country:"Bangladesh"
};

 /**
 * call method takes argument with coma separated
 */

let detailsAddess = AddressInfo.call(addressInf,"Dhaka","Rajshahi")
console.log(detailsAddess)
console.log("Using Bind Method : ");
/**
 * Bind method is like an array 
 * it take an array as an argument 
 */
let detalsAddress_2 = AddressInfo.apply(addressInf,["Dhaka","Rajshahi"]);
console.log(detalsAddress_2)

/**
 * bind method is none but call function it just make it as function
 */

console.log("Using Bind Method : ")
let detalsAddress_3 = AddressInfo.bind(addressInf,"Rajshahi","Dhaka")
console.log(detalsAddress_3())


const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  person1.fullName.call(person2);