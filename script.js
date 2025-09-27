
document.addEventListener('DOMContentLoaded', () => {

    // --- Dynamic Year ---
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // --- Mobile Navigation ---
    
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    //hamburger icon
    hamburger.addEventListener('click', () => {
        mainNav.classList.toggle('is-active');
        hamburger.classList.toggle('is-active');
    });

    //navigation link 
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('is-active')) {
                mainNav.classList.remove('is-active');
                hamburger.classList.remove('is-active');
            }
        });
    });

    // --- GSAP Scroll Animations ---

    gsap.registerPlugin(ScrollTrigger);

    // Animate project cards 
    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%", 
        },
        opacity: 0,
        y: 50, // 
        duration: 0.5,
        stagger: 0.2 
    });

    //skill items
    gsap.from(".skill-item", {
        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1
    });

    // Animate About section
    gsap.from("#about .about-container", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
    });

    // Animate Contact section
    gsap.from("#contact .contact-form", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
    });

    // --- Hero Section Animation
    gsap.from(".hero-image", { duration: 1, scale: 0, opacity: 0, ease: "power2.out", delay: 0.2 });
    gsap.from(".hero-title", { duration: 1, y: -50, opacity: 0, ease: "power2.out", delay: 0.5 });
    gsap.from(".hero-subtitle", { duration: 1, y: -50, opacity: 0, ease: "power2.out", delay: 0.7 });
    gsap.from("#hero .btn", { duration: 1, y: -50, opacity: 0, ease: "power2.out", delay: 0.9 });

});