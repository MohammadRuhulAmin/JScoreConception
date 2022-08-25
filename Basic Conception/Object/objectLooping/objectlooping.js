/**
 * 
 * for (let variable in object) {
    // code to be executed
    }

 */

const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  let txt = "";
  for (let x in person) {
    txt += person[x];
  }


  /**
   * Nested object looping
   * 
   */

   let x = "";
   const myObj = {
     name: "John",
     age: 30,
     cars: [
       {name:"Ford", models:[ "Focus", "Mustang"]},
       {name:"BMW", models:["320", "X3", "X5"]},
       {name:"Fiat", models:["500", "Panda"]}
     ]
   }
   
   for (let i in myObj.cars) {
     x += "<h2>" + myObj.cars[i].name + "</h2>";
     for (let j in myObj.cars[i].models) {
       x += myObj.cars[i].models[j] + "<br>";
     }
   }
   console.log(x)