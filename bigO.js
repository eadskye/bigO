'use strict';

//O(1)
function firstNumber(array){
  var array = [1,2,3,4,5];
  console.log(array[0]);
}
firstNumber();
//O(n)
function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
fibonacci(50);

//O(n^2)
function fib(n){
  if(n<=1)
    return n;
  else
    return fib(n-1) + fib(n-2);
}
fib(50);
