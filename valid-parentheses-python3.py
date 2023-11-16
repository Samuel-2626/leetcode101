


def main() -> None:
    print(isValid("()[]{]"))




def isValid(s: str) -> bool:
    
    sequence: dict[str, str] = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

 

    for char in range(len(s)):

        if s[char] in sequence:
            if s[char + 1] != sequence[s[char]]:
                return False

    return True 




if __name__ == "__main__":
    main()