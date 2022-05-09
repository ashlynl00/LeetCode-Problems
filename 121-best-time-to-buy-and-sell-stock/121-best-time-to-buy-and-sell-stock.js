/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let smallest = prices[0];
    let largestProfit = 0;
    for(let i=1; i<prices.length; i++) {
        if(prices[i] < smallest){
            smallest = prices[i]; 
        }
        if ((prices[i] - smallest) > largestProfit) {
            largestProfit = prices[i] - smallest
        }
    }
    return largestProfit
};