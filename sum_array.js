const sum_array = (arr) => {
  let result = 0;

  if (arr[0] > arr[1]) {
    for (let i = arr[0]; i >= arr[1]; i--) {
      result += i;
    }
  } else {
    for (let i = arr[0]; i <= arr[1]; i++) {
      result += i;
    }
  }

  return result;
}


//driver code
console.log('Testing\n')
console.log('input        | expected   | output');
console.log('—————————————|————————————|————————');
console.log('[1, 5]       | 15         | ', sum_array([1, 5]));
console.log('[1, 100]     | 5050       | ', sum_array([1, 100]));
console.log('[5, 1]       | 15         | ', sum_array([5, 1]));
console.log('[100, 1]     | 5050       | ', sum_array([100, 1]));