function sum_array(arr) {
  //your code here  
  let sort = arr.sort(function(a,b){
    return a-b
  })

  let total = 0
  let newArr= []
  let low = sort[0]
  let high = sort[1]
  for(let i = low; i <= high; i++){
    total+=newArr.push(i)
  }
  return total  

}

//driver code
console.log('Testing\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('[1,5]       | 15         | ', sum_array([1,5]))
console.log('[1,100]     | 5050       | ', sum_array([1,100]))
console.log('[5,1]       | 15         | ', sum_array([5,1]))
console.log('[100,1]     | 5050       | ', sum_array([100,1]))
