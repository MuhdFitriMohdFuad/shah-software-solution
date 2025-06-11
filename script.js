document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
        sendMail();
    });
});

function sendMail() {
    const sendButton = document.querySelector("button[type='submit']");
    const originalText = sendButton.textContent;
    sendButton.disabled = true;

    // Start the animated "Sending..." text
    let dotCount = 0;
    const loadingText = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        sendButton.textContent = "Sending" + ".".repeat(dotCount);
    }, 500);

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject") ? document.getElementById("subject").value : "",
        message: document.getElementById("message").value
    };

    emailjs.send("service_y1262c6", "template_dbr4uds", params)
        .then(() => {
            clearInterval(loadingText);
            sendButton.textContent = "Message Sent!";
            document.getElementById("contactForm").reset();
            alert("Message sent successfully!");
            setTimeout(() => {
                sendButton.disabled = false;
                sendButton.textContent = originalText;
            }, 2000); // restore after 2 seconds
        })
        .catch((err) => {
            clearInterval(loadingText);
            sendButton.disabled = false;
            sendButton.textContent = originalText;

            console.error("EmailJS Error:", err);
            alert("Failed to send message. Please try again later.");
        });
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu li a').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(10, 10, 10, 0.98)';
  } else {
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);



// Observe all cards and sections for scroll animations
document.querySelectorAll('.service-card, .pricing-card, .about-content, .contact-grid').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

console.log("script.js is loaded");

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("contactForm");

//     form.addEventListener("submit", function (e) {
//       e.preventDefault();

//       const formData = new FormData(form);
//       const params = {
//         from_name: formData.get("name"),
//         from_email: formData.get("email"),
//         from_phone: formData.get("phone"),
//         message: formData.get("message"),
//       };

//       emailjs.send("service_y1262c6", "template_dbr4uds", params)
//         .then(() => {
//           alert("Message sent!");
//           form.reset();
//         })
//         .catch((err) => {
//           console.error("EmailJS Error:", err);
//         });
//     });
// });
// Add typing effect to hero title
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

// Initialize typing effect when page loads
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const titleText = heroTitle.textContent;
    typeWriter(heroTitle, titleText, 80);
  }
});

// Add parallax effect to floating elements
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const elements = document.querySelectorAll('.element');
  
  elements.forEach((element, index) => {
    const speed = 0.1 + (index * 0.05);
    element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
  });
});

// Add click effect to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .btn-primary, .btn-secondary {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
