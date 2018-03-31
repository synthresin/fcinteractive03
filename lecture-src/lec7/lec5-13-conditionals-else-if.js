// else 는 조건이 충족하지 않은 경우
// 실행할 코드를 기술할때 사용
if (isFabOpened) {
  alert('fab를 닫자!');
} else {
  alert('fab를 열자!');
}

// else if 는 조건이 충족하지 않은 경우
// 다른 조건에 실행할 코드를 기술할때 사용
if (isFabOpened) {
  alert('fab를 닫자!');
} else if (isContextMenuOpened){
  alert('일단 컨텍스트 메뉴 부터 닫자!');
}
