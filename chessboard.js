
function are(width,height){
  var num = '';
  for(var c = 0; c<width; c++){
    num+="# ";
    }
  for (var i = 0; i < height; i++) {
  if(i%2==0){
 console.log(num);
    }else{
        console.log(" "+num);
      }

}

  }

are(10,10);
