function threeSum(arr, target) {
// write your code he
  for (let index = 0; index <arr.length-2 ; index++) {
	  let sum=0;
  	for(let i=index;i<=index+2;i++){
		sum+=arr[i];
	}
	  if(sum+1==target){
		 return sum;
	  }
  }
return
}

module.exports = threeSum;
