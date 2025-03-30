"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
    >
      <Link href={`/blog/`} className="relative block aspect-[368/239]">
        <Image src={mainImage} alt={title} fill className="rounded-md object-cover" />
      </Link>

      <div className="px-4">
        <h3 className="mb-3.5 mt-7.5 text-lg font-medium text-black dark:text-white line-clamp-2 hover:text-primary dark:hover:text-primary">
          <Link href={`/blog/blog-details`}>
            {title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm text-waterloo dark:text-manatee">
          {metadata}
        </p>
      </div>
    </motion.div>
  );
};

export default BlogItem;