var fab = getElementById('fab');
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

// fab 요소를 선택 후, 이 요소에 click 이벤트 핸들러(처리 함수)로
// animateFab 함수를 사용하게 함.
fab.addEventListener('click', animateFab);

// 낡은 방법, 복수의 이벤트 핸들러를 넣을수 있음. on + 이벤트명.
fab.onclick = animateFab;
