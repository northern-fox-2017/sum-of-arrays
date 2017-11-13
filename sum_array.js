function sum_array(arr) {
  //your code here
  var awal = arr[0];
  var akhir = arr[1];
  var hasil = 0

  if (awal < akhir) {
    for (var i = awal; i <= akhir; i++) {
      hasil += i
    }
  }else {
    for (var i = awal; i >= akhir; i--) {
      hasil += i
    }
  }

  return hasil
}


//driver code
console.log('Testing\n')
console.log('input  | expected | actual')
console.log('—————— |——————————|————————')
console.log('[1,5]  |   15     | ', sum_array([1,5]))
console.log('[1,100]| 5050     | ', sum_array([1,100]))
console.log('[5,1]  | 15       | ', sum_array([5,1]))
console.log('[100,1]| 5050     | ', sum_array([100,1]))
