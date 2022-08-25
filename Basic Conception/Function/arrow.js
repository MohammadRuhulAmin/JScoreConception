

const addition = (x,y)=>{
    console.log(arguments)
    return x+y;
}

addition();

function Car(firstName , lastName){
    this.brandFName = firstName;
    this.brandLName = lastName;
    this.fullName = this.brandFName + " " + this.brandLName;
}

const carFName = new Car("Maruti", "Shuzuki")
console.log(carFName.fullName)




const userInfo = {
    name : "Ruhul Amin",
    email : "alfa@gmail.com",
    detail_1: ()=>{
        return this.name + " " + this.email;
    },
    detail_2 : function(){
        return this.name + " " + this.email;
    }
}


const detailInfo_1 = userInfo.detail_1;
const detailInfo_2 = userInfo.detail_2;
console.log(detailInfo_1())
console.log(detailInfo_2())

