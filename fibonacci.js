// with loop:
function fibs(n) {
  const sol = [0, 1];
  for (let i = 1; i < n; i++) {
    sol.push(sol[i] + sol[i - 1]);
  }
  return sol;
}
console.log(fibs(8));

// with recursion:

function fibsRec(n, arr = [0, 1]) {
  if (arr.length >= n + 1) return arr;

  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibsRec(n, arr);
}
console.log('recursin fib array: ' + fibsRec(6));
