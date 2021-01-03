//
//  mergeList.swift
//  Algorithm
//
//  Created by Tong on 2021/1/2.
//

import Foundation

/**
 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

 说明：

 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

 示例：

 输入：
 nums1 = [1,2,3,0,0,0], m = 3
 nums2 = [2,5,6],       n = 3

 输出：[1,2,2,3,5,6]

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/merge-sorted-array
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
func merge(_ nums1: inout [Int], _ m: Int, _ nums2: [Int], _ n: Int) {
    
    // 时间复杂度 O(n)
    nums1.removeLast(n)
    // 时间复杂度 O(n), n：新增元素的长度
    nums1.append(contentsOf: nums2)
    // 时间复杂度 O(nlogn)
    nums1.sort()
    
    // 直接合并
//    nums1 = (nums1[0..<m] + nums2).sorted()
    
    // 双指针倒序法
//    mergeByStep(&nums1, m, nums2, n)
}

func mergeByStep(_ nums1: inout [Int], _ m: Int, _ nums2: [Int], _ n: Int) {
    var i = m - 1
    var j = n - 1
    var res = m + n - 1
    
    while j >= 0 {
        if i >= 0 && nums1[i] > nums2[j] {
            nums1[res] = nums1[i]
            i -= 1
        } else {
            nums1[res] = nums2[j]
            j -= 1
        }
        res -= 1
    }
}
