window.addEventListener('scroll', function () {
    var topBar = document.querySelector('.top-bar');
    var images = document.querySelector('#images')
    var users = document.querySelector('#users')
    var circle = document.querySelector(".circle")
    var circleText = document.querySelector(".circle-text")
    if (window.scrollY > 0) { // Check if page is scrolled
        // Add class to make top-bar visible
        topBar.style.boxShadow = '0 0 5px rgb(' + '0' + ',' + '0' + ',' + '0' + ', ' + '0.4' + ')';
        topBar.style.backgroundColor = 'rgb(' + '230' + ',' + '230' + ',' + '230' + ',' + '0.7' + ')';
        topBar.style.border = '1px solid white'
        topBar.style.transition = ".2s"
        images.src = "profile.jpg"
        images.classList.add('profile')
        images.style.display = "block";
        users.classList.add('user')
        users.innerHTML = "@nabildzr"
        circle.style.boxShadow = null;
        circle.style.transition = ".2s"
        circle.style.background = 'black'
        circleText.style.color = 'white'
    } else {

        images.classList.remove('profile')
        users.classList.remove('user')
        users.innerHTML = null;
        images.style.display = "none";
        topBar.style.backgroundColor = null;
        topBar.style.border = null;
        topBar.style.boxShadow = null;
        circle.style.background = 'white'
        circle.style.boxShadow = '0 0 5px rgb(' + '0' + ',' + '0' + ',' + '0' + ', ' + '0.8' + ')';
        circleText.style.color = 'black'
    }
});

var circles = document.querySelector(".circle")



let isShown = false;

circles.addEventListener('click', function () {
    var topBar = document.querySelector('.top-bar');
    var images = document.querySelector('#images');
    var users = document.querySelector('#users');
    var circle = document.querySelector(".circle");
    var circleText = document.querySelector(".circle-text");

    // Toggle the flag
    isShown = !isShown;

    if (isShown) {
        // Show elements
        topBar.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.4)';
        topBar.style.backgroundColor = 'rgba(230, 230, 230, 0.7)';
        topBar.style.border = '1px solid white';
        topBar.style.transition = ".2s";
        images.src = "profile.jpg";
        images.classList.add('profile');
        images.style.display = "block";
        users.classList.add('user');
        users.innerHTML = "@nabildzr";
        circle.style.boxShadow = 'none';
        circle.style.transition = ".2s";
        circle.style.background = 'black';
        circleText.style.color = 'white';
    } else {
        // Hide elements
        images.classList.remove('profile');
        users.classList.remove('user');
        users.innerHTML = "";
        images.style.display = "none";
        topBar.style.backgroundColor = "";
        topBar.style.border = "";
        topBar.style.boxShadow = "";
        circle.style.background = 'white';
        circle.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.8)';
        circleText.style.color = 'black';
    }
});