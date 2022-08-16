
function x(){
    var a = 7;
    function y(){
        //console.log(a);
        return a;
    }
    return y;
}

const val = x();
console.log(val());
