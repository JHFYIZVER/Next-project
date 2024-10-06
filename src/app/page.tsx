"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import BtnVisitStore from "@/Components/UI/Buttons/BtnVisitStore";
import ExploreBtn from "@/Components/UI/Buttons/ExploreBtn";
import SocialMedia from "@/Components/UI/SocialMedia";
import star from "@/Components/UI/star.svg";
import Image from "next/image";
import heroImg from "@/app/assets/hero image 1.png";

export default function Home() {
  useLayoutEffect(() => {
    gsap.from(".title", { opacity: 0, translateX: -300 });
    gsap.to(".title", { opacity: 1, translateX: 0, transition: 6 });
  });

  
  
  
  return (
    <main className="max-w-screen-sm">
      <section className="flex flex-col gap-5 px-6">
        <h2 className="text-sm text-white/80">Virtual Headsets</h2>
        <h1 className="title text-5xl font-bold">
          Experience a new dimension of reality
        </h1>
        <p className="text-sm flex gap-3 text-white/80">
          <Image src={star} alt="star" />
          Step into the future with our virtual headset, come to life right
          before your eyes
        </p>
        <div className="max-w-[248px] w-full flex flex-col items-center gap-6 mx-auto font-medium">
          <BtnVisitStore />
          <ExploreBtn />
        </div>
      </section>
      <section className="follow-us p-6 flex flex-col gap-6">
        <h2 className="mb-5 font-bold text-sm">FOLLOW US</h2>
        <SocialMedia />
        <Image src={heroImg} alt="heroImg" />
      </section>
    </main>
  );
}
