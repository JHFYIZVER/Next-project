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
import Views from "@/Components/UI/Views";
import axios from "axios";
import Faq from "@/Components/UI/Faq";
import FeaturesList from "@/Components/UI/FeaturesList";

import { EmblaOptionsType } from "embla-carousel";
import { useEffect, useState } from "react";
import { useStore } from "@/Store/posts";
import "@/Components/Carousel/Embla.css";
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

export default function Home() {
  iconEffect();
  buttonEffect();
  titleEffect();

  const { posts, setPosts } = useStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 855);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsDesktop(window.innerWidth >= 855);
      }, 3000);
    };
    handleResize();
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto">
      <div className="wrapper w-full md:justify-between md:flex md:flex-wrap lg:px-20 xl:px-[100px] pb-10">
        <section className="flex flex-col gap-5 px-6 lg:px-0 w-full md:max-w-[490px] xl:max-w-[640px]">
          <h2 className="text-[clamp(14px,4vw,18px)] text-white/80 relative">
            Virtual Headsets
            <Image
              className="line h-1 absolute -bottom-1 -left-4"
              src={line}
              alt="line"
            />
          </h2>
          <h1 className="title text-[clamp(48px,4vw,80px)] font-bold">
            Experience a new dimension of reality
          </h1>
          <p className="text-sm flex gap-3 text-white/80 md:max-w-[420px]">
            <Image className="star" src={star} alt="star" />
            Step into the future with our virtual headset, come to life right
            before your eyes
          </p>
          <div className="max-w-[248px] w-full flex flex-col items-center gap-6 mx-auto font-medium md:flex-row md:mx-0 md:max-w-sm">
            <BtnVisitStore />
            <ExploreBtn />
          </div>
          {isDesktop ? (
            <div>
              <h2 className="mb-5 font-bold text-[clamp(14px,4vw,18px)]">
                FOLLOW US
              </h2>
              <SocialMedia />
            </div>
          ) : null}
        </section>
        <section className="follow-us p-6 flex flex-col gap-6 lg:max-w-[400px] lg:w-full">
          {isDesktop ? null : (
            <div>
              <h2 className="mb-5 font-bold text-[clamp(14px,4vw,18px)]">
                FOLLOW US
              </h2>
              <SocialMedia />
            </div>
          )}
          <div className="relative w-full">
            <Image
              className="hero mx-auto md:max-w-[575px] md:w-full"
              src={heroImg}
              alt="heroImg"
            />
            <Image
              className="line absolute h-2 min-w-full overflow-hidden "
              src={line}
              alt="line"
            />
          </div>
          <div className="flex flex-col gap-6 6xl:flex-row">
            <h4 className="flex gap-3">
              <Image src={studyIcon} alt="heroImg" />
              Enhanced Education
            </h4>
            <h4 className="flex gap-3">
              <Image src={tarainingIcon} alt="heroImg" />
              Training and Simulation
            </h4>
          </div>
        </section>
      </div>
      <section className="features p-6 flex flex-col items-center gap-6 lg:px-20 xl:px-[100px] lg:flex-row md:mx-auto">
        <div className="order-2 lg:max-w-[540px] w-full  flex flex-col gap-6">
          <h2 className="font-bold text-[clamp(24px,3vw,56px)]">
            Our Virtual Headsets Shine with Unique Features!
          </h2>
          <FeaturesList isDesktop={isDesktop} />
        </div>
        <Image
          className="mx-auto order-1 max-w-xs max-h-fit md:max-w-[300px] md:max-h-[324px] lg:max-w-none object-contain"
          src={vrImg}
          alt="vrImg"
        />
      </section>
      <section className="about-creator p-6 flex flex-col gap-4 md:flex-row md:items-center lg:px-20 xl:px-[100px]">
        <div className="flex flex-col gap-6 md:max-w-[568px]">
          <h2 className="font-bold text-[clamp(24px,3vw,56px)] md:items-center">
            Jane Wilson, Gaming Creator
          </h2>
          <p className="text-sm">
            A virtual headset creator is an individual or company that
            specializes in designing and manufacturing virtual reality headsets,
            also known as VR headsets.
          </p>
          <BtnReadMyBlock />
          <div className="views flex items-center">
            <Views />
            <span className="font-medium">+258K Views</span>
          </div>
        </div>
        <div className="w-full mx-auto relative max-w-fit">
          <Image className="relative" src={blogGirl} alt="blogGirl" />
          <Image
            className="relative lg:absolute lg:-bottom-10 lg:-left-6"
            src={twitPost}
            alt="twitPost"
          />
        </div>
      </section>
      <section className="top-games p-6 flex flex-col gap-4 overflow-hidden lg:px-20 xl:px-[100px]">
        <h2 className="font-bold text-[clamp(24px,3vw,56px)]">Top Games</h2>
        <p className="text-base font-medium">
          If you buy video 2 games, you will receive 1 video game for free,
          along with a <span className="text-blue">50%</span> discount.
        </p>
        <EmblaCarousel isLoading={isLoading} slides={posts} options={OPTIONS} />
      </section>
      <section className="faq p-6 flex flex-col items-center lg:px-20 xl:px-[100px]">
        <h2 className="font-bold text-[clamp(24px,3vw,56px)] mb-6">F.A.Q.</h2>
        <Faq />
      </section>
    </main>
  );
}
