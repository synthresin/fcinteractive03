// 명령, 문(statement), 이 경우의 경우 콘솔에 문장을 찍는 명령.
console.log('Hello World');

// h1 선택해서 요소 바꾸기
// querySelector 라는 함수를 사용하여, 헤딩을 선택
// 이를 myHeading 이라는 변수에 저장.
// myHeading 변수의 innerHTML 속성값(헤딩의 내용)을 "Hello World"로 설정
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';

