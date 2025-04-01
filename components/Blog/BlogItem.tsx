"use client";

import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group rounded-lg bg-white p-4 pb-9 shadow-solid-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-blacksection"
    >
      <Link
        href="/blog/blog-details"
        className="relative block aspect-[368/239] overflow-hidden rounded-md"
      >
        <Image
          src={mainImage}
          alt={`Imagem do post: ${title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="px-4">
        <h3 className="mb-3.5 mt-7.5 text-lg font-medium text-black dark:text-white line-clamp-2">
          <Link
            href="/blog/blog-details"
            className="transition-colors duration-300 hover:text-primary dark:hover:text-primary"
          >
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