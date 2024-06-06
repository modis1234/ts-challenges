# 씨드로닉스 사전 과제 1

## 사전 문제 1 Fibonacci 문제
1 은 2 번 출력되고, 0 은 1 번 출력된다. N 이 주어졌을 때, fibonacci(N)을 호출했을 때, 0 과 1 이 각각 몇 번
출력되는지 구하는 프로그램을 작성하시오.

- 기존의 C++ 언어를 Typescript로 변환해서 작성했습니다.
```javascript
// src/fibonacci.ts
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
```


## resolve
 - 개발 환경
 - vscode 
 - typescript
 - node.js
  
### 1. node.js 프로젝트에서 패키지를 설치합니다.
``` npm install typescript ```

### 2. 다음 조건을 만족하는 코드를 작성합니다.**(src/fiboTest.ts)** 
> #### 입력
>  첫째 줄에 테스트 케이스의 개수 T 가 주어진다.
>  각 테스트 케이스는 한 줄로 이루어져 있고, N 이 주어진다. N 은 40 보다 작거나 같은 자연수 또는 0 이다.
>#### 출력
>  각 테스트 케이스마다 0 이 출력되는 횟수와 1 이 출력되는 횟수를 공백으로 구분해서 출력한다.
>

### 3. typescript build 후 테스트 코드 실행
``` npx tsc ``` 후, ``` node src/fiboTest.ts 또는 npm start ```


   