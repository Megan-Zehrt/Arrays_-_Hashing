// // 1248. Count Number Of Nice Subarrays



// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.







/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let count = 0; // Total count of subarrays
    let odds = 0;  // Number of odd numbers in the current window
    let left = 0;  // Left pointer
    let prefix = 0; // Tracks number of valid subarrays starting from earlier indices

    for (let right = 0; right < nums.length; right++) {
        // Increment odd count if current number is odd
        if (nums[right] % 2 !== 0) {
            odds++;
            prefix = 0; // Reset prefix count
        }

        // When we have exactly k odd numbers in the window
        while (odds === k) {
            prefix++;
            if (nums[left] % 2 !== 0) {
                odds--; // Decrement odd count when shrinking the window
            }
            left++; // Shrink the window from the left
        }

        count += prefix; // Add prefix count to total count
    }

    return count;
};
