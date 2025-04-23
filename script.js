"use strict";

// DUDES 'N' DAMES - Fashion Website JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  setTimeout(function () {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";

      // Trigger entrance animations after preloader
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        element.classList.add("visible");
      });
    }, 500);
  }, 1500);

  // Header scroll effect
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeMenu = document.querySelector(".close-menu");

  menuToggle.addEventListener("click", function () {
    mobileNav.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeMenu.addEventListener("click", function () {
    mobileNav.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Close mobile menu when clicking on navigation links
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Back to top button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      scrollToTopBtn.classList.add("active");
    } else {
      scrollToTopBtn.classList.remove("active");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Gallery filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      // Show or hide gallery items based on filter
      galleryItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 100);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Gallery Modal
  const galleryModal = document.getElementById("gallery-modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalCategory = document.getElementById("modal-category");
  const modalClose = document.querySelector(".modal-close");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentIndex = 0;
  const galleryData = [];

  // Populate gallery data
  galleryItems.forEach((item, index) => {
    const img = item.querySelector("img");
    const title = item.querySelector(".gallery-info h3").textContent;
    const category = item.querySelector(".gallery-info p").textContent;

    galleryData.push({
      src: img.src,
      title: title,
      category: category,
    });

    item.addEventListener("click", function () {
      currentIndex = index;
      updateModal();
      galleryModal.style.display = "block";
      document.body.style.overflow = "hidden";

      // Add fade-in animation
      modalImage.style.opacity = "0";
      setTimeout(() => {
        modalImage.style.opacity = "1";
      }, 100);
    });
  });

  function updateModal() {
    modalImage.src = galleryData[currentIndex].src;
    modalTitle.textContent = galleryData[currentIndex].title;
    modalCategory.textContent = galleryData[currentIndex].category;
  }

  modalClose.addEventListener("click", function () {
    galleryModal.style.display = "none";
    document.body.style.overflow = "";
  });

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;

    // Add slide transition
    modalImage.style.opacity = "0";
    setTimeout(() => {
      updateModal();
      modalImage.style.opacity = "1";
    }, 300);
  });

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % galleryData.length;

    // Add slide transition
    modalImage.style.opacity = "0";
    setTimeout(() => {
      updateModal();
      modalImage.style.opacity = "1";
    }, 300);
  });

  // Close modal when clicking outside the image
  galleryModal.addEventListener("click", function (e) {
    if (e.target === galleryModal) {
      galleryModal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  // Keyboard navigation for gallery modal
  document.addEventListener("keydown", function (e) {
    if (galleryModal.style.display === "block") {
      if (e.key === "ArrowLeft") {
        prevBtn.click();
      } else if (e.key === "ArrowRight") {
        nextBtn.click();
      } else if (e.key === "Escape") {
        modalClose.click();
      }
    }
  });

  // Testimonials slider
  const testimonialSlider = document.getElementById("testimonials-slider");
  const testimonialItems = document.querySelectorAll(".testimonial-item");
  const prevTestimonial = document.getElementById("prev-testimonial");
  const nextTestimonial = document.getElementById("next-testimonial");
  const indicators = document.querySelectorAll(".indicator");

  let testimonialIndex = 0;

  function showTestimonial(index) {
    // Hide all testimonials
    testimonialItems.forEach((item) => {
      item.style.opacity = "0";
      setTimeout(() => {
        item.style.display = "none";
      }, 300);
    });

    // Remove active class from all indicators
    indicators.forEach((ind) => ind.classList.remove("active"));

    // Show current testimonial
    testimonialItems[index].style.display = "block";
    setTimeout(() => {
      testimonialItems[index].style.opacity = "1";
    }, 100);

    // Add active class to current indicator
    indicators[index].classList.add("active");

    testimonialIndex = index;
  }

  // Initial display
  showTestimonial(testimonialIndex);

  // Event listeners for controls
  prevTestimonial.addEventListener("click", function () {
    testimonialIndex =
      (testimonialIndex - 1 + testimonialItems.length) %
      testimonialItems.length;
    showTestimonial(testimonialIndex);
  });

  nextTestimonial.addEventListener("click", function () {
    testimonialIndex = (testimonialIndex + 1) % testimonialItems.length;
    showTestimonial(testimonialIndex);
  });

  // Event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      showTestimonial(index);
    });
  });

  // Auto slide testimonials
  let testimonialInterval = setInterval(function () {
    nextTestimonial.click();
  }, 5000);

  // Stop auto slide on hover
  testimonialSlider.addEventListener("mouseenter", function () {
    clearInterval(testimonialInterval);
  });

  testimonialSlider.addEventListener("mouseleave", function () {
    testimonialInterval = setInterval(function () {
      nextTestimonial.click();
    }, 5000);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // Add animation classes to elements
  document.querySelectorAll(".service-card").forEach((card, index) => {
    card.classList.add("animate-on-scroll");
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  document.querySelectorAll(".pricing-plan").forEach((plan, index) => {
    plan.classList.add("animate-on-scroll");
    plan.style.transitionDelay = `${index * 0.1}s`;
  });

  document.querySelectorAll(".gallery-item").forEach((item, index) => {
    item.classList.add("animate-on-scroll");
    item.style.transitionDelay = `${index * 0.05}s`;
  });

  document.querySelectorAll(".card-item").forEach((item, index) => {
    item.classList.add("animate-on-scroll");
    item.style.transitionDelay = `${index * 0.1}s`;
  });

  // Add parallax effect to hero section
  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });

  // Add parallax effect to contact CTA section
  const contactCta = document.querySelector(".contact-cta");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const contactCtaPosition = contactCta.offsetTop;
    const offset = scrollPosition - contactCtaPosition;

    if (offset > -window.innerHeight && offset < contactCta.offsetHeight) {
      contactCta.style.backgroundPositionY = `${offset * 0.2}px`;
    }
  });

  // Add hover effect to service cards
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      serviceCards.forEach((c) => {
        c.style.transform = "scale(0.95)";
        c.style.opacity = "0.7";
      });
      this.style.transform = "translateY(-10px) scale(1.05)";
      this.style.opacity = "1";
      this.style.zIndex = "2";
    });

    card.addEventListener("mouseleave", function () {
      serviceCards.forEach((c) => {
        c.style.transform = "scale(1)";
        c.style.opacity = "1";
        c.style.zIndex = "1";
      });
    });
  });

  // Add type writer effect to hero heading
  const heroHeading = document.querySelector(".hero-content h1");
  const originalText = heroHeading.textContent;
  heroHeading.textContent = "";

  let i = 0;
  function typeWriter() {
    if (i < originalText.length) {
      heroHeading.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  // Delay typewriter to allow for page load animations
  setTimeout(typeWriter, 2000);

  // Additional visual enhancements
  document.querySelectorAll(".accent").forEach((element) => {
    element.style.opacity = "0";
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transition = "opacity 1s ease";
    }, 2500);
  });

  // Add custom cursor for luxury feel
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  // Add cursor ring for elegant hover effect
  const cursorRing = document.createElement("div");
  cursorRing.classList.add("cursor-ring");
  document.body.appendChild(cursorRing);

  // Move custom cursor with mouse
  document.addEventListener("mousemove", function (e) {
    // Move main cursor dot
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // Move ring with slight delay for elegant effect
    cursorRing.style.left = `${e.clientX}px`;
    cursorRing.style.top = `${e.clientY}px`;
  });

  // Add cursor effects for interactive elements
  const interactiveElements = document.querySelectorAll(
    "a, button, .gallery-item, .card-item, .service-card, .pricing-plan"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      cursor.classList.add("cursor-grow");
      cursorRing.classList.add("ring-shrink");
    });

    element.addEventListener("mouseleave", function () {
      cursor.classList.remove("cursor-grow");
      cursorRing.classList.remove("ring-shrink");
    });
  });

  // Hide default cursor when custom cursor is active
  document.body.classList.add("custom-cursor-active");

  // Disable custom cursor on mobile/touch devices
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    cursor.style.display = "none";
    cursorRing.style.display = "none";
    document.body.classList.remove("custom-cursor-active");
  }

  // Add image zoom effect on hover for gallery items
  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.5s ease";
    });

    img.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Add smooth reveal animations for section headers
  document.querySelectorAll(".section-header").forEach((header) => {
    header.classList.add("animate-on-scroll");
    header.querySelector("h2").classList.add("slide-up");
    header.querySelector(".decorative-line").classList.add("expand");
  });

  // Animated counter for achievements
  const achievements = document.querySelectorAll(".achievement .number");
  const achievementsSection = document.querySelector(".about-owner");

  let achievementAnimated = false;

  function animateAchievements() {
    if (achievementAnimated) return;

    achievements.forEach((achievement) => {
      const target = parseInt(achievement.textContent);
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 30); // Update every 30ms
      let current = 0;

      const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
          achievement.textContent =
            target + (achievement.textContent.includes("+") ? "+" : "");
          clearInterval(timer);
        } else {
          achievement.textContent =
            Math.floor(current) +
            (achievement.textContent.includes("+") ? "+" : "");
        }
      }, 30);
    });

    achievementAnimated = true;
  }

  // Observe achievements section to trigger counter animation
  const achievementObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateAchievements();
        achievementObserver.unobserve(achievementsSection);
      }
    },
    { threshold: 0.5 }
  );

  achievementObserver.observe(achievementsSection);

  // Add hover effect to business cards
  document.querySelectorAll(".card-item").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.querySelector(".card-image").style.transform =
        "perspective(1000px) rotateY(5deg) rotateX(5deg)";
      this.querySelector(".card-overlay").style.opacity = "1";
    });

    card.addEventListener("mouseleave", function () {
      this.querySelector(".card-image").style.transform =
        "perspective(1000px) rotateY(0) rotateX(0)";
      this.querySelector(".card-overlay").style.opacity = "0";
    });

    // Add 3D tilt effect based on mouse position
    card.addEventListener("mousemove", function (e) {
      const cardRect = this.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;

      // Calculate rotation based on mouse distance from center
      const rotateY = mouseX * 0.01;
      const rotateX = -mouseY * 0.01;

      this.querySelector(
        ".card-image"
      ).style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
  });

  // Add scroll-triggered fade animations to footer columns
  document.querySelectorAll(".footer-column").forEach((column, index) => {
    column.classList.add("animate-on-scroll");
    column.style.transitionDelay = `${index * 0.2}s`;
  });

  // Luxury scroll effect - smooth scrolling for entire page
  const smoothScrollOptions = {
    damping: 0.1,
    thumbMinSize: 20,
    renderByPixels: true,
    alwaysShowTracks: false,
    continuousScrolling: true,
  };

  // Check if SmoothScroll library is available
  if (typeof Scrollbar !== "undefined") {
    Scrollbar.init(document.body, smoothScrollOptions);
  }

  // Add hover effect to navigation links
  document
    .querySelectorAll(".desktop-nav a, .footer-links a")
    .forEach((link) => {
      link.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-2px)";
      });

      link.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
      });
    });

  // Add subtle hover glow effect to buttons
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.3)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.boxShadow = "";
    });
  });

  // Add floating animation to luxury elements
  const floatingElements = document.querySelectorAll(".footer-logo, .logo");

  floatingElements.forEach((element) => {
    element.classList.add("floating-animation");
  });

  // Add page transition effect
  window.addEventListener("beforeunload", function () {
    document.body.classList.add("page-transition");
  });
});
