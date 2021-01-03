//
//  moveZeroes.swift
//  Algorithm
//
//  Created by Tong on 2021/1/2.
//

import Foundation

/**
 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

 示例:

 输入: [0,1,0,3,12]
 输出: [1,3,12,0,0]

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/move-zeroes
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
func moveZeroes(_ nums: inout [Int]) {
  
    if nums.count == 0 {
        return
    }
    
    // 双指针解法
    var i = 0
    for j in 0 ..< nums.count {
        if nums[j] != 0 {
            nums.swapAt(j, i)
            i += 1
        }
        print(nums)
    }
    
    
//    let count = nums.count
//    var index = 0
//    var zeroCount = 0
//
//    while index + zeroCount != count {
//
//        if nums[index] == 0 {
//            nums.remove(at: index)
//            nums.append(0)
//            zeroCount += 1
//        } else {
//            index += 1
//        }
//    }
}


