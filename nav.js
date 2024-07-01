"use strict;";

const aboutButton = document.querySelector(".about");
// const galleryButton = document.querySelector(".gallery");
const main = document.querySelector(".main");

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

// galleryButton.addEventListener("click", function () {
//   main.innerHTML = `
//   <div class="gallery-head">
//         <h2>Gallery</h2>
//         <p>Click on any image to get a better view</p>
//       </div>
//       <div class="gallery-container">
//         <div class="gallery-item">
//           <img src="images/7.jpg" />
//         </div>
//         <div class="gallery-item">
//           <img src="images/2.jpg" />
//         </div>
//         <div class="gallery-item">
//           <img src="images/8.jpg" />
//         </div>
//         <div class="gallery-item">
//           <img src="images/10.jpg" />
//         </div>
//         <div class="gallery-item">
//           <img src="images/1.jpg" />
//         </div>
//         <div class="gallery-item">
//           <img src="images/5.jpg" />
//         </div>
//         <div class="gallery-item">
//           <img src="images/4.jpg" />
//         </div>
//         <div class="gallery-item">
//           <img src="images/3.jpg" />
//         </div>
//         <div class="gallery-item">
//           <img src="images/9.jpg" />
//         </div>
//         <div class="gallery-item">
//           <img src="images/6.jpg" />
//         </div>
//       </div>
//       <div id="image-modal" class="image-modal">
//         <span class="close">&times;</span>
//         <img class="modal-content" id="modal-image" />
//       </div>
//     `;
// });
