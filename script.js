function threeSum(arr, target) {
// write your code here
let min=MAX_VALUE;
  for (let index = 0; index <arr.length-2 ; index++) {
	  let sum=0;
  	for(let i=index;i<=index+2;i++){
		sum+=arr[i];
	}
	  if(sum<=min){
		  min=sum;
	  }
  }
	return min;
}

module.exports = threeSum;
