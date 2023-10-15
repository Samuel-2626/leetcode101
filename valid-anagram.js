


// O(n^2)
function isAnagram(s, t) {

    // For an anagram word, the frequency of the two words must be equal

    // Length of the two words must be equal
    if (s.length !== t.length) {
        return false
    }

    // Get the frequency of the letters of the two words
    let sWordFrequency = new Map()
    let tWordFrequency = new Map()

    for (let i = 0; i < s.length; i++) {

        // Frequency of s word
        if (sWordFrequency.has(s[i])) {
            let num = sWordFrequency.get(s[i])
            sWordFrequency.set(s[i], num + 1)
        } else {
            sWordFrequency.set(s[i], 1)
        }

        // Frequency of t word
        if (tWordFrequency.has(t[i])) {
            let num = tWordFrequency.get(t[i])
            tWordFrequency.set(t[i], num + 1)
        } else {
            tWordFrequency.set(t[i], 1)
        }

    }

    // Check that the letters frequency of the two word matches
    for (const [key, value] of sWordFrequency) {
        
        if (!tWordFrequency.has(key)) {
            return false
        } else if (tWordFrequency.get(key) !== value) {
            return false
        }

    }

    return true

}

console.log(isAnagram("anagram", "nagaram"));

