function sum_array(arr) {
  let array = arr.sort();
  // console.log('======== ',array);
  let result = 0;
  for(let i = array[0]; i <= array[1]; i++){
    result += i
  }
  return result
}

//driver code
console.log('Testing\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('[1,5]       | 15         | ', sum_array([1,5]))
console.log('[1,100]     | 5050       | ', sum_array([1,100]))
console.log('[5,1]       | 15         | ', sum_array([5,1]))
console.log('[100,1]     | 5050       | ', sum_array([100,1]))


function sum_array(arr) {
  let result = arr[0]
  if(arr[0] >= arr[1]){
    if(arr[0] == arr[1]){
      return arr[0]
    }
    else{
      return result + sum_array([arr[0] -1, 1])
    }
  }
  // console.log(arr);
  if(arr[1] >= arr[0]){
    if(arr[1] == arr[0]){
      return arr[1]
    }else{
      return arr[1]+ sum_array([1, arr[1]-1])
    }
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




































//
