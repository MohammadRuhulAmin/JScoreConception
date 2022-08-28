
const taskone = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task One Completed");

    })
}

const taskTwo = ()=>{
    const isTaskOneDone = true;
    return new Promise((resolve,reject)=>{
        if(isTaskOneDone){
            resolve("Task Two is Completed");
        }else{
            reject("Task Two is not Completed");
        }
    })
}

const taskThree = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task Three is Done")
    })
}


taskone()
    .then((resolve)=>{
        console.log(resolve)
    })
    .catch((error)=>{
        console.log(error)
    })
    .then((taskTwo))
    .then((resolve)=>{
        console.log(resolve)
    })
    .catch((error)=>{
        console.log(error)
    })
    .then((taskThree))
    .then((resolve)=>{
        console.log(resolve)
    })
    .catch((error)=>{
        console.log(error)
    })