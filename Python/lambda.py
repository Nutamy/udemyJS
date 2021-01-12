def myfunc(n):
    return lambda a: str(a) + str(n)
abc = "abcdefgh"
mydoubler = myfunc(abc.index[0])
mytripler = myfunc(abc.index[1])

print(mydoubler(11))
print(mytripler(11))