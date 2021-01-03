//
//  trap.swift
//  Algorithm
//
//  Created by Tong on 2021/1/2.
//

import Foundation
/**
 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 
 示例 1：
 
 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 输出：6
 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/trapping-rain-water
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
func trap(_ height: [Int]) -> Int {
    guard !height.isEmpty else {
        return 0
    }
    
    var total = 0
    var maxLeft = 0
    var maxRight = 0
    
    var left = 1
    var right = height.count - 2
    
    for _ in 1 ..< height.count - 1 {
        // 从左到右
        if height[left - 1] < height[right + 1] {
            maxLeft = max(maxLeft, height[left - 1])
            let min = maxLeft
            if min > height[left] {
                total += (min - height[left])
            }
            left += 1
            
        } else {
            // 从右到左
            maxRight = max(maxRight, height[right + 1])
            let min = maxRight
            if min > height[right] {
                total += (min - height[right])
            }
            right -= 1
        }
    }
    
    return total
    
//    var leftHeights = Array(repeating: 0, count: height.count)
//    var rightHeights = Array(repeating: 0, count: height.count)
//
//    var maxLeft = 0
//    var maxRight = 0
//
//    for i in 0 ..< leftHeights.count {
//        leftHeights[i] = maxLeft
//        maxLeft = max(maxLeft, height[i])
//    }
//
//    for j in (0 ..< rightHeights.count).reversed() {
//        rightHeights[j] = maxRight
//        maxRight = max(maxRight, height[j])
//    }
//
//    var total = 0
//
//    for i in 0 ..< height.count {
//        let minHeight = min(leftHeights[i], rightHeights[i])
//        if minHeight > height[i] {
//            total += minHeight - height[i]
//        }
//    }
//
//    return total
}
