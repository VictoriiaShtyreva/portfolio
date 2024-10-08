import React from "react";
import { projects } from "@/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import bg from "../public/bg.png";
import { PinContainer } from "./ui/PinContainer";
import { Spotlight } from "./ui/Spotlight";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <div>
        <Spotlight
          className="bottom-30 -left-10 md:-left-32 md:-top-50 h-screen"
          fill="white"
        />
        <Spotlight
          className="bottom-30 left-full h-[80hv] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="bottom-30 left-18 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[40rem] h-[25rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[500px] w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src={bg} alt="bgimg" />
                </div>
                <Image
                  src={item.img}
                  width={300}
                  height={300}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        width={300}
                        height={300}
                        alt="icon5"
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check GitHub
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
