function lengthOfLongestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    const hash = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        console.log('char-', char);

        if (hash[char] !== undefined && hash[char] >= start) {
            // If the character is already in the substring, update the start index
            start = hash[char] + 1;
            // console.log('start- ',start);
        }

        hash[char] = i; // Store the index of the current character
    
        // Update the maximum length
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
