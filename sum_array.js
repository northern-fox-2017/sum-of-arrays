function sum_array(arr) {
  let first = arr[0]
  let second = arr[1]
  let oneTwo = first + second
  let between = 0
  if(second > first){
    while (second > first + 1) {
      second -= 1
      between += second
    }
  } else {
    while (first > second + 1) {
      first -= 1
      between += first
    }
  }
  return between + oneTwo
}


//driver code

console.log('Testing\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('[1,5]       | 15         | ', + sum_array([1,5]))
console.log('[1,100]     | 5050       | ', + sum_array([1,100]))
console.log('[5,1]       | 15         | ', + sum_array([5,1]))
console.log('[100,1]     | 5050       | ', + sum_array([100,1]))
