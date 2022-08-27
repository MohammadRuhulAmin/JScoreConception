
// Ex : 1

function myInfo(info){

    console.log(info)

}


function detailsInfo(name,email,contact,callback){
    this.name = name;
    this.email = email;
    this.contact = contact;
    const inf = {
        name,email,contact
    };
    callback(inf)
}


detailsInfo("Ruhul","r@g.com","01322",myInfo);



//Ex : 2 

function printResult(sum){
    console.log(sum)
}

function summation(a,b,c,callback){
    let sum = a+b+c;
    callback(sum)
}

summation(12,11,22,printResult)


