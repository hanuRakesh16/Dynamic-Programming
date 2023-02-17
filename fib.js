const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 1);
};

console.log(fib(7));