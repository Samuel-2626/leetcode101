const validParenthesis = (val) => {
    let stack = []

    for(let i = 0; i < val.length; i++) {
        if (val[i] === '(' || val[i] === '[' || val[i] === '{' ) {
            stack.push(val[i])
        } else if (val[i] === ')' || val[i] === ']' || val[i] === '}') {
            if (stack.length === 0) {
                return false;
            }
            let leftP = stack.pop()
            if (
                (leftP === '(' && val[i] === ')' ) ||
                (leftP === '['  && val[i] === ']' ) ||
                (leftP === '{' && val[i] === '}')
            ) {
                if (i === val.length-1) {
                    console.log('i got here');
                    return true
                }
            } 
        }
    }
    return false;
}

console.log( validParenthesis('{}[]()'))