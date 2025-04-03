"use client";

import Link from "next/link";
import { Blog } from "@/types/blog";

const BlogItem = ({ slug, title, mainImage, metadata }: Blog) => {
  return (
    <article
      className="group rounded-lg border border-[#eee] bg-white p-4 pb-8 shadow-md transition-all duration-300 
      hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] 
      dark:border-strokedark dark:bg-blacksection dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
    >
      <Link
        href={`/blog/${slug}`}
        className="relative block aspect-[368/239] overflow-hidden rounded-md"
      >
        <img
          src={mainImage}
          alt={title}
          width={368}
          height={239}
          className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </Link>

      <div className="px-2 pt-5">
        <h3 className="mb-2 text-lg font-semibold text-black dark:text-white transition-colors duration-300 group-hover:text-primary">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>

        <p className="text-sm text-gray-600 dark:text-manatee">{metadata}</p>
      </div>
    </article>
  );
};

export default BlogItem;