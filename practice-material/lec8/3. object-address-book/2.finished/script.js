var users = [
  {
    name: 'Barack Obama',
    image: 'img/obama.jpg'
  },
  {
    name: 'Anne Hathaway',
    image: 'img/anne.jpg'
  },
  {
    name: 'Leonardo DiCaprio',
    image: 'img/leo.jpg'
  },
  {
    name: 'Taylor Swift',
    image: 'img/swift.jpg'
  }
]

var list = document.querySelector('.user-list');

for (var i = 0; i < users.length; i++) {
  appendListItemWithUser(users[i]);
}

function appendListItemWithUser(user) {
  // <li class="user-list-item"></li>
  var listItem = document.createElement("li");
  listItem.classList.add('user-list-item');

  // <div class="user-list-item__thumbnail" style="background-image: url('...')"></div>
  var thumbnail = document.createElement("div");
  thumbnail.classList.add('user-list-item__thumbnail');
  thumbnail.style.backgroundImage = 'url(\'' + user.image + '\')';

  // <div class="user-list-item__name">...</div>
  var userName = document.createElement("div");
  userName.classList.add('user-list-item__name');
  userName.innerHTML = user.name;

  listItem.append(thumbnail);
  listItem.append(userName);

  list.append(listItem);
}
