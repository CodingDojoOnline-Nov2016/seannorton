#given
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

#make a program that returns just the names.

# print students
# print students[1]
# print students[1]['first_name'], students[1]['last_name']

for i in range(len(students)-1):
    print students[i]['first_name'], students[i]['last_name']

# for i in range(len(students)-1):
#     for val in students[i].itervalues():
#         print val

#Optional Part

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

#Create a program that prints  the following format (including number of characters in each combined name):

# Students
# 1 - MICHAEL JORDAN - 13
# 2 - JOHN ROSALES - 11
# 3 - MARK GUILLEN - 11
# 4 - KB TONEL - 7
# Instructors
# 1 - MICHAEL CHOI - 11
# 2 - MARTIN PURYEAR - 13

# print users['Students'][1]
# print users['Instructors']

for key in users.iterkeys():
    print key
    for i in range(len(users[key])):
        print i+1, " - ", users[key][i]['first_name'], users[key][i]['last_name'], " - ", (len(users[key][i]['first_name']) + len(users[key][i]['last_name']))

#i feel like there's a simpler way to do this without using 'firstname' and 'lastname'...
