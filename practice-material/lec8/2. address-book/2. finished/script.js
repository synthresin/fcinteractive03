var users = ["Irene Nash",
  "Alan Bond",
  "Boris	Hodges",
  "Alexander	Bailey",
  "Nathan Powell",
  "Julia Vaughan",
  "Samantha Nolan",
  "Joan Welch",
  "Samantha Morgan",
  "Virginia Fisher",
  "Alison Baker",
  "Carl Campbell",
  "Deirdre	Payne",
  "Jack Coleman",
  "Samantha Wilkins"];

var list = document.querySelector('.user-list');

for (var i = 0; i < users.length; i++) {
  // 새 아이템을 추가
  var listItem = document.createElement("li");
  listItem.classList.add('user-list-item');
  listItem.innerHTML = users[i];

  list.append(listItem)
}
