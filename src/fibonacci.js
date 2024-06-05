"use strict";
var zeroCount = 0;
var oneCount = 0;
function fibonacci(n) {
    if (n === 0) {
        zeroCount++;
        return 0;
    }
    else if (n === 1) {
        oneCount++;
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
function countFibonacciCalls(n) {
    zeroCount = 0;
    oneCount = 0;
    fibonacci(n);
    console.log("".concat(n, " -> 0:").concat(zeroCount, " / 1:").concat(oneCount));
}
// 테스트 케이스 입력 받기
function main() {
    var input = "3 20 4 38 40";
    var lines = input.trim().split(" ");
    var T = parseInt(lines[0]);
    for (var i = 1; i <= T; i++) {
        var N = parseInt(lines[i]);
        countFibonacciCalls(N);
    }
}
main();
