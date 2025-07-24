gsap.registerPlugin(ScrollTrigger);

const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('fullscreenNav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('active');
  toggle.classList.toggle('open');
  toggle.setAttribute("aria-expanded", isOpen);
});

// Preloader animation
gsap.to(".om-symbol", {
  duration: 2,
  opacity: 1,
  scale: 1,
  ease: "power2.out",
  repeat: -1,
  yoyo: true
});

setTimeout(() => {
  gsap.to("#preloader", {
    y: "-100%",
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => {
      document.getElementById("preloader").style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}, 3000);

// Scroll animation for about cards
gsap.utils.toArray(".highlight-card").forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play reverse play reverse" 
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    delay: i * 0.2
  });
});


// Smooth scroll + auto-close menu when clicking a link
document.querySelectorAll(".fullscreen-nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute("href").replace("#", "");
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Smooth scroll to section
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Close the fullscreen nav
    nav.classList.remove("active");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// GSAP animation for session cards
document.querySelectorAll('.session-card').forEach((card, i) => {
  gsap.set(card, { scale: 1 });

  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.inOut',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    });
  });
});

document.querySelectorAll('.session-card').forEach((card) => {
  const content = card.querySelector('.card-content');
  gsap.set(content, { y: 50, opacity: 0 });

  card.addEventListener('mouseenter', () => {
    gsap.to(content, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(content, { y: 50, opacity: 0, duration: 0.3, ease: "power2.inOut" });
  });
});


function toggleSession(clickedCard) {
  const allCards = document.querySelectorAll('.session-card');

  allCards.forEach(card => {
    if (card !== clickedCard) {
      card.querySelector('.subsession-card').classList.add('hidden');
    }
  });

  const subsession = clickedCard.querySelector('.subsession-card');
  subsession.classList.toggle('hidden');
}
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  this.reset();
});
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("successPopup").style.display = "flex";
  this.reset();
});

function closePopup() {
  document.getElementById("successPopup").style.display = "none";
}


// Show button when scrolling down
window.addEventListener("scroll", () => {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Scroll to top when clicked
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Animate all section headings and subtitles on scroll
gsap.utils.toArray(".section-title, .section-description").forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reverse play reverse" 
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    delay: i * 0.1,
  });
});
gsap.from(".overlay-title", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out",
  delay: 3.2 // after preloader

});

gsap.from(".overlay-subtitle", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power2.out",
  delay: 3.5
});

gsap.from(".cta-button", {
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  ease: "back.out(1.7)",
  delay: 3.8
});
gsap.utils.toArray(".session-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play reverse play reverse" 
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
    delay: i * 0.1
  });
});
gsap.utils.toArray(".contact-form input, .contact-form textarea, .contact-form button").forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      toggleActions: "play reverse play reverse" 
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out",
    delay: i * 0.1
  });
});
function showPopup() {
  const popup = document.getElementById("successPopup");
  popup.style.display = "flex";
  gsap.fromTo(popup, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" });
}
function closePopup() {
  gsap.to("#successPopup", {
    opacity: 0,
    scale: 0.8,
    duration: 0.4,
    ease: "power2.in",
    onComplete: () => {
      document.getElementById("successPopup").style.display = "none";
    }
  });
}
gsap.to(".hero-bg", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    toggleActions: "play reverse play reverse" 
  },
  scale: 1.05,
  y: -50,
  ease: "none"
});
window.addEventListener("pageshow", (event) => {
  // Recalculate ScrollTrigger positions if page is restored from cache
  if (event.persisted) {
    ScrollTrigger.refresh();
  }
});
