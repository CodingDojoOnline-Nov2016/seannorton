
#Create a program that prompts the user ten times for a test score between 60 and 100. Each time a score is generated, your program should display what the grade is for a particular score. Here is the grade table:

#Score: 60 - 69; Grade - D
#Score: 70 - 79; Grade - C
#Score: 80 - 89; Grade - B
#Score: 90 - 100; Grade - A
#The result should be like this...

scores = []
def grades(tests):
    for i in range(1,tests+1):
        print "Test score number {}?".format(i)
        score = input()
        scores.append(score)
    print scores
    for i in scores:
        if i < 60:
            print "Score: {}; Your Grade is F".format(i)
        elif i >= 60 and i <= 69:
            print "Score: {}; Your Grade is D".format(i)
        elif i >= 70 and i <= 79:
            print "Score: {}; Your Grade is C".format(i)
        elif i >= 80 and i <= 89:
            print "Score: {}; Your Grade is B".format(i)
        elif i > 89:
            print "Score: {}; Your Grade is A".format(i)
    print "End of the program. Bye!"
