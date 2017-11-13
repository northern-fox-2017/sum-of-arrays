function sum_array(arr) {
  //your code here
  let total = 0
  let numBig = 0
  let numSmall = 0
  if(arr[0]>arr[1]){
    numBig = arr[0]
    numSmall = arr[1]
  }else{
    numBig = arr[1]
    numSmall = arr[0]
  }
  let numPlus = arr[0]+arr[1]
  for(let i = numSmall+1 ; i < numBig; i++){
    total += i
  }
  return total += numBig+numSmall
}


//driver code
console.log('Testing\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('[1,5]       | 15         | ', sum_array([1,5]))
console.log('[1,100]     | 5050       | ', sum_array([1,100]))
console.log('[5,1]       | 15         | ', sum_array([5,1]))
console.log('[100,1]     | 5050       | ', sum_array([100,1]))
