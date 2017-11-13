function sum_array(arr) {
  sum = arr[0]+arr[1];
  arr.sort();
  for (var i = arr[0]+1; i < arr[1]; i++) {
    sum+=i;
  }
  return sum;
}


//driver code
console.log('Testing\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('[1,5]       | 15         | ', sum_array([1,5]))
console.log('[1,100]     | 5050       | ', sum_array([1,100]))
console.log('[5,1]       | 15         | ', sum_array([5,1]))
console.log('[100,1]     | 5050       | ', sum_array([100,1]))
