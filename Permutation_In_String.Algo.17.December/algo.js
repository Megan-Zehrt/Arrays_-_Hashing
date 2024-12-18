// 567. Permutation in String



// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.







/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
    const map = new Map();

    // Populate the frequency map for s1
    for (const letter of s1) {
        map.set(letter, (map.get(letter) || 0) + 1);
    }

    const neededLength = s1.length;
    let left = 0;
    let right = 0;
    let matched = 0; // Tracks how many characters match the required frequency

    // Sliding window over s2
    while (right < s2.length) {
        const char = s2[right];

        // If the character is in the map, decrease its frequency
        if (map.has(char)) {
            map.set(char, map.get(char) - 1);

            // If its frequency reaches 0, we have a complete match for this character
            if (map.get(char) === 0) {
                matched++;
            }
        }

        // Expand the window
        right++;

        // Shrink the window if its size exceeds s1.length
        while (right - left > neededLength) {
            const leftChar = s2[left];
            if (map.has(leftChar)) {
                // If we're removing a fully matched character, reduce the matched count
                if (map.get(leftChar) === 0) {
                    matched--;
                }
                // Restore the frequency of the character
                map.set(leftChar, map.get(leftChar) + 1);
            }
            left++;
        }

        // If all characters are fully matched, return true
        if (matched === map.size) {
            return true;
        }
    }

    return false;
};