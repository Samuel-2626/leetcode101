def isPalindrome(str):
    # Step 1: Convert to lowercase and remove non-alphanumeric characters
    arr = []
    for char in str: 
        lowerChar = char.lower()
        if lowerChar.isalnum():
            arr.append(lowerChar)
 
    alphanumeric_str = ''.join(arr)

    # Step 2: Check if the resulting string is a palindrome
    return alphanumeric_str == alphanumeric_str[::-1]

# Example usage:
s1 = "A man, a plan, a canal: Panama"
s2 = "race a car"
s3 = " "

print(isPalindrome(s1))  # Output: True
print(isPalindrome(s2))  # Output: False
print(isPalindrome(s3))  # Output: True
