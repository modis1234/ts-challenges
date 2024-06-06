function fibonacci(n: number): number {
  if (n === 0) {
    console.log("0")
    return 0;
  } else if (n === 1) {
    console.log("1")
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
