You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the
[i]the customer has in the [j]th bank. 
Return the wealth that the richest customer has.

var maximumWealth = function(accounts) {
    // loop through accounts array

      let max_wealth = -Infinity;
    for (let i = 0; i < accounts.length; i++) {
        let wealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            wealth += accounts[i][j];
        }
        max_wealth = Math.max(max_wealth, wealth);
    }
    return max_wealth;
    
    };
