function sum_array(arr) {
  var number = arr[0];
  var tampung = 0;
  if(arr[0] > arr[1]){
    for(i = arr[1]; i<=arr[0]; i++){
      tampung += i;
    }
  }else{
    for(i = arr[0]; i<=arr[1]; i++){
      tampung += i;
    }
  }
  return tampung;
}


//driver code
console.log('Testing\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('[1,5]       | 15         | ', sum_array([1,5])
console.log('[1,100]     | 5050       | ', sum_array([1,100])
console.log('[5,1]       | 15         | ', sum_array([5,1])
console.log('[100,1]     | 5050       | ', sum_array([100,1])
