function animateEnter(element) {
  element.classList.add('entering');
  setTimeout(function() {
    element.classList.remove('entering', 'hidden');
  })
}

function animateLeave(element) {
  element.classList.add('leaving');

  function handleTransitionend() {
    element.removeEventListener('transitionend', handleTransitionend);
    element.classList.add('hidden');
    element.classList.remove('leaving');
  }
  element.addEventListener('transitionend', handleTransitionend);
}

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
    animateEnter(peopleButton);
  } else {
    animateLeave(peopleButton)
  }
}

function animateFileButton() {
  var fileButton = document.getElementById('file-button');
  var isFileButtonHidden = fileButton.classList.contains('hidden');

  if (isFileButtonHidden) {
    animateEnter(fileButton);
  } else {
    animateLeave(fileButton)
  }
}

var fab = document.getElementById('fab');
fab.addEventListener('click', animateFab);
fab.addEventListener('click', animatePeopleButton);
fab.addEventListener('click', animateFileButton);
