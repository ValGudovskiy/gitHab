def frog(num):
    if num == 1:
        return ["1"]
    elif num == 2:
        return ["1,1", "2"]
    else:
        res = []

        for i in range(1, 3):
            a = frog(num - i)
            for j in range(0,len(a)) :
                res.append(a[j]+',' + str(i))
    return res


keyboard = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r"],
  8: ["s", "t", "u"],
  9: ["w", "x", "y", "z"],
};



def keyres(num) :
    strnum = str(num)
    if len(strnum) == 1:
        return keyboard[num]
    else :
        res = ''
        for i in range(0,len(strnum)):
            pr =keyboard[int(strnum[i])]
            for j in pr :
                res +=j
        return res
        
print(keyres(23),float('inf'))


