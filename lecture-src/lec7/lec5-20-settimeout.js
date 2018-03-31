/* setTimeout(함수, 딜레이); */

/* 구조 보기 */
setTimeout(function() {}, 1000);

/* 들여쓰기 까지 포함한 실제 작성 */
setTimeout(function() {
  alert('1000ms 가 지났다!')
}, 1000);

/* 예제에선 애니메이션 방지를 위해 꼼수와 같이 사용됨 (딜레이 0) */
