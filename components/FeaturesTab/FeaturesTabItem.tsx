"use client";

import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16 px-4">
      <div className="w-full md:w-1/2">
        <h2 className="mb-6 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
          {title}
        </h2>
        <p className="mb-4 text-base leading-relaxed text-waterloo dark:text-manatee">
          {desc1}
        </p>
        <p className="text-base leading-relaxed text-waterloo dark:text-manatee">
          {desc2}
        </p>
      </div>

      <div className="relative mx-auto block w-full max-w-[550px] aspect-[562/366] md:w-1/2">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-lg shadow-lg dark:hidden object-contain"
        />
        <Image
          src={imageDark}
          alt={title}
          fill
          className="hidden rounded-lg shadow-lg dark:block object-contain"
        />
      </div>
    </div>
  );
};

export default FeaturesTabItem;