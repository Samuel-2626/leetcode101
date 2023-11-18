# nums1.length == m + n
# nums2.length == n



def main() -> None:
    print(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))





def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:

    if n == 0:
        return nums1
    elif m == 0:
        nums1 = nums2
        return nums1
    else:
    
        nums1_dummy: list[int] = nums1[:m]


        merge_nums: list[int] = []


        i: int = 0
        j: int = 0


        for num in range(len(nums1_dummy)):
            if nums1_dummy[i] < nums2[j]:
                merge_nums.append(nums1_dummy[i])
                i += 1
            else:
                merge_nums.append(nums2[j])
                j += 1

        
        if i < len(nums1_dummy):
            rem = nums1_dummy[i:]
            merge_nums = merge_nums + rem
        if j < len(nums2):
            rem = nums2[j:]
            merge_nums = merge_nums + rem


        nums1 = merge_nums
        return nums1
            




if __name__ == "__main__":
    main()