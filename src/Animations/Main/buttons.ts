import { useLayoutEffect } from "react";
import gsap from "gsap";

const buttonEffect = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".visit",
      { translateX: -60, opacity: 0, duration: 7.5 },
      { translateX: 0, opacity: 1, duration: 1, delay: 1.5 }
    );
    gsap.fromTo(
      ".explore",
      { translateX: 60, opacity: 0, duration: 7.5 },
      { translateX: 0, opacity: 1, duration: 1, delay: 1.7 }
    );
  });
};

export default buttonEffect;
