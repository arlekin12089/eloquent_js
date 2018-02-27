
function countBs(str){
  var sum_B = 0;
  for(var i = 0; i< str.length; i++){
    if(str.charAt(i)==="B"){
      sum_B++;
      }
    }
    return sum_B;
  }
  countBs("BlycmoBBblceBBBswB");

  function countChar(str, symbol){
  var sum_B = 0;
  for(var i = 0; i< str.length; i++){
    if(str.charAt(i)===symbol){
      sum_B++;
      }
    }
    return sum_B;
  }
countChar("BlycmoBBblceBBBswB","u");
