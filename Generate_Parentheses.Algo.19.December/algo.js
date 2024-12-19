// 22. Generate Parentheses



// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.









/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let results = []

    function helper(open, close, string){

        if(string.length === n*2){
            results.push(string)
        }

        if(open < n){
            helper(open + 1, close, string + "(")
        }

        if(close < open){
            helper(open, close + 1, string + ")")
        }

    }

    helper(0, 0, "")

    return results
};