//Iteractive
package Fibonacci;
public class FibonacciFunction {
public int fibonacciIterative(int n) {
if(n <= 1) {
return n;
}
int i, one = 0, two = 1, three;
if (n == 0)
return one;
for (i = 2; i <= n; i++)
{
three = one + two;
one = two;
two = three;
}
return two;
}
public int fibonacciIteractive(int n) {
if(n <= 1) {
return n;
}
return fibonacciIteractive(n-1)+(n-2);
}
public static void main(String args[]) {
for(int i=1;i<=10;i++){
FibonacciFunction fib = new FibonacciFunction();
long startTime = System.nanoTime();
int fibnum = fib(i);
long endTime = System.nanoTime();
long programruntime = endTime - startTime;
System.out.println(i + " " + programruntime);
}
}
private static int fib(int i) {
return 0;
}
}

//Recursion
package Fibonacci;
public class FibonacciFunction {
public int fibonacciRecursion(int n) {
if(n <= 1) {
return n;
}
int i, one = 0, two = 1, three;
if (n == 0)
return one;
for (i = 2; i <= n; i++)
{
three = one + two;
one = two;
two = three;
}
return two;
}
public int fibonacciRecursive(int n) {
if(n <= 1) {
return n;
}
return fibonacciRecursive(n-1) + (n-2);
}
public static void main(String args[]) {
for(int i=1;i<=10;i++){
FibonacciFunction fib = new FibonacciFunction();
long startTime = System.nanoTime();
int fibnum = fib(i);
long endTime = System.nanoTime();
long programruntime = endTime - startTime;
System.out.println(i + " " + programruntime);
}
}
private static int fib(int i) {
return 0;
}
}
