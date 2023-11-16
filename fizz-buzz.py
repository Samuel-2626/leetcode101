# Given an integer n
# Return a string array (1 - indexed) where:
# if i is divisible by 3 and 5 return "FizzBuzz"
# if i is divisible by 3 return "Fizz"
# if i is divisble by 5 return "Buzz"



def main() -> None:
    print(fizz_buzz(5))




def fizz_buzz(n: int) -> list[str]:

    result: list[str] = []
    
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))


    return result



if __name__ == "__main__":
    main()