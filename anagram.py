def validAnagram(str1, str2):
    dic = {}
    for i,v in enumerate(str1):
        if v in dic:
            dic[v] += 1
        else:
            dic[v] = 1
    
    print(dic)

    for _, v in enumerate(str2):
        if v in list(dic.keys()):
            dic[v] -= 1
    
    print(dic)
    
    for v in dic.values():
        if v > 0:
            return False
    
    return True
        
print(validAnagram('anagram', 'nagaram'))