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

var fab = document.getElementById('fab');
fab.addEventListener('click', animateFab);
