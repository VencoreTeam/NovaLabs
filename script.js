  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');

mobileMenuIcon.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelectorAll(".notificationBtn").forEach(function(button) {
button.addEventListener("click", function() {
    var notification = this.nextElementSibling;
    notification.innerText = "This feature isn't done yet!";
    notification.style.display = "block";
    setTimeout(function() {
        notification.style.display = "none";
    }, 3000);
});
});
