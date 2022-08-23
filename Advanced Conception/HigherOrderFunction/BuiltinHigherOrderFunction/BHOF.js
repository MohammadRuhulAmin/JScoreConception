
/**
 * map() 
 * it just transforma an array 
 * 
 */

const array = [1,2,3,4,5];

/**
 * To Transform an array : 
 *  double = [2,4,6,8,10] 
 *  binary = [1,01,11....]
 *  etc... 
 */

const ans =  array.map((val)=>{
    return val*2;
})
console.log(ans)

const string_f = array.map((val)=>{
    return val.toString(2)
})
console.log(string_f)



/**
 *  filter function is use to filter the value of an array element 
 *  return array element which are greater than 5 
 */


const result = array.filter((val)=>{
    return val>4;
})
console.log(result)




/**
 * reduce() function works to reduce the array comming with a single value 
 * like find the max / min / sum etc 
 * 
 */

const sum = array.reduce((sum,val)=>{
    sum += val;
    return sum;
})
console.log("Total Sum : " + sum)

const max = array.reduce((max,val)=>{
    if(max<val)max = val;
    return max;
})
console.log("The maximum value : " + max);



/**
 * Examples of map function 
 */

const NameList = [
    {firstName:"Ruhul" , lastName:"Amin" , age:27},
    {firstName:"Sakib" , lastName:"Hasan",age :26},
    {firstName:"Sajid",lastName:"Hasan", age :25}
];

const FullName = NameList.map((object)=>{
    return object.firstName + " " + object.lastName;
});
console.log(FullName)

/**
 * Find the first Name of the employees whos' age is less than 30 
 * using only map & filter 
 */

// chain the filter & map method ... !
const names = NameList.filter((object)=>{
    return object.age <30 ;
}).map((object)=>object.firstName);
console.log(names);


/**
 * using reduce 
 */

