// 띄어쓰면 안된다
var bat man // error!

// 숫자로 시작 될수 없다.
var 3pigs // error!

// 중간이나 뒤에 숫자가 들어가는 것은 괜찮다.
var pi2gs3;

//+, * 와 같은 연산자를 사용할 수 없다. ^, /, \, ! 등
var one+two // error!

// _ 이외의 구두점을 사용할 수 없다. :, ', - 등.
var one:two // error!

// 대소문자를 구분한다.
var john = 10;
johN // undefined

// 예약된 단어를 사용할 수 없다.
var function // error! function 은 함수 선언에 쓰이는 단어이므로
