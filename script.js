// Navigation functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
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

// Project modal functionality
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

const projectDetails = {
    luminoai: {
        title: 'LuminoAI',
        description: 'An innovative AI system that automatically generates educational videos using advanced machine learning technologies.',
        features: [
            'Gemini API integration for intelligent content generation',
            'Google Text-to-Speech for natural narration',
            'Clean, responsive frontend built with HTML and CSS',
            'Secure data handling with Google Cloud Storage',
            'IAM roles and API key protection for enhanced security',
            'Fast, modular backend architecture using FastAPI'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'FastAPI', 'Google Cloud Storage', 'Gemini API', 'Google Text-to-Speech'],
        challenges: 'Integrating multiple AI services while maintaining performance and security standards.',
        impact: 'Streamlined educational content creation process, reducing production time by 70%.'
    },
    clothesline: {
        title: 'ClothesLine',
        description: 'A sophisticated AI-powered e-commerce platform that revolutionizes online shopping with personalized recommendations.',
        features: [
            'AI-powered product recommendations using content-based filtering',
            'Smart suggestions based on item attributes (category, gender, price)',
            'No login required for personalized experience',
            'Responsive React.js frontend with modern UI/UX',
            'Secure payment integration with PayPal API',
            'Full MERN stack implementation'
        ],
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'PayPal API', 'Machine Learning', 'Content-Based Filtering'],
        challenges: 'Implementing effective recommendation algorithms without user login data.',
        impact: 'Increased user engagement by 45% and conversion rates by 30%.'
    },
    securecomply: {
        title: 'SecureComply',
        description: 'Award-winning security compliance system that automates audit checks for CIS benchmarks - Winner of Smart India Hackathon 2024.',
        features: [
            'Automated audit script generation for Windows 11 and Linux',
            'CIS benchmark compliance evaluation',
            'Comprehensive vulnerability identification',
            'Detailed security reports generation',
            'User-friendly admin dashboard',
            'Real-time system configuration monitoring'
        ],
        technologies: ['Frontend Development', 'Dashboard Design', 'Security Frameworks', 'Compliance Standards', 'System Administration'],
        challenges: 'Creating comprehensive audit scripts that work across different operating systems.',
        impact: 'Recognized by NTRO and won Smart India Hackathon 2024 for solving critical cybersecurity challenges.'
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectKey = card.getAttribute('data-project');
        const project = projectDetails[projectKey];
        
        if (project) {
            modalBody.innerHTML = `
                <h2>${project.title}</h2>
                <p class="project-modal-description">${project.description}</p>
                
                <h3>Key Features</h3>
                <ul class="project-features">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <h3>Technologies Used</h3>
                <div class="project-modal-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                
                <h3>Challenges & Solutions</h3>
                <p class="project-challenges">${project.challenges}</p>
                
                <h3>Impact</h3>
                <p class="project-impact">${project.impact}</p>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact form functionality
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon!`);
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

// Observe all sections for loading animations
document.querySelectorAll('section').forEach(section => {
    section.classList.add('loading');
    observer.observe(section);
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Skills animation on scroll
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = `slideInUp 0.6s ease forwards`;
            }, index * 100);
        }
    });
}, { threshold: 0.5 });

skillItems.forEach(item => {
    skillObserver.observe(item);
});

// Add CSS for skill animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .project-modal-description {
        font-size: 1.1rem;
        color: var(--text-light);
        margin-bottom: 2rem;
        line-height: 1.6;
    }
    
    .project-features {
        list-style: none;
        padding: 0;
        margin-bottom: 2rem;
    }
    
    .project-features li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.8rem;
        color: var(--text-light);
        line-height: 1.6;
    }
    
    .project-features li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--primary-color);
        font-weight: bold;
    }
    
    .project-modal-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;
    }
    
    .tech-tag {
        background: var(--gradient-primary);
        color: white;
        padding: 0.4rem 0.8rem;
        border-radius: 15px;
        font-size: 0.9rem;
        font-weight: 500;
    }
    
    .project-challenges,
    .project-impact {
        color: var(--text-light);
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }
    
    .project-impact {
        background: var(--bg-light);
        padding: 1rem;
        border-radius: 10px;
        border-left: 4px solid var(--primary-color);
    }
    
    #modal-body h2 {
        color: var(--text-dark);
        margin-bottom: 1rem;
        font-size: 1.8rem;
    }
    
    #modal-body h3 {
        color: var(--primary-color);
        margin: 2rem 0 1rem 0;
        font-size: 1.2rem;
    }
`;

document.head.appendChild(style);

// Add loading screen
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Smooth reveal animations for cards
const cards = document.querySelectorAll('.project-card, .achievement-card, .skill-category');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    cardObserver.observe(card);
});

console.log('Portfolio website loaded successfully! 🚀');