"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { HeroHighlight } from "./ui/HeroHighlight";
import Image from "next/image";
import about from "../public/about.jpeg";
import overlayImage from "../public/overlayImage.png";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const About = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80hv] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-18 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <HeroHighlight>
        <div className="relative flex flex-col items-center mt-10">
          <h2
            className="absolute -top-10 text-3xl md:text-5xl font-bold text-center opacity-50"
            style={{ zIndex: -1 }}
          >
            Hi👋, I’m Viktoriia
          </h2>
          <div className="relative">
            <Image
              src={about}
              alt="Viktoriia Shtyreva"
              width={300}
              height={300}
              className="relative rounded-full mb-4 mt-4"
            />
            <Image
              src={overlayImage}
              alt="Overlay"
              width={300}
              height={300}
              className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 top-40"
            />
          </div>
          <TextGenerateEffect
            words="I'm a highly motivated, detail-oriented fullstack developer based in Helsinki, Finland."
            className="text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl"
          />
          <a href="#about" className="mt-2 md:mt-4">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </HeroHighlight>
    </div>
  );
};

export default About;
