function sum_array(arr) {
  //your code here
  let numPertama = arr[0]
  let numKedua = arr[1]
  if(numPertama == numKedua){
    return numPertama
  }
  if(numPertama<numKedua){
    return numKedua+sum_array([numPertama,numKedua-1])
  }else{
    return numPertama+sum_array([numPertama-1,numKedua])
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
