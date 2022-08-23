
const userInfo = {
    name : "Ruhul Amin",
    age : 27
};

function ageValidator(userInfo){
    let finalMsg = "";
    try{
        if(userInfo.age <=10)throw "Kid";
        else if(userInfo.age <=19 && userInfo.age>10) throw "Teen";
        else if(userInfo.age >19 && userInfo.age<=30) throw "Adult";
    }
    catch(error){
        finalMsg = error
    }
    finally{
        console.log(finalMsg)
    }
}
ageValidator(userInfo);