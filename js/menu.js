(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();

// news
// function zoomImage(img) {
//   const imageUrl = img.src;
//   const enlargedImage = document.createElement("img");
//   enlargedImage.src = imageUrl;
//   enlargedImage.classList.add("enlarged-image");

//   const imageOverlay = document.getElementById("image-overlay");
//   imageOverlay.innerHTML = "";
//   imageOverlay.appendChild(enlargedImage);
//   imageOverlay.style.display = "block";
// }

// function closeImage() {
//   const imageOverlay = document.getElementById("image-overlay");
//   imageOverlay.style.display = "none";
// }

// function zoomImage(img) {
//   const imageUrl = img.src;
//   const enlargedImage = document.createElement("img");
//   enlargedImage.src = imageUrl;
//   enlargedImage.classList.add("enlarged-image");

//   const imageOverlay = document.getElementById("image-overlay");
//   imageOverlay.innerHTML = "";
//   imageOverlay.appendChild(enlargedImage);
//   imageOverlay.style.display = "flex";
// }

// function closeImage() {
//   const imageOverlay = document.getElementById("image-overlay");
//   imageOverlay.style.display = "none";
// }

function zoomImage(img) {
  const imageUrl = img.src;
  const enlargedImage = document.createElement("img");
  enlargedImage.src = imageUrl;
  enlargedImage.classList.add("enlarged-image");

  const imageOverlay = document.getElementById("image-overlay");
  imageOverlay.innerHTML = "";
  imageOverlay.appendChild(enlargedImage);

  setTimeout(() => {
    enlargedImage.style.transform = "scale(0.9)";
  }, 10);

  imageOverlay.style.display = "flex";
}

function closeImage() {
  const imageOverlay = document.getElementById("image-overlay");
  const enlargedImage = imageOverlay.querySelector(".enlarged-image");
  enlargedImage.style.transform = "scale(1)";
  imageOverlay.style.display = "none";
}
