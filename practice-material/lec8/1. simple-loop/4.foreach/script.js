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

var list = document.getElementById('list');

users.forEach(appendListItemWithUser);

function appendListItemWithUser(user) {
  var listItem = document.createElement("li");
  listItem.innerHTML = user;

  list.append(listItem);
}
