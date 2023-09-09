// import ScrollMagic from "scrollmagic";
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
// import TweenMax from "gsap";

// const controller = new ScrollMagic.Controller();

// const photos = document.querySelectorAll(
//   ".photo-one, .photo-two, .photo-three"
// );

// photos.forEach((photo) => {
//   new ScrollMagic.Scene({
//     triggerElement: photo,
//     triggerHook: 0.75,
//     reverse: false,
//   })
//     .setClassToggle(photo, "visible")
//     .addTo(controller);
// });

// Отримайте всі фотографії, які мають бути анімовані
const photos = document.querySelectorAll(
  ".photo-one, .photo-two, .photo-three"
);

// Функція для перевірки, чи елемент знаходиться в видимій частині сторінки
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Функція, яка встановлює клас .visible для видимих фотографій
function checkVisibility() {
  photos.forEach((photo) => {
    if (isElementInViewport(photo)) {
      photo.classList.add("visible");
    }
  });
}

// Додайте обробник події scroll для виклику функції checkVisibility при прокручуванні сторінки
window.addEventListener("scroll", checkVisibility);

// Викликайте функцію checkVisibility одразу після завантаження сторінки для перевірки видимості на початку
window.addEventListener("load", checkVisibility);
