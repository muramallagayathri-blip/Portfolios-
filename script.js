const nameText = "Rongala Kiran Koteswarao";
let i = 0;
const typingElement = document.getElementById("typing");

function typeName() {
  if (i < nameText.length) {
    typingElement.innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeName, 150);
  }
}
typeName();

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});

// Back-to-top button
const backToTop = document.createElement('button');
backToTop.textContent = "↑ Top";
backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.padding = "10px 15px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "5px";
backToTop.style.background = "#0078ff";
backToTop.style.color = "white";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";

  // Fade-in sections on scroll
  document.querySelectorAll('.fade').forEach(section => {
    const top = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (top < screenHeight - 100) {
      section.classList.add('visible');
    }
  });
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic greeting
window.addEventListener('DOMContentLoaded', () => {
  const greeting = document.getElementById('greeting');
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) message = "Good Morning! 🌞";
  else if (hour < 18) message = "Good Afternoon! ☀️";
  else message = "Good Evening! 🌙";

  greeting.textContent = message;
});

// Animate skills bars when section comes into view
function animateSkills() {
  const skillsSection = document.getElementById('skills');
  const top = skillsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if (top < screenHeight - 100) {
    document.querySelectorAll('.progress-bar').forEach(bar => {
      bar.style.width = bar.style.width;
    });
    window.removeEventListener('scroll', animateSkills);
  }
}
window.addEventListener('scroll', animateSkills);