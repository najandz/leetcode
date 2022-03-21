/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 */
let subarraySum = (nums, k) => {
	let cnt = 0;
	let n = nums.length;
	for (let i = 0; i < n; i++) {
		let sum = 0;
		for (let j = i; j < n; j++) {
			sum += nums[j];
			if (sum === k) cnt++;
		}
	}
	return cnt;
};
