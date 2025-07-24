gsap.registerPlugin(ScrollTrigger);

// Animate Hero
gsap.from(".yoga-title", {
  y: -40,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".yoga-subtitle", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power2.out"
});

// Animate session cards
gsap.utils.toArray(".yoga-session-box").forEach((box, i) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: i * 0.1,
    ease: "power2.out"
  });
});

// Initialize all swipers
document.querySelectorAll('.swiper').forEach(swiperContainer => {
  new Swiper(swiperContainer, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: swiperContainer.querySelector('.swiper-button-next'),
      prevEl: swiperContainer.querySelector('.swiper-button-prev'),
    },
    grabCursor: true
  });
});
