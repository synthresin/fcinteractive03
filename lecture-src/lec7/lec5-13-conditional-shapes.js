// 최대 형태는 if - else if 여러개 - else 의 형태
if (a) {
  doA();
} else if (b) {
  doB();
} else if (c) {
  doC();
} else {
  doOther();
}

// else if 와 else 는 생략 가능하다.
// else if 안쓰는 경우.
if (a) {
  doA();
} else {
  doB();
}

// else 안 쓰는 경우.
if (a) {
  doA();
} else if (b) {
  doB();
}
