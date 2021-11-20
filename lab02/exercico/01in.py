cardA = ''
cardB = ''
while cardB != 0 and cardA != 0:
    cardB, cardA = input().split()
    line = input().split()
    line1 = input().split()
    cardB = set(line)
    cardA = set(line1)
    temp = cardA
    if len(cardB) < len(cardA):
        temp = cardB
        cardB = cardA
    temp = [x for x in temp if x not in cardB]
    print(len(temp))
