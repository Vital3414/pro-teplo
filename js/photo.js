import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import TweenMax from "gsap";

const controller = new ScrollMagic.Controller();

const photos = document.querySelectorAll(
  ".photo-one, .photo-two, .photo-three"
);

photos.forEach((photo) => {
  new ScrollMagic.Scene({
    triggerElement: photo,
    triggerHook: 0.75,
    reverse: false,
  })
    .setClassToggle(photo, "visible")
    .addTo(controller);
});
