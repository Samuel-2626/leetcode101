


// O(n)
function isPalindrome(str) {

    if (str.trim() === "") {
        return true
    }

    const word = str.toLowerCase().match(/[a-z0-9]/g);

    const wordLength = word.length;

    for (let i = 0; i < wordLength; i++) {

        if (word[i] !== word[wordLength - (i + 1)]) {
            return false           
        }
    }

    return true;

}




console.log(isPalindrome("A man, a plan, a canal: Panama")); // True
console.log(isPalindrome("race a car"));  // False
console.log(isPalindrome(" ")); // True