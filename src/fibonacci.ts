let zeroCount = 0;
let oneCount = 0;

function fibonacci(n: number): number {
  if (n === 0) {
    zeroCount++;
    return 0;
  } else if (n === 1) {
    oneCount++;
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function countFibonacciCalls(n: number): void {
  zeroCount = 0;
  oneCount = 0;
  fibonacci(n);
  console.log(`${n} -> 0:${zeroCount} / 1:${oneCount}`);
}

// 테스트 케이스 입력 받기
function main() {
  const input = `3 20 4 38 40`;
  const lines = input.trim().split(" ");
  const T = parseInt(lines[0]);

  for (let i = 1; i <= T; i++) {
    const N = parseInt(lines[i]);
    countFibonacciCalls(N);
  }
}

main();
