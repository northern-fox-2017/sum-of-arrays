function sum_array(arr) {
  //your code here
  let start = arr[0];
  let end = arr[1];

  if (start <= end) {
    if (start == end) {
      return start;
    } else {
      let result = start;
      return result + sum_array([start + 1, end])
    }
  } else {
    if (start == end) {
      return end;
    } else {
      let result = end;
      return result + sum_array([start, end + 1])
    }
  }
}

//driver code
console.log('Testing\n')
console.log('input  | expected | actual')
console.log('—————— |——————————|————————')
console.log('[1,5]  |   15     | ', sum_array([1,5]))
console.log('[1,100]| 5050     | ', sum_array([1,100]))
console.log('[5,1]  | 15       | ', sum_array([5,1]))
console.log('[100,1]| 5050     | ', sum_array([100,1]))
