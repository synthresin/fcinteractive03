// 점을 사용한 표현법
person.age = 45;
person.interests[1] = 'Baseball';
person.greeting = function() {
  alert('I don\'t like you');
};

// 괄호를 사용한 표현법
person['age'] = 45;
person['interests'] = 'Baseball';
person['greeting'] = function() {
  alert('I don\'t like you');
};
