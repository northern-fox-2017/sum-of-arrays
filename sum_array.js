function sum_array(arr) {
  var awal = arr[0];  
  var akhir = arr[1];
  var tengah = [];
  var sumTengah = 0;

  while (awal < akhir - 1) {
    tengah.push(awal += 1);
  } console.log(tengah); 

  for (var i = 0; i < tengah.length; i++) {
    sumTengah += tengah[i]; 
  } 
  return arr[0] + sumTengah + akhir;
}


//driver code
// console.log('Testing\n')
// console.log('input | expected | actual')
// console.log('——————|——————————|————————')
console.log('[1,5]       | 15         | ', sum_array([1,5]));
// console.log('[1,100]     | 5050       | ', sum_array([1,100])
// console.log('[5,1]       | 15         | ', sum_array([5,1])
// console.log('[100,1]     | 5050       | ', sum_array([100,1])
