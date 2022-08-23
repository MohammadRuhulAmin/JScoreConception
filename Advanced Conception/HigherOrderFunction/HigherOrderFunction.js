const radius = [1,2,3,4]


// call back function
const area = function(rad){
    return Math.PI * rad * rad;
}
// call back function
const diameter = function(rad){
    return rad*2;
}
// callback function 
const square = function(rad){
    return rad*rad;
}
const areaRes = [];
// higher order function 
const calculateArea = function(radius,logic){
    for(let i = 0;i<radius.length;i++){
        areaRes.push(logic(radius[i]))
    }
}

//=====================================
console.log("Area of a Circle : ")
calculateArea(radius,area)
console.log(areaRes)
console.log("Diameter of a Circle : ")
calculateArea(radius,diameter)
console.log(areaRes)
console.log("Square  : ")
calculateArea(radius,square)
console.log(areaRes)



// map is a higher order function 
console.log("Using Map : \n")
console.log(radius.map(area))
console.log(radius.map(diameter))



// to access custome higher order function like map() function : we have to add Array.prototype.Function_name 


Array.prototype.HigherOrderFunction = function(callback){
    const res = [];
    for(let i = 0;i<this.length;i++){
        res.push(callback(this[i]));
    }
    return res;
}


console.log("Using . key : ")
console.log(radius.HigherOrderFunction(area));
