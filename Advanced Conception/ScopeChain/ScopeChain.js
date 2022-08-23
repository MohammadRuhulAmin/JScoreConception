
var val = 120;
a();
function a(){
    b();
    function b(){
        c();
        function c(){
            d();
            function d(){
                console.log(val);
            }
            
        }
    }
}
