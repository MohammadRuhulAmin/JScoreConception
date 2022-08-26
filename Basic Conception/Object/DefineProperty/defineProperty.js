

const person = {
    name : "Ruhul Amin"
};

Object.defineProperty(person,"presentAddress",{
    value:"Dhaka , Rayer Bazar",
    writable : true // if it is false presentAddress cannot be rewrite ..  
});
person.presentAddress = "xx";
console.log(person.presentAddress)


const Biodata = {
    fName:"Ruhul",
    lName:"Amin",
    fullName : function (){
        return this.fName+ this.lName;
    }
};
Object.defineProperty(Biodata,"allInfo",{
    value:Biodata.fullName
})

console.log(Biodata.allInfo())



const PersonalInfo = {
    _id:1,
    name:"Ruhul",
    email: "ruhul@gmail.com",
    contact : "01322362864",
    
}

Object.defineProperty(PersonalInfo,'id',{
    set : function(id){
        this._id = id;
    }, 
    get:function(){
        return this._id;
    }
})
PersonalInfo.id = 12;
console.log(PersonalInfo.id)
