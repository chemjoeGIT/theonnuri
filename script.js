// Initialize AOS (Animate On Scroll)
// Disable on mobile to prevent dizziness
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    disable: function() {
        return window.innerWidth < 768;
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero section (disabled on mobile)
window.addEventListener('scroll', function() {
    if (window.innerWidth >= 768) {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// Add sparkle effect on scroll (disabled on mobile)
function createSparkle() {
    if (window.innerWidth >= 768) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }
}

// Create sparkles periodically
setInterval(createSparkle, 2000);

// Add floating animation to invitation icon
const invitationIcon = document.querySelector('.invitation-icon');
if (invitationIcon) {
    setInterval(() => {
        invitationIcon.style.animation = 'none';
        setTimeout(() => {
            invitationIcon.style.animation = 'float 3s ease-in-out infinite';
        }, 10);
    }, 3000);
}

// Console message
console.log('2025 찬양예배 - 마하나임 & 트리니티');
console.log('전주온누리교회에서 여러분을 기다립니다');
