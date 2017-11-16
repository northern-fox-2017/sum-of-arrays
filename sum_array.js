function sum_array(arr) {
  //your code here
  var tampung = 0;
  var arr1 = Number(arr[0]);
  var arr2 = Number(arr[1]);
  if(arr1 < arr2){
    for(var i=arr1+1; i<arr2; i++){
      tampung += i;
    }
  }else if(arr1 > arr2){
    for(var j=arr2+1; j<arr1; j++){
      tampung += j;
    }
  }
  return arr1 + tampung + arr2;
}


//driver code
console.log('Testing\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('[1,5]       | 15         | ', sum_array([1,5]))
console.log('[1,100]     | 5050       | ', sum_array([1,100]))
console.log('[5,1]       | 15         | ', sum_array([5,1]))
console.log('[100,1]     | 5050       | ', sum_array([100,1]))
