# Gauss Formula = n * (n + 1) / 2




def main() -> None:
    print(missing_number([3,0,1,4]))



def missing_number(nums: list[int]) -> int:

    n: int = len(nums)
    
    expected_sum: int = int((n * (n + 1)) / 2)
    actual_sum: int = 0

    for num in nums:
        actual_sum += num

    return expected_sum - actual_sum



if __name__ == "__main__":
    main()