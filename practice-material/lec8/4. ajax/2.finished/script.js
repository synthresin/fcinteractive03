var list = document.querySelector('.user-list');

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
