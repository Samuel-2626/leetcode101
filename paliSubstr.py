"""
U - Understand: Clarify question, constraints and edge cases
D - Diagram: Work through an example that has been given in the problem
P - Pseudocode: Write pseudocode
C - Code: Write out the code 
You can also write unit test to test your code and ensure it passes all edge cases
"""

"""
- Create your function
- create a dict that'll hold the values and their index if it doesn't exxist
- Loop through the arr to check for palidromic values
- Call length on the substr
L = 0
r = 1
in this case, length of str is 4
"""

def longest_palindrome(str):
    if len(str) <= 1:
        return str

    longestSubstr = ""
    max_length = 0

    for i in range(len(str)):
        for j in range(i, len(str)):
            substr = str[i:j+1]
            if substr == substr[::-1] and len(substr) > max_length:
                longestSubstr = substr
                max_length = len(substr)
    return longestSubstr

print(longest_palindrome("cbbd"))
# print(palindromicSubstr("babad"))
