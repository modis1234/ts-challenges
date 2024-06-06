function countFibonacciCalls(N: number): [number, number] {
    // 0과 1의 출력 횟수를 저장할 배열
    const counts: [number, number][] = Array.from({ length: N + 1 }, () => [0, 0]);

    // 기본 값 설정
    if (N >= 0) counts[0] = [1, 0];
    if (N >= 1) counts[1] = [0, 1];

    // 동적 프로그래밍으로 출력 횟수 계산
    for (let i = 2; i <= N; i++) {
        counts[i][0] = counts[i - 1][0] + counts[i - 2][0];
        counts[i][1] = counts[i - 1][1] + counts[i - 2][1];
    }

    return counts[N];
}

// 테스트 케이스 처리 함수
function processTestCases(T: number, testCases: number[]): void {
    testCases.forEach(N => {
        const [count0, count1] = countFibonacciCalls(N);
        console.log(`${count0} ${count1}`);
    });
}

// 예시 테스트 케이스 실행
const T = 4;
const testCases = [0, 1, 3, 40];

processTestCases(T, testCases);