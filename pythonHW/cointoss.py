#You're going to create a program that simulates tossing a coin 5,000 times. Your program should display how many times the head/tail appears.
#Attempt #1: Throwing a coin... It's a head! ... Got 1 head(s) so far and 0 tail(s) so far
#Attempt #2: Throwing a coin... It's a head! ... Got 2 head(s) so far and 0 tail(s) so far
#Attempt #3: Throwing a coin... It's a tail! ... Got 2 head(s) so far and 1 tail(s) so far
#Attempt #4: Throwing a coin... It's a head! ... Got 3 head(s) so far and 1 tail(s) so far
#........
#Attempt #5000: Throwing a coin... It's a head! ... Got 2412 head(s) so far and 2588 tail(s) so far

#Ending the program, thank you!

import random
def cointoss(limit):
    tailscounter = 0
    headscounter = 0
    for i in range(1,limit+1):
        hotval = round(random.random())
        if hotval == 0:
            headscounter = headscounter + 1
            print "Attempt #{} Tossing a coin... it's heads! Got {} heads and {} tails so far.".format(i,headscounter,tailscounter)
        elif hotval == 1:
            tailscounter = tailscounter + 1
            print "Attempt#{} Tossing a coin... it's tails! Got {} heads and {} tails so far.".format(i,headscounter,tailscounter)
    print "All done! Thank you!"
