"use strict";

const socialMediaModal = document.querySelector(".socialMediaModal");
const modal = document.querySelector(".ModalContainer");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const menuButton = document.querySelector(".menubtn");
const closeMenu = document.querySelector(".closeMenu");
const harmburgerDeviceModal = document.querySelector(".harmburgerDeviceModal");

menuButton.addEventListener("click", function () {
  harmburgerDeviceModal.style.display = "inline";
});

closeMenu.addEventListener("click", function () {
  harmburgerDeviceModal.style.display = "none";
});

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  harmburgerDeviceModal.style.display = "none";
  window.scrollTo(0, 0);
};

socialMediaModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/* Gallery */
document.addEventListener("DOMContentLoaded", (event) => {
  const galleryButton = document.querySelector(".gallery");
  const aboutButton = document.querySelector(".about");
  const main = document.querySelector(".main");

  galleryButton.addEventListener("click", function () {
    main.innerHTML = `
    <div class="gallery-head">
          <h2>Gallery</h2>
          <p>Click on any image to get a better view</p>
        </div>
        <div class="gallery-container">
          <div class="gallery-item">
            <img src="images/7.jpg" />
          </div>
          <div class="gallery-item">
            <img src="images/2.jpg" />
          </div>
          <div class="gallery-item">
            <img src="images/8.jpg" />
          </div>
          <div class="gallery-item">
            <img src="images/10.jpg" />
          </div>
          <div class="gallery-item">
            <img src="images/1.jpg" />
          </div>
          <div class="gallery-item">
            <img src="images/5.jpg" />
          </div>
          <div class="gallery-item">
            <img src="images/4.jpg" />
          </div>
          <div class="gallery-item">
            <img src="images/3.jpg" />
          </div>
          <div class="gallery-item">
            <img src="images/9.jpg" />
          </div>
          <div class="gallery-item">
            <img src="images/6.jpg" />
          </div>
        </div>
        <div id="image-modal" class="image-modal">
          <span class="close">&times;</span>
          <img class="modal-content" id="modal-image" />
        </div>
      `;

    harmburgerDeviceModal.style.display = "none";
    window.scrollTo(0, 0);
    // Add event listeners to gallery items
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.getElementsByTagName("img")[0].src;
      });
    });

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });

  /*About page*/
  aboutButton.addEventListener("click", function () {
    main.innerHTML = `
      <div class="about-head">
        <div class="site-name">
          <h1>dudes N dames</h1>
        </div>
        <div class="site-desc">
          <p>
            Welcome to dudes N dames, where style meets innovation. 
            Our fashion house brings together the latest trends and timeless classics, curated by visionary designers. 
            Each piece is crafted with meticulous attention to detail, ensuring you stand out with confidence. 
            Explore our collections and discover your unique style with dudes N dames.
          </p>
        </div>
      </div>
      <div class="about-banner">
        <!-- <img src="images/about-banner-img.png" alt="" /> -->
      </div>
      <div class="about-owner">
        <div class="owner-image">
          <img src="images/testimonial.png" alt="" />
        </div>
        <div class="owner-desc">
          <h2>About the owner</h2>
          <p>
            Meet Omotola, the visionary behind dudes N dames. 
            With a passion for fashion and a keen eye for detail, Omotola launched her fashion journey in 2021. 
            Her dedication to excellence and creativity has led to the completion of over 100 unique projects, 
            each reflecting her commitment to quality and style. 
            Tola's innovative designs and forward-thinking approach have made dudes N dames a go-to destination for fashion enthusiasts.
          </p>
          <div class="start-projects">
            <div class="box">
              <p>start since</p>
              <h2>2021</h2>
            </div>
            <div class="box">
              <p>projects completed</p>
              <h2>100+</h2>
            </div>
          </div>
        </div>
      </div>
    `;

    harmburgerDeviceModal.style.display = "none";
    window.scrollTo(0, 0);
  });
});
