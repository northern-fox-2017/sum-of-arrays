function sum_array(arr) {
var res = 0;
  if(arr[1] > arr[0]){
    for (var i = 0; i < arr[1]; i++) {
      res += i;
    }
    return res + arr[1];
  } else {
    for (var i = 0; i < arr[0]; i++) {
      res += i;
    }
    return res + arr[0];
  }
}


//driver code
console.log('Testing\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('[1,5]       | 15         | ', sum_array([1,5]))
console.log('[1,100]     | 5050       | ', sum_array([1,100]))
console.log('[5,1]       | 15         | ', sum_array([5,1]))
console.log('[100,1]     | 5050       | ', sum_array([100,1]))
