function threeSum(arr, target) {
// write your code he

    let closestSum = Integer.MAX_VALUE;
for(let i=0;i<arr.length;i++){
	for(let j=i+1;j<arr.length;j++){
		let sum=0;
		for(let k=j+1;k<arr.length;k++){
			if((target-closestSum)>(target-(arr[i]+arr[j]+arr[k]))){
				closestSum=arr[i]+arr[j]+arr[k];
			}
		}
		
	}
}
	return;
}

module.exports = threeSum;
