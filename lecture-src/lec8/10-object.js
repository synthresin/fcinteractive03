// 오브젝트 최소 형식
var person = {};

// 오브젝트에 여러 항목 작성하기.
var person = {
  name: 'Bob Smith',
  age: 32,
  interest: ['music', 'game'],
  greeting: function() {
    alert("Hello! I\'m " + this.name + '.');
  }
};

person.name // 'Bob Smith'
person.age // 32
person.interest[0] // music
person.greeting() // 함수 실행
