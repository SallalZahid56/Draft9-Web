function toggleMenu(button) {
  const targetId = button.getAttribute("data-bs-target");
  const target = document.querySelector(targetId);

  // Toggle .active class for cross animation
  button.classList.toggle("active");

  if (target.classList.contains("show")) {
    const bsCollapse = bootstrap.Collapse.getInstance(target);
    bsCollapse.hide();
  } else {
    const bsCollapse = new bootstrap.Collapse(target);
    bsCollapse.show();
  }
}

// Hero Section images
window.addEventListener("scroll", () => {
  const row = document.querySelector(".image-row");
  const offset = window.scrollY * 0.05; // Control scroll sensitivity
  row.style.transform = `translateX(-${offset}px)`;
});

// Testimonial slider
// Custom Play/Pause
document.querySelectorAll(".custom-video-wrapper").forEach((wrapper) => {
  const video = wrapper.querySelector("video");
  const btn = wrapper.querySelector(".play-pause-btn");
  const icon = btn.querySelector("i");

  wrapper.addEventListener("click", () => {
    wrapper.classList.add("showing");

    if (video.paused) {
      video.play();
      wrapper.classList.add("playing");
      icon.classList.replace("fa-play", "fa-pause");
    } else {
      video.pause();
      wrapper.classList.remove("playing");
      icon.classList.replace("fa-pause", "fa-play");
    }
  });

  // Optional: Hide the button again after a few seconds
  video.addEventListener("play", () => {
    setTimeout(() => wrapper.classList.remove("showing"), 2000);
  });
});

// Swiper Init
const swiper = new Swiper(".testimonial-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});




// Faq section
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      item.classList.toggle('active');

      // Toggle icon
      const icon = button.querySelector('.faq-icon');
      icon.textContent = item.classList.contains('active') ? '−' : '+';
    });
  });