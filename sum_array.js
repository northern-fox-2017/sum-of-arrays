function sum_array(arr) {
  //your code here
  if(arr[0]===arr[1]){
    return arr[0];
  }else{
    arr.sort();
    return arr[1] + sum_array([arr[0],(arr[1]-1)])
  }
}


//driver code
// console.log('Testing\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('[1,5]       | 15         | ', sum_array([1,5]))
console.log('[1,100]     | 5050       | ', sum_array([1,100]))
console.log('[5,1]       | 15         | ', sum_array([5,1]))
console.log('[100,1]     | 5050       | ', sum_array([100,1]))