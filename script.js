function threeSum(arr, target) {
// write your code he
for(let i=0;i<arr.length;i++){
	for(let j=i+1;j<arr.length;j++){
		let sum=0;
		for(let k=j+1;k<arr.length;k++){
			sum+=arr[i]+arr[j]+arr[k];
			if(sum==target){
				return sum;
			}
			else if(sum+1==target){
				return sum;
			}
		}
		
	}
}
	return;
}

module.exports = threeSum;
