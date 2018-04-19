// 템플릿 굽기
var source = document.getElementById("user-item-template").innerHTML;
var userItemTemplate = Handlebars.compile(source);

// 만들어진 템플릿이 붙을 list 선택해둠
var list = document.querySelector('.user-list');

// user object 데이터를 받아서 템플릿과 합쳐
// 실제 최종적 html 를 만든 후, list 내부에 붙이는 함수
function appendUserUI(user) {
  var ui = userItemTemplate(user);
  list.insertAdjacentHTML( 'beforeend', ui );
}

// ajax 요청 전에 사용할 옵션 들을 설정
// url : 데이터를 요청할 주소
// success : 요청 성공시에, 내려온 데이터로 무슨 행동을 할건지 지정
// (지금의 경우는 users--user object의 배열--를 사용하여 appendUserUI 반복 수행.)
// error : 요청 실패시의 행동
var ajaxOption = {
  url: 'https://api.myjson.com/bins/12lhyv',
  success: function(users) {
    users.forEach(appendUserUI);
  },
  error: function() {
    alert('데이터 받기 오류!');
  }
}

// 위에 미리 정한 옵션을 사용하여, 실제로 ajax 수행.
$.ajax(ajaxOption);
