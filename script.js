function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	const map = new Map([
  [1000, 'M'],
  [500, 'D'],
  [100, 'C'],
  [50, 'L'],
  [10, 'X'],
  [5 'V'],
  [1, 'I']
]);
let str=num.toString(),res=""
	let i=0;
	while(i<str.length-1){
		if(str[i]<str[i+1]){
			res+=map.get(str[i+1])
			res+=map.get(str[i])
			i+=2
		}else{
			res+=str[i]
			i++
		}
	}
	if(str[str.length-1]<str[str.length-2]){
		res+=map.get(str[str.length-1])
	}
	console.log(res)
	

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
