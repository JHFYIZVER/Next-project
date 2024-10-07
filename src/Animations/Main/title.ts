import { useLayoutEffect } from "react";
import gsap from "gsap";

const titleEffect = () => {
  useLayoutEffect(() => {
    gsap.from(".title", { opacity: 0, translateY: 100 });
    gsap.to(".title", { opacity: 1, translateY: 0, duration: 1.1, delay: 1 });
    gsap.fromTo(".line", { width: 0 }, { width: 150 });
  });
};

export default titleEffect;
