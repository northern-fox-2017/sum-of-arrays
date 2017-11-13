function sum_array(arr) {
  nilai = 0;
  strarr = String(arr);
  pisah  = strarr.split(',').sort()
 num1 = Number (pisah[0])
  num2 = Number(pisah[1])
  //your code here

for (var i = num1; i <=num2; i++) {
	nilai +=i;
	
}
return nilai


}


//driver code
console.log('Testing\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('[1,5]       | 15         | ', sum_array([1,5]))
console.log('[1,100]     | 5050       | ', sum_array([1,100]))
console.log('[5,1]       | 15         | ', sum_array([5,1]))
console.log('[100,1]     | 5050       | ', sum_array([100,1]))