function foo(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  if (a > 1000 || b > 1000) { // Added base case for large numbers
    return a + b; // Or any other appropriate handling
  }
  return foo(a - 1, b - 1);
}