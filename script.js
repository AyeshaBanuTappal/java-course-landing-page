// Intro Script
const welcomePage = document.getElementById('welcomePage');
const imagePage = document.getElementById('imagePage');
const mainContent = document.getElementById('mainContent');
setTimeout(() => {
  welcomePage.style.opacity = '0';
  setTimeout(() => {
    welcomePage.style.display = 'none';
    imagePage.classList.add('visible');
    setTimeout(() => {
      imagePage.classList.remove('visible');
      setTimeout(() => {
        imagePage.style.display = 'none';
        mainContent.style.visibility = 'visible';
        document.body.style.overflowY = 'auto';
        AOS.init({ once: true, duration: 800 });
      }, 1000);
    }, 3000);
  }, 1000);
}, 4000);

// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  themeToggle.textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  themeToggle.textContent = '🌙';
}

// Live Code Animation with Intersection Observer
const codeDemo = document.getElementById('java-code-demo');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        new TypeIt("#java-code-demo", {
            speed: 50,
            startDelay: 900,
            waitUntilVisible: true,
            cursorChar: "▋"
        })
        .type('// 1. Define the Student class', {delay: 300})
        .break()
        .type('class <span style="color:#61AFEF;">Student</span> {', {delay: 300})
        .break()
        .type('    <span style="color:#E06C75;">int</span> id;', {delay: 300}).break()
        .type('    <span style="color:#E06C75;">String</span> name;', {delay: 300}).break({ delay: 300 })
        .type('    <span style="color:#C678DD;">void</span> <span style="color:#61AFEF;">displayDetails</span>() {', {delay: 300}).break()
        .type('        System.out.println("Student ID: " + id);', {delay: 300}).break()
        .type('    }', {delay: 300})
        .break({ delay: 700 })
        .type('// 2. Create a Demo class to run the code', {delay: 300})
        .break()
        .type('<span style="color:#C678DD;">public</span> class <span style="color:#61AFEF;">StudentDemo</span> {', {delay: 300}).break()
        .type('    <span style="color:#C678DD;">public static void</span> <span style="color:#61AFEF;">main</span>(<span style="color:#E06C75;">String</span>[] args) {', {delay: 300}).break()
        .type('        // Create an object of Student class', {delay: 300}).break()
        .type('        <span style="color:#61AFEF;">Student</span> s1 = <span style="color:#C678DD;">new</span> <span style="color:#61AFEF;">Student</span>();', {delay: 300}).break({ delay: 500 })
        .type('        // Set the details', {delay: 300}).break()
        .type('        s1.id = 101;', {delay: 300}).break()
        .type('        s1.name = "Ayesha";', {delay: 300}).break({ delay: 500 })
        .type('        // Call the method to display details', {delay: 300}).break()
        .type('        s1.displayDetails();', {delay: 300}).break()
        .type('    }', {delay: 300}).break()
        .type('}', {delay: 300})
        .go();
        
        observer.unobserve(codeDemo); // Only run the animation once
    }
}, { threshold: 0.5 });

observer.observe(codeDemo);

// Slider script
const slidesContainer = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.slider-dots');

let currentIndex = 0; const totalSlides = slideElements.length;
let autoSlideInterval;

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => { goToSlide(i); resetAutoSlide(); });
  dotsContainer.appendChild(dot);
}
const dots = document.querySelectorAll('.dot');
function updateDots() {
  dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
}
function goToSlide(index) {
  currentIndex = (index + totalSlides) % totalSlides;
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
  updateDots();
}
function startAutoSlide() {
  autoSlideInterval = setInterval(() => goToSlide(currentIndex + 1), 4000);
}
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}
prevBtn.addEventListener('click', () => { goToSlide(currentIndex - 1); resetAutoSlide(); });
nextBtn.addEventListener('click', () => { goToSlide(currentIndex + 1); resetAutoSlide(); });
goToSlide(0);
startAutoSlide();

// --- NEW JAVASCRIPT: Mobile Hamburger Menu Logic ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Automatically close the mobile menu when any link is clicked
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});