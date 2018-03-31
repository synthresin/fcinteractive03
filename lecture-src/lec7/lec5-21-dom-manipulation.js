// button 엘리먼트 만들고 클래스 추가하기
var actionButton = document.createElement("button");
actionButton.classList.add('fab-action-button', 'hidden');

// 안에 들어갈 img 엘리먼트 생성, 후 이미지 주소 설정.
var image = document.createElement("img");
image.setAttribute('src', 'people.svg');

// button 엘리먼트 안에 img 엘리먼트 삽입
actionButton.appendChild(image);

// button 을 넣고 싶은 부모 엘리먼트를 찾음
var buttonPlace = document.getElementById('button-place');

// 원하는 부모 엘리먼트에 button 요소 삽입
actionButton.append(buttonPlace);

// 만약 넣고 싶은 엘리먼트가 복잡한 단계를 가지고 있다면, 코드도 그만큼 길어질 수 밖에 없다.
