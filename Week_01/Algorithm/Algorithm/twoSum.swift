//
//  twoSum.swift
//  Algorithm
//
//  Created by Tong on 2021/1/2.
//

import Foundation

/**
 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
 
 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 
 你可以按任意顺序返回答案。
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/two-sum
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
    var dict = [Int: Int]()
    let temp = nums.enumerated()
    for (i, n) in temp {
        if let index = dict[target - n] {
            return [index, i]
        }
        dict[n] = i
    }
    
    return []
}
