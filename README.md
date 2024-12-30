# Uncommon JavaScript Recursive Function Stack Overflow Bug

This repository demonstrates an uncommon bug in JavaScript involving a recursive function that causes a stack overflow error for large inputs. The bug is subtle and can be easily missed.

## Bug Description

The `foo` function is designed to recursively subtract 1 from both `a` and `b` until either `a` or `b` reaches 0. However, if either `a` or `b` is a very large number, the recursive calls will exceed the maximum call stack size, leading to a stack overflow error.

## Bug Solution

The solution involves adding a base case to handle situations where either `a` or `b` is a large number, preventing the infinite recursion.

## How to reproduce

1. Clone this repository.
2. Run `bug.js` in a Node.js environment, providing large numbers as inputs.
3. Observe the stack overflow error.