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
