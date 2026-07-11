/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 1) return 0;
    let profit = 0;
    let buy = 0;
    
    for(let i=1; i<prices.length; i++ ){        
        

        if(prices[i] < prices[i-1]){
            if(buy !== i-1){
                profit = profit + prices[i-1] - prices[buy];            
            }
            buy = i;
        }

    }

    if(buy !== prices.length - 1){
        profit = profit + prices[prices.length - 1] - prices[buy]
    }

    return profit;
};