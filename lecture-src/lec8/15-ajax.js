// 최소표현
$.ajax(option);

// options 는 object 형식이며, 미리 정해진 키 값을 사용하도록 되어 있다.
// url: 데이터 요청할 주소
// success: 데이터 요청 성공시 실행되는 함수
// error: 데이터 요청 실패시 실행되는 함수
$.ajax({
  url: 'https://api.myjson.com/bins/12lhyv',
  success: function(response) {
    var users = response;
    users.forEach(appendListItemWithUser);
  },
  error: function() {
    alert('데이터 받기 오류!');
  }
})
