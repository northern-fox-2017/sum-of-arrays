function sum_array(arr) {
  //your code here
  var tampung = 0;
  //var hasil = 0;
  for(var i = 0; i < arr.length;i++){ // looping untuk mendapatkan isi array
	  //console.log(arr[i])
	  for(var j = 1; j <= arr[i]; j++){ // looping lagi untuk mendapatkan jarak dari kedua huruf dalam array
		  //console.log('ini looping J ' + j)
		  tampung += j // penjumlahan dari variabel j
		  //console.log(tampung)
	  }
  }
  return tampung - 1
}

//driver code
console.log('Testing\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('[1,5]       | 15         | ', sum_array([1,5]))
console.log('[1,100]     | 5050       | ', sum_array([1,100]))
console.log('[5,1]       | 15         | ', sum_array([5,1]))
console.log('[100,1]     | 5050       | ', sum_array([100,1]))
