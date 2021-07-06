function solution(S) {
    // "(", "{", "[", "]", "}" and/or ")"
    const opening = ['(', '{', '[']
    const closing = [')', '}', ']']
    let stack = []

    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (opening.includes(element)) {
            stack.push(element)
            stack
        } else {
            const closingIndex = closing.indexOf(element)
            openingChar = opening[closingIndex]
            openingChar
            check = stack.pop() ===  openingChar
            if (!check) return false
        }
        
    }
    
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
}