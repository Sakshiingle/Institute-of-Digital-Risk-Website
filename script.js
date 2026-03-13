
document.addEventListener('DOMContentLoaded', function() {

  
  initNavbar();        // Set up the sticky navbar
  initMobileMenu();    // Set up the hamburger mobile menu
  initScrollReveal();  // Set up the scroll animations
  initHexGrid();       // Draw the background hex pattern
  initContactForm();   // Set up form validation
  initSmoothScroll();  // Set up smooth scrolling for all anchor links

});


function initNavbar() {

  const navbar = document.querySelector('.navbar');

 
  if (!navbar) return; 

 
  window.addEventListener('scroll', function() {

    
    if (window.scrollY > 50) {
      
      navbar.classList.add('scrolled');
     
    } else {
      
      navbar.classList.remove('scrolled');
      
    }

  });

  
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  }

}


// ================================================================
//  MOBILE MENU — Hamburger open/close
// ================================================================
function initMobileMenu() {

  
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  
  if (!hamburger || !navLinks) return;

  
  hamburger.addEventListener('click', function() {

    
    hamburger.classList.toggle('active');  // Animates lines into X
    navLinks.classList.toggle('open');     // Slides menu in/out

    
    const isOpen = navLinks.classList.contains('open');
    hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

  });

  
  const allNavLinks = document.querySelectorAll('.nav-link');

  
  allNavLinks.forEach(function(link) {

    link.addEventListener('click', function() {
      
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-label', 'Open menu');
    });

  });

 
  document.addEventListener('click', function(event) {
   
    const isInsideNav = document.querySelector('.navbar').contains(event.target);

    if (!isInsideNav && navLinks.classList.contains('open')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });

}


// ================================================================
//  SCROLL REVEAL ANIMATION
// ================================================================
function initScrollReveal() {

  
  const revealSelectors = [
    '.section-heading',
    '.section-sub',
    '.service-card',
    '.community-card',
    '.pipeline-step',
    '.about-text p',
    '.about-badges',
    '.contact-info',
    '.contact-form-wrap',
    '.hero-tag',
    '.hero-headline',
    '.hero-sub',
    '.hero-buttons',
    '.hero-stats',
    '.accred-badge',
    '.hero-visual'
  ];

  
  revealSelectors.forEach(function(selector) {
    document.querySelectorAll(selector).forEach(function(el, index) {
      el.classList.add('reveal');

      
      if (index < 6) {
        
        el.style.transitionDelay = (index * 0.1) + 's';
      }
    });
  });

  
  const observer = new IntersectionObserver(
    function(entries) {
      
      entries.forEach(function(entry) {
        
        if (entry.isIntersecting) {
          
          entry.target.classList.add('visible');
          
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, 
      rootMargin: '0px 0px -50px 0px'
      
    }
  );

  
  document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el);
  });

}


// ================================================================
//  HERO BACKGROUND HEX GRID
// ================================================================
function initHexGrid() {

  const hexGrid = document.querySelector('.hex-grid');
  if (!hexGrid) return;

 
  const count = 80;

  
  for (let i = 0; i < count; i++) {

    
    const hex = document.createElement('div');

  
    hex.className = 'hex-cell';

    
    hex.style.cssText = `
      position: absolute;
      width: ${Math.random() * 60 + 20}px;
      height: ${Math.random() * 60 + 20}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      background: none;
      border: 1px solid rgba(249, 115, 22, ${Math.random() * 0.3 + 0.05});
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      animation: hexFloat ${Math.random() * 8 + 6}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
      transform-origin: center;
    `;
    
    hexGrid.appendChild(hex);
  }

  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes hexFloat {
      0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
      33%       { transform: translateY(-15px) rotate(5deg); opacity: 0.6; }
      66%       { transform: translateY(8px) rotate(-3deg); opacity: 0.2; }
    }
  `;
  document.head.appendChild(style);
  
}


// ================================================================
// CONTACT FORM VALIDATION

// ================================================================
function initContactForm() {

  const form      = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const success   = document.getElementById('form-success');

  if (!form) return;

  
  form.addEventListener('submit', function(event) {

    
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
     

      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true; // disabled = can't be clicked

      
      setTimeout(function() {

        
        form.querySelectorAll('.form-group').forEach(function(group) {
          group.style.display = 'none';
        });

        
        submitBtn.style.display = 'none';

        
        success.classList.add('visible');

      
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';

      }, 1500); 
    }

  });


  
  const nameInput    = document.getElementById('name');
  const emailInput   = document.getElementById('email');
  const messageInput = document.getElementById('message');

  
  if (nameInput) {
    
    nameInput.addEventListener('input', function() {
      clearError('name');
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', function() {
      clearError('email');
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', function() {
      clearError('message');
    });
  }

}


// ── VALIDATE FORM ──

function validateForm() {

  let isValid = true; // Assume valid until we find an error

  // ── Validate name ──
  const nameInput = document.getElementById('name');
  const nameVal   = nameInput.value.trim();
  

  if (nameVal === '') {
    // Empty — show error
    showError('name', 'Please enter your full name');
    isValid = false; // Mark form as invalid
  } else if (nameVal.length < 2) {
    // Too short
    showError('name', 'Name must be at least 2 characters');
    isValid = false;
  }

  // ── Validate email ──
  const emailInput = document.getElementById('email');
  const emailVal   = emailInput.value.trim();

  if (emailVal === '') {
    showError('email', 'Please enter your email address');
    isValid = false;
  } else if (!isValidEmail(emailVal)) {
    
    showError('email', 'Please enter a valid email address');
    isValid = false;
  }

  // ── Validate message ──
  const messageInput = document.getElementById('message');
  const messageVal   = messageInput.value.trim();

  if (messageVal === '') {
    showError('message', 'Please enter a message');
    isValid = false;
  } else if (messageVal.length < 10) {
    showError('message', 'Message must be at least 10 characters');
    isValid = false;
  }

  return isValid;
  

}


// ── SHOW ERROR ──

function showError(fieldId, message) {

  
  const input = document.getElementById(fieldId);
  
  const error = document.getElementById(fieldId + '-error');

  if (input)  input.classList.add('error');   // Red border on input
  if (error) {
    error.textContent = message;              // Set error text
    error.classList.add('visible');           // Make it visible
  }

}


// ── CLEAR ERROR ──

function clearError(fieldId) {

  const input = document.getElementById(fieldId);
  const error = document.getElementById(fieldId + '-error');

  if (input)  input.classList.remove('error');    // Remove red border
  if (error)  error.classList.remove('visible');  // Hide error message

}


// ── IS VALID EMAIL ──

function isValidEmail(email) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  

  return emailRegex.test(email);
 

}


// ================================================================
//  SMOOTH SCROLLING
// ================================================================
function initSmoothScroll() {

  
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(function(link) {

    link.addEventListener('click', function(event) {

      
      const targetId = link.getAttribute('href');

      
      if (targetId === '#') return;

      
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return; 

     
      event.preventDefault();

      
      const targetTop = targetEl.getBoundingClientRect().top + window.scrollY;

      
      const navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
        
      );

      const offsetTop = targetTop - navHeight - 16; // Extra 16px breathing room

     
      window.scrollTo({
        top: offsetTop,   // Y position to scroll to
        behavior: 'smooth' // Smooth animation
      });

    });

  });

}


// ================================================================
// .ACTIVE NAV LINK HIGHLIGHT

// ================================================================
(function() {
  

  
  const sections = document.querySelectorAll('section[id]');
  

  const navLinks = document.querySelectorAll('.nav-link:not(.nav-cta)');
  
  window.addEventListener('scroll', function() {

    let currentSection = ''; 
    sections.forEach(function(section) {

      

      
      if (sectionTop <= 200) {
        currentSection = section.getAttribute('id');
        
      }

    });

    // Update nav link styles
    navLinks.forEach(function(link) {

      link.classList.remove('active'); 

      
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }

    });

  });

  // Add CSS for the active state
  const style = document.createElement('style');
  style.textContent = `
    .nav-link.active {
      color: var(--white);
    }
    .nav-link.active::after {
      width: 100%;
    }
  `;
  document.head.appendChild(style);

})(); 