import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { video, name, role, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-xl shadow-md">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>

        <h3 className="text-xl font-bold text-black dark:text-white transition-all duration-300 hover:text-primary">
          {name}
        </h3>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">{role}</p>
        <p className="text-sm text-black dark:text-white">{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;