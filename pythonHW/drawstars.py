#Draw Stars1
#takes a list of numbers and prints out that many stars.

list = [4,6,1,3,5,7,25]
def drawstars(alist):
    for i in alist:
        print i * "*"

drawstars(list)

#Draw Stars2
#Modify the function above. Allow a list containing integers and strings to be passed to the  draw_stars() function. When a string is passed, instead of  displaying *, display the first letter of the string according to the example below. You may use the .lower() string method for this part.

def is_number(x):
    try:
        float(x)
        return True
    except ValueError:
        return False

import math
list2 = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
def drawstars2(alist2):
    for i in alist2:
        if is_number(i) == False:
            print i[0].lower() * len(i)
        if is_number(i) == True:
            print i * "*"

drawstars2(list2)
