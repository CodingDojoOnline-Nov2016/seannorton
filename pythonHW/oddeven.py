#Create a function that counts from 1 to 2000.
#As it loops through each number, specify whether it's odd or even.

def oddoreven(start,end):
    for num in range(start, end+1):
        if num%2!=0:
            ooe = "odd"
        elif num%2==0:
            ooe = "even"
        print "Number is {}. This is an {} number.".format(num,ooe)

oddoreven(1,2000)
