//
//  plusOne.swift
//  Algorithm
//
//  Created by Tong on 2021/1/2.
//

import Foundation

/**
 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 
 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 
 你可以假设除了整数 0 之外，这个整数不会以零开头。
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/plus-one
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
func plusOne(_ digits: [Int]) -> [Int] {
    var result = digits
    
    // 从末尾开始，不是9，则加1，如果是9，则变为0，
    for i in (0 ..< result.count).reversed() {
        if result[i] != 9 {
            result[i] = result[i] + 1
            return result
        } else {
            result[i] = 0
        }
    }
    // 数组后，判断如果首位为0，则首位插入1
    if result.first == 0 {
        result.insert(1, at: 0)
    }
    return result
}
