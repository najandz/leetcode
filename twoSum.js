/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
const twoSum = (nums, target) => {
	for (let index = 0; index < nums.length; index++) {
		const diff = target - nums[index];
		const diffIndex = nums.indexOf(diff);
		if (diffIndex !== -1 && diffIndex !== index) {
			return [index, diffIndex];
		}
	}
};
