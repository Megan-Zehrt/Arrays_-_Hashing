// 17. Letter Combinations Of A Phone Number



// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.







/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if(digits == "") return []
    
    const phoneMap = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    let results = []

    function letter(index, string){

        if(string.length === digits.length){
            results.push(string)
            return
        }

        for(let i = 0; i < phoneMap[digits[index]].length; i++){

            string += phoneMap[digits[index]][i]

            letter(index + 1, string)

            string = string.slice(0, -1)
        }
    }

    letter(0, "")

    return results
};