Find Time complexity of following algorithm with proper explanation:- 

for single for loop -->O(n)
constant order-->Object(1)
linear-time function-->O(n)
quadratic function -->(n*2)

lograthic algorithm =(log n)
**sort,merge sort =O(n logn)

//Big O of Objects
Insertion -   O(1)
Removal -   O(1)
Searching -   O(N)
Access -   O(1)

//Big O of Object Methods
Object.keys -   O(N)
Object.values -   O(N)
Object.entries -   O(N)
hasOwnProperty -   O(1)

eg of O(1)--> push ,pop i.e. removal,insertion.


a).  let a = 0, b = 0;
for (i = 0; i < N; i++) {
    a = a + Math.random();
}
for (j = 0; j < M; j++) {
    b = b + Math.random();
}
 
--> for two diff loop order(n+m)


b). let a = 0;
for (i = 0; i < N; i++) {
    for (j = N; j > i; j--) {
        a = a + i + j;
    }
}
//--> nested for loop Object(n*2)


c).let i=0, j=0, k = 0;
for (i = Math.floor(n / 2); i <= n; i++) {
    for (j = 2; j <= n; j = j * 2) {
        k = k + Math.floor(n / 2);
    }
}
 //--> nlog(n)

d).let a = 0, i = N;
while (i > 0) {
    a += i;
    i = Math.floor(i/2);
}
  //-->nlog n


e).for(var i=0;i<n;i++)
    i*=k
 ///--> k is constant O(1)






 /* two pointer method */

 /* sliding window */

 /*recursion */

 The process in which a function calls itself directly or indirectly is called recursion.
 and the corresponding function is called a recursive function.

 1)Performing the same operations multiple times with different inputs.
 2)In every step, we try smaller inputs to make the problem smaller.
 3)Base condition is needed to stop the recursion otherwise infinite loop will occur.


 1)Step1 - Define a base case-
   This is the stopping condition for the recursion, as it prevents the function from infinitely calling itself.

 2)Step2 - Define a recursive case
   call the function recursively to solve each subproblem.

 3)Step3 - Ensure the recursion terminates:
  Make sure that the recursive function eventually reaches the base case, and does not enter an infinite loop.

4)step4 - Combine the solutions: 
  Combine the solutions of the subproblems to solve the original problem.



/* What is the base condition in recursion? */
 In the recursive program, 
 the solution to the base case is provided and 
 the solution to the bigger problem is expressed in terms of smaller problems. 

 
 