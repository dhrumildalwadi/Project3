import sys
file = sys.argv[0]
x1 = sys.argv[1]
x1=int(x1)
x2= sys.argv[2]
x2=int(x2)

for i in range(x1,x2):
    if ( i%3==0 and i%5==0):
        print(i)