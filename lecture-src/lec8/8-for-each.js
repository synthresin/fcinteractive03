
// 순차적으로 names 의 각각 요소에 대하여, 우리가 지정한 함수가 실행된다.
names.forEach(doSomeWithEachName);

// 지정한 함수의 입력 형식이 고정되어 있다 : 첫번째는 현재 아이템, 두번째는 그 아이템의 순번
function doSomeWithEachName(name, index, array) {
  console.log(name);
  console.log(index);
}

// 함수 따로 선언 없이, 바로 익명 함수로 축약해서도 쓴다

names.forEach(function(name, index) {
  console.log(name);
})
