var arr = [1,2,3,4,5,6,7,8,9,10];
var s = 0;
  for(var i = 0; i<arr.length;i++){
s += arr[i];
    }


    var p = [];
    function range(start, end){
        for(var i = start; i<=end;i++){
    p.push(i);
        }
    return p;

      }
    console.log(range(1, 10));
