'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const menuBtn = document.querySelector('.menu-button');
    const mobileNav = document.querySelector('.mobile-nav');
    const iconBars = document.querySelector('.fa-bars');
    const iconTimes = document.querySelector('.fa-times');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            const isHidden = window.getComputedStyle(mobileNav).display === 'none';
            if (isHidden) {
                mobileNav.style.display = 'flex';
                iconBars.style.display = 'none';
                iconTimes.style.display = 'block';
            } else {
                mobileNav.style.display = 'none';
                iconBars.style.display = 'block';
                iconTimes.style.display = 'none';
            }
        });
    }

    // --- 2. Smooth Scrolling & Active Link highlighting ---
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                e.preventDefault();
                
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                if(mobileNav.style.display === 'flex') {
                    mobileNav.style.display = 'none';
                    iconBars.style.display = 'block';
                    iconTimes.style.display = 'none';
                }

                if(targetId === '#') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                }
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    const headerOffset = document.getElementById('main-header').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 3. Return to Top Button ---
    const returnBtn = document.getElementById('return-button');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            returnBtn.style.display = 'block';
        } else {
            returnBtn.style.display = 'none';
        }
    });

    returnBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 4. Tabs Toggle (Edu, Job, Cert) ---
    const tabBtns = [
        { btn: document.getElementById('edu-btn'), content: document.getElementById('education-tab') },
        { btn: document.getElementById('job-btn'), content: document.getElementById('trabalhos-tab') },
        { btn: document.getElementById('cert-btn'), content: document.getElementById('cert-tab') }
    ];

    tabBtns.forEach(item => {
        if(item.btn && item.content) {
            item.btn.addEventListener('click', () => {
                // Remove active classes and hide contents
                tabBtns.forEach(t => {
                    t.btn.classList.remove('active-tab');
                    t.content.style.display = 'none';
                });
                
                // Add active class and show content
                item.btn.classList.add('active-tab');
                item.content.style.display = 'block';
            });
        }
    });


    // --- 5. Dynamic Footer Year ---
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // --- 6. Scroll Reveal Animations (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const fadeElements = document.querySelectorAll('.item-fade, .section-fade');
    
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });
});