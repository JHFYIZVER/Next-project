import { useLayoutEffect } from "react";
import gsap from "gsap";

const iconEffect = () => {
  useLayoutEffect(() => {
    gsap.fromTo(".star", {rotation: 0, duration: 0.3}, { rotation: 360, duration: 0.6})
  });
};

export default iconEffect;
