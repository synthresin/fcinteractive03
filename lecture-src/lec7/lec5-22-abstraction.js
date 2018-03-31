// 추상화 전 : 한글 해석
// 엘리먼트에 leaving 을 추가한후,
// 엘리먼트가 transition 이 끝났을때, 이하의 기능을 실행하게 이벤트 핸들러를 설정한다.
// 1. 이벤트 헨들러를 없애서, 더이상 이벤트 발생이 없게 한다.
// 2. hidden 클래스를 추가하고, leaving 클래스를 제거한다.
element.classList.add('leaving');
element.ontransitionend = function() {
  element.ontransitionend = undefined;
  element.classList.add('hidden');
  element.classList.remove('leaving');
}
// 추상화 후 : 한글 해석
// 사라지는 애니메이션 기능을 수행한다.
animateLeave(peopleButton)
