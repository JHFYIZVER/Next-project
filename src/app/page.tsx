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
import blogGirl from "@/app/assets/Girl.png";
import twitPost from "@/app/assets/twit.jpg";
import iconEffect from "@/Animations/Main/icons";
import buttonEffect from "@/Animations/Main/buttons";
import BtnReadMyBlock from "@/Components/UI/Buttons/BtnReadMyBlock";

import EmblaCarousel from "@/Components/Carousel/EmblaCarousel";
import "@/Components/Carousel/Embla.css";
import { EmblaOptionsType } from "embla-carousel";
import Views from "@/Components/UI/Views";
import axios from "axios";
import { useEffect, useState } from "react";
import { useStore } from "@/Store/posts";
import Faq from "@/Components/UI/Faq";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

export default function Home() {
  iconEffect();
  buttonEffect();
  titleEffect();

  const { posts, setPosts } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        setPosts(res.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <div className="views flex items-center">
          <Views />
          <span className="font-medium">+258K Views</span>
        </div>
        <div>
          <Image
            className="relative left-0 right-5"
            src={blogGirl}
            alt="blogGirl"
          />
          <Image
            className="relative left-0 right-0"
            src={twitPost}
            alt="twitPost"
          />
        </div>
      </section>
      <section className="top-games p-6 flex flex-col gap-4 overflow-hidden">
        <h2 className="font-bold text-2xl">Top Games</h2>
        <p className="text-base font-medium">
          If you buy video 2 games, you will receive 1 video game for free,
          along with a <span className="text-blue">50%</span> discount.
        </p>
        <EmblaCarousel isLoading={isLoading} slides={posts} options={OPTIONS} />
      </section>
      <section className="faq p-6 flex flex-col items-center">
        <h2 className="font-bold text-2xl mb-6">F.A.Q.</h2>
        <Faq />
      </section>
    </main>
  );
}
