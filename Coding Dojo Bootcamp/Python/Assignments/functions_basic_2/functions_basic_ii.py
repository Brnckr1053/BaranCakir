# 1-countdown
def countdown(array):
    j = []
    for i in range(len(array) - 1, -1, -1):
        j.append(i)
    print(j)
countdown([5,4,3,2,1,0])

# 2-print_and_return
def print_and_return(array):
    for i in range(1, len(array) + 1):
        print(i)
    return len[array]
print_and_return([1, 2])


# 3-first_plus_length
def first_plus_length(array):
    return array[0] + len(array)
print(first_plus_length([1,2,3,4,5]))


# 4-values_greater_than_second
def values_greater_than_second(array):
    if len(array)<2:
        return False
    j=[]

    for i in array:
        if array[1] < i:
            j.append(i)
    print(len(j))
    return j
print(values_greater_than_second([5, 2, 3, 2, 1, 4]))


# 5-this_length_that_value
def this_length_that_value(a,b):
    j = []
    for i in range(a):
        j.append(b)
    return j
        
print(this_length_that_value(4,7))

