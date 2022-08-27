
/**
 * A javascript Promise object can be 
 * 1) Pending 
 * 2)Fulfilled
 * 3)Rejected
 * 
 */


const promise_1 = new Promise((resolve,reject)=>{
    const isSuccess = false;
    if(isSuccess){
        resolve("The result is Successful !");
    }else{
        reject("Unsuccessful Guy!");
    }
})

promise_1.then((resolve)=>{
    console.log(resolve)
})
.catch((error)=>{
    console.log(reject)
})


const promise_2 = new Promise((resolve,reject)=>{
    const isWorkDone = true;
    if(isWorkDone){
        resolve("The working process is done")
    }else{
        reject("The Working process is incomplete")
    }
})

Promise.all([promise_1,promise_2]). 
    then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        console.log(error)
    })


