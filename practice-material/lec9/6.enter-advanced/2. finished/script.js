var searchBar = document.querySelector('.search-bar');
var jumbotronSubtitle = document.querySelector('.jumbotron__subtitle');
var jumbotronTitle = document.querySelector('.jumbotron__title');
var currentSubTitle = "APPLICATION EXCLUSIVE";
var currentTitle = "Today’s Photo";

function onSearchBarInput(event) {

  if (event.target.value.length > 0) {
    currentSubTitle = "SEARCH FOR";
    currentTitle = event.target.value;
  } else {
    currentSubTitle = "APPLICATION EXCLUSIVE";
    currentTitle = "Today’s Photo";
  }

  jumbotronSubtitle.innerHTML = currentSubTitle;
  jumbotronTitle.innerHTML = currentTitle;
}

searchBar.addEventListener('input', onSearchBarInput);

anime.timeline({loop: false})
  .add({
    targets: '.jumbotron',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 500
  }).add({
    targets: '.file-section h2',
    translateY:[-30, 0],
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 280,
    offset: "-=350"
  }).add({
    targets: '.file-list',
    translateY:[-30, 0],
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 280,
    delay: function(el, i, l) {
      return (i * 50);
    },
    offset: "-=150"
  }).add({
    targets: '.user-section h2',
    translateY:[-30, 0],
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 280,
    offset: "-=240"
  }).add({
    targets: '.user-list',
    translateY:[-30, 0],
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 280,
    delay: function(el, i, l) {
      return (i * 50);
    },
    offset: "-=150"
  }).add({
    targets: '.note-section h2',
    translateY:[-30, 0],
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 280,
    offset: "-=240"
  }).add({
    targets: '.note-section p',
    translateY:[-30, 0],
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 280,
    delay: function(el, i, l) {
      return (i * 50);
    },
    offset: "-=150"
  })


var userItems = document.querySelectorAll('.user-list-item');

userItems.forEach(function(userItem) {
  userItem.addEventListener('mouseenter', function(e) {
    anime.remove(e.target);
    anime({
      targets: e.target,
      scale: 1.1,
      easing: "easeInOutSine",
      duration: 250
    });

    var itemTitle = e.target.querySelector('.user-list-item__name').innerHTML;

    jumbotronSubtitle.innerHTML = "USER";
    jumbotronTitle.innerHTML = itemTitle;
  });

  userItem.addEventListener('mouseleave', function(e) {
    anime.remove(e.target);
    anime({
      targets: e.target,
      scale: 1,
      easing: "easeInOutSine",
      duration: 250
    });

    jumbotronSubtitle.innerHTML = currentSubTitle;
    jumbotronTitle.innerHTML = currentTitle;
  });
});

var fileItems = document.querySelectorAll('.file-list-item');

fileItems.forEach(function(fileItem) {
  fileItem.addEventListener('mouseenter', function(e) {
    anime.remove(fileItem);
    anime({
      targets: fileItem,
      scale: 1.1,
      easing: "easeInOutSine",
      duration: 250
    });

    var itemTitle = e.target.querySelector('h3').innerHTML;
    var itemSubtitle = e.target.querySelector('.file-list-item__subtitle').innerHTML;

    jumbotronSubtitle.innerHTML = itemSubtitle;
    jumbotronTitle.innerHTML = itemTitle;
  });

  fileItem.addEventListener('mouseleave', function(e) {
    anime.remove(fileItem);
    anime({
      targets: fileItem,
      scale: 1,
      easing: "easeInOutSine",
      duration: 250
    });

    jumbotronSubtitle.innerHTML = currentSubTitle;
    jumbotronTitle.innerHTML = currentTitle;
  });
});
