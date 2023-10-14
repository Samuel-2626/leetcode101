

// O(n)
function isValid(str) {

    const acceptedInput = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"],
    ])

    for (let i = 0; i < str.length; i++) {

        if (i % 2 === 0) {

            if (str[i + 1] !== acceptedInput.get(str[i])) {
                return false
            }

        }

    }

    return true

}

isValid("(){}[]")