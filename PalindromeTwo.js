function PalindromeTwo(str) { 

    // code goes here  
    str
    const cleaned = str.replace(/[^a-zA-Z/]/g, "").toLowerCase()
    cleaned
    let isPalindrome = true;
    x = cleaned.length
    x
    c = 0
    // for (let i = 0; i < cleaned.length / 2; i++) {
    //     i
    //     c++
    //     if (cleaned)
    // }
    // c
    let i = 0
    while (i < cleaned.length / 2) {
        i
        a = cleaned[i]
        a
        b = cleaned[cleaned.length - 1 - i]
        b
        if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
            return false
        }

        i += 1
    }
    return true; 
}

a = PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna")
a

a = PalindromeTwo("A war at Tarawa!")
a

a = PalindromeTwo("cx A war at Tarawa xc!")
a

a = PalindromeTwo("Noel - sees Leon")
a

a = PalindromeTwo("raceecara")
a