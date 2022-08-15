function a(){

    console.log(b)
    /**
     *it will print 10 
     * 
     */
}
var b = 10;

a();
function a(){
    b();
    function b(){
        console.log(b)
        /**
         * It will print 10 also 
         */
    }
}


function a(){
    var x = 122;
}
console.log(x)

/**
 * It will print not defined 
 * 
 */


