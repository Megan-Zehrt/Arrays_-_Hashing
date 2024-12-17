// 424. Longest Repeating Character Placement - Sliding Window



// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.







/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    let map = new Map()
    let left = 0
    let max = 0

    for(let right = 0; right < s.length; right++){

        let size = right - left + 1

        map.set(s[right], 1 + (map.get(s[right]) || 0))

        if(size - Math.max(...map.values()) > k){
            map.set(s[left], map.get(s[left]) - 1)
            left++
        }

        size = right - left + 1
        max = Math.max(max, size)
    }

    return max
};