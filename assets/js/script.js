document.addEventListener('DOMContentLoaded', () => {
    
    const typingSpan = document.querySelector('.typing');
    if (typingSpan) {
        const text = "интерфейсы будущего";
        let index = 0;
        typingSpan.textContent = ""; 

        function typeEffect() {
            if (index < text.length) {
                typingSpan.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100);
            }
        }
        setTimeout(typeEffect, 1000); 
    }

const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursor.style.opacity = "1";
    follower.style.opacity = "1";

    requestAnimationFrame(() => {
        cursor.style.transform = `translate(${posX}px, ${posY}px)`;
        follower.style.transform = `translate(${posX - 20}px, ${posY - 20}px)`;
    });
});

const activeElements = document.querySelectorAll('a, button, .contact-card-link, input, textarea');
activeElements.forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('cursor-active'));
    el.addEventListener('mouseleave', () => follower.classList.remove('cursor-active'));
});

    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        });
    }

    const contactCards = document.querySelectorAll('.contact-card-link');
    contactCards.forEach(card => {
        const icon = card.querySelector('i');
        if (icon) {
            card.addEventListener('mouseenter', () => icon.classList.add('pulse-animation'));
            card.addEventListener('mouseleave', () => icon.classList.remove('pulse-animation'));
        }
    });
});


