function sum_array(arr) {
  //your code here
  if(arr[1] < arr[0]){
    var stopper = arr[0]
    var start = arr[1]
  }
  else{
    var stopper = arr[1]
    var start = arr[0]
  }


  let total = 0

  if (stopper == 1){
    return total + 1
  }
  else{
    total += stopper;
    let numRecursive = stopper - 1
    let arrHasil = []
    arrHasil.push(start)
    arrHasil.push(numRecursive)
    // console.log(arrHasil)
    return sum_array(arrHasil) + total
  }
}


//driver code
console.log('Testing\n')
console.log('    input   |  expected  | actual')
console.log('————————————|————————————|————————')
console.log('[1,5]       | 15         | ', sum_array([1,5]))
console.log('[1,100]     | 5050       | ', sum_array([1,100]))
console.log('[5,1]       | 15         | ', sum_array([5,1]))
console.log('[100,1]     | 5050       | ', sum_array([100,1]))
