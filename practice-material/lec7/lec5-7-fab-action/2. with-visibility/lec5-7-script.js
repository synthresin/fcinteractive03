function animateFab() {
  // 요소 선택하기
  var fabImg = document.getElementById('fab-img');
  // 요소에 clicked 클래스가 있는지 판별
  var isFabClicked = fabImg.classList.contains('clicked')

  if (isFabClicked) {
      fabImg.classList.remove('clicked'); // 있다면, 제거
  } else {
      fabImg.classList.add('clicked'); // 없으면, 추가
  }
}

function animatePeopleButton() {
  var peopleButton = document.getElementById('people-button');

  var isPeopleButtonHidden = peopleButton.classList.contains('hidden')

  if (isPeopleButtonHidden) {
    peopleButton.classList.remove('hidden');
  } else {
    peopleButton.classList.add('hidden');
  }
}

function animateFileButton() {
  var fileButton = document.getElementById('file-button');

  var isFileButtonHidden = fileButton.classList.contains('hidden');

  if (isFileButtonHidden) {
    fileButton.classList.remove('hidden');
  } else {
    fileButton.classList.add('hidden');
  }
}


var fab = document.getElementById('fab');
fab.addEventListener('click', animateFab);
fab.addEventListener('click', animatePeopleButton);
fab.addEventListener('click', animateFileButton);
