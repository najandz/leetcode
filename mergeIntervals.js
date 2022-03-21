/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */
const merge = (intervals) => {
	intervals.sort((i, j) => {
		return i[0] - j[0];
	});

	let result = [];

	for (let i = 0; i < intervals.length; i++) {
		if (i == 0) {
			result.push(intervals[i]);
			continue;
		}
		let lastInterval = result[result.length - 1];
		if (lastInterval[1] < intervals[i][0]) {
			result.push(intervals[i]);
		} else if (lastInterval[1] > intervals[i][0]) {
			lastInterval[1] = intervals[i][1];
		}
	}
	return result;
};
