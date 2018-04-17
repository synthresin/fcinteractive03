// 어떤 이벤트냐에 따라 다양한 속성에 접근이 가능하다.
function someListener(event) {
  event.target // 이벤트의 대상

  // 키보드 이벤트
  event.keyCode // 누른 키의 코드

  // 마우스 이벤트
  event.clientX // 현재 마우스가 놓인 엘리먼트에서의 X 좌표
  event.clientY // 현재 마우스가 놓인 엘리먼트에서의 Y 좌표
}
