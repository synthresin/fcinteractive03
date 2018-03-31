function animateFab() {
  // 요소 선택하기
  var fabImg = document.getElementById('fab-img');
  // 요소에 clicked 클래스가 있는지 판별
  var isFabImgClicked = fabImg.classList.contains('clicked')

  if (isFabImgClicked) {
      fabImg.classList.remove('clicked'); // 있다면, 제거
  } else {
      fabImg.classList.add('clicked'); // 없으면, 추가
  }
}

// fabImg 의 onclick 이벤트 핸들러 함수를 작성.
// 아래의 이벤트 핸들러 함수는 animateFab 함수를 실행함.
var fabImg = document.getElementById('fab-img');
fabImg.onclick = function() {
  animateFab();
}

// 이것도 가능하나, 권장되지 않음, 이벤트 핸들러와 실제 기능은 분리하는쪽이 깔끔.
fabImg.onclick = animateFab;
