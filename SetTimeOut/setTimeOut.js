
function firstFunction(){
    for(let i = 0;i<5;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
}


function secondFunction(){
    for(var i = 0;i<5;i++){

        function closure(i){
            setTimeout(()=>{
                console.log(i);
            },i*1000)
        }
        closure(i);
    
    }
}

firstFunction()
secondFunction()
