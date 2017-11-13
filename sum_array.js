function sum_array(arr) {
  //your code here
  //console.log(arr[0]);
  if (Math.abs(arr[1]-arr[0]) <= 1){
    if (arr[0] === arr[1] ){
      return arr[0];
    } else {
      return arr[0]+arr[1];
    }
  } else {
    var small = arr[0];
    var big = arr[1];
    //console.log('>>', big , '+', small)
    if (small < big){
      //console.log(big);
      return small + big + sum_array([small+1,big-1])
    } else {
      return small+ big + sum_array([big+1,small-1])
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
