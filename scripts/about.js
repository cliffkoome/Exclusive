import { memberSwiper } from "./swipper.js";

document.querySelector('.member-arrow-right').addEventListener('click', () => {
  memberSwiper.slideNext();
});

document.querySelector('.member-arrow-left').addEventListener('click', () => {
  memberSwiper.slidePrev();
});