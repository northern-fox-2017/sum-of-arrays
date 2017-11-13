function sum_array(arr) {
  var res = 0, l, v;
  if (arr[0] <= arr[1]) {
    l = 1; v = 0;
  } else {
    l = 0; v = 1;
  }

  if (arr[l] === v) {
    return '';
  } else {

    for (var i = 0; i < arr[1]; i++) {
      res += arr[0];
    }
  }
  
  return res + Number(sum_array([arr[0]-v, arr[1]-l]));
}

//driver code
console.log('Testing\n')
console.log('input   | expected | actual')
console.log('————————|——————————|————————')
console.log('[1,5]   | 15       | ', sum_array([1,5]))
console.log('[1,100] | 5050     | ', sum_array([1,100]))
console.log('[5,1]   | 15       | ', sum_array([5,1]))
console.log('[100,1] | 5050     | ', sum_array([100,1]))
