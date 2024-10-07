"use client";
import titleEffect from "@/Animations/Main/title";
import BtnVisitStore from "@/Components/UI/Buttons/BtnVisitStore";
import ExploreBtn from "@/Components/UI/Buttons/ExploreBtn";
import SocialMedia from "@/Components/UI/SocialMedia";
import star from "@/Components/UI/Img/star.svg";
import line from "@/Components/UI/Img/line.svg";
import tarainingIcon from "@/Components/UI/Img/iconTraining.svg";
import studyIcon from "@/Components/UI/Img/iconStudy.svg";
import Image from "next/image";
import heroImg from "@/app/assets/hero image 1.png";
import vrImg from "@/app/assets/VR.png";
import iconEffect from "@/Animations/Main/icons";
import buttonEffect from "@/Animations/Main/buttons";
import BtnReadMyBlock from "@/Components/UI/Buttons/BtnReadMyBlock";

export default function Home() {
  iconEffect();
  buttonEffect();
  titleEffect();

  return (
    <main className="max-w-screen-sm">
      <section className="flex flex-col gap-5 px-6">
        <h2 className="text-sm text-white/80 relative">
          Virtual Headsets
          <Image
            className="line h-1 absolute -bottom-1 -left-4"
            src={line}
            alt="line"
          />
        </h2>
        <h1 className="title text-5xl font-bold">
          Experience a new dimension of reality
        </h1>
        <p className="text-sm flex gap-3 text-white/80">
          <Image className="star" src={star} alt="star" />
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
        <hr />
        <h4 className="flex gap-3">
          <Image src={studyIcon} alt="heroImg" />
          Enhanced Education
        </h4>
        <h4 className="flex gap-3">
          <Image src={tarainingIcon} alt="heroImg" />
          Training and Simulation
        </h4>
      </section>
      <section className="features p-6 flex flex-col gap-6">
        <h2 className="font-bold text-2xl">
          Our Virtual Headsets Shine with Unique Features!
        </h2>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-3 items-start">
            <Image className="fill-black" src={star} alt="star" />
            High-resolution OLED or LCD screens: Provide sharp and clear
            visuals.
          </li>
          <li className="flex gap-3 items-start">
            <Image className="fill-black" src={star} alt="star" />
            Inside-out tracking: Built-in sensors (cameras or other sensors).
          </li>
          <li className="flex gap-3 items-start">
            <Image className="fill-black" src={star} alt="star" />
            High-resolution OLED or LCD screens: Provide sharp and clear
            visuals.
          </li>
        </ul>
        <Image className="mx-auto" src={vrImg} alt="vrImg" />
      </section>
      <section className="about-creator p-6 flex flex-col gap-4">
        <h2 className="font-bold text-2xl">Jane Wilson, Gaming Creator</h2>
        <p className="text-sm">
          A virtual headset creator is an individual or company that specializes
          in designing and manufacturing virtual reality headsets, also known as
          VR headsets.
        </p>
        <BtnReadMyBlock />
      </section>
    </main>
  );
}
