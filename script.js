"use strict";

const socialMediaModal = document.querySelector(".socialMediaModal");
const modal = document.querySelector(".ModalContainer");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
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

  aboutButton.addEventListener("click", function () {
    main.innerHTML = `
      <div class="about-head">
        <div class="site-name">
          <h1>dudes N dames</h1>
        </div>
        <div class="site-desc">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            quis ab maiores modi eaque consequatur, explicabo beatae commodi!
            Deleniti itaque ut voluptates ratione neque officia corrupti
            molestias vero doloribus ipsam!
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            repellendus libero cumque et eos dolores omnis. Reprehenderit quam,
            nostrum unde ea vitae sit corrupti, officia nesciunt neque libero
            expedita! Impedit?
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
  });
});
