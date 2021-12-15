// @ts-check
/**
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */

function sum(a, b) {
  return a + b;
}

sum(10, '20') // ts-check 옵션 덕분에 오류 확인 가능
sum(10, 20).toLocaleString(); // 인텔리센스 자동 완성