function reverseArray(arr){
  return arr.reverse();
  }
  console.log(reverseArray(["A", "B", "C"]));


  var arrayValue = [1, 2, 3, 4, 5,9,78];
  function reverseArrayInPlace(arrayValue) {
    for(var i=0; i<Math.floor(arrayValue.length/2);i++){
      var currentvalue=arrayValue[i];
arrayValue[i]=arrayValue[arrayValue.length-1-i];
arrayValue[arrayValue.length-1-i]=currentvalue;
    }
    return arrayValue;
    }
reverseArrayInPlace(arrayValue);

console.log(arrayValue);
