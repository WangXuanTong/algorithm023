/**
  给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

  设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
  注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
  示例 1:

  输入: [7,1,5,3,6,4]
  输出: 7
  解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
       随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {number[]} prices
* @return {number}
*/
var maxProfit = function (prices) {
  /**
   * 解题思路：贪心算法
   * 比较第i-1天和第i天的差值，第i天大于第i-1天就可以算利润
   * 
   */
  if (!prices || !prices.length) {
    return 0
  }

  var money = 0;
  for (var i = 1; i < prices.length; i++) {
    const temp = prices[i] - prices[i - 1]
    if (temp > 0) {
      money += temp
    }
  }
  return money;
};