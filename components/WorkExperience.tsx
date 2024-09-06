import React from "react";
import { workExperience } from "@/data";
import Image from "next/image";
import { Timeline } from "./ui/Timeline";
import { Spotlight } from "./ui/Spotlight";

const WorkExperience = () => {
  return (
    <div className="py-10" id="work-experience">
      <div>
        <Spotlight
          className="bottom-30 -left-10 h-[80hv] w-[50vw]"
          fill="white"
        />
        <Spotlight
          className="bottom-30 left-full h-[80hv] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-50 left-full h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <Timeline
          data={workExperience.map((item) => ({
            id: item.id,
            position: item.position,
            time: item.time,
            content: (
              <div>
                <Image
                  src={item.img}
                  alt={`${item.position} logo`}
                  className="mb-4"
                  width={200}
                  height={200}
                />
                <p className="text-sm md:text-lg text-neutral-700 dark:text-neutral-300">
                  {item.content}
                </p>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
