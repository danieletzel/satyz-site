"use client";

import { Blog } from "@/types/blog";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, slug } = blog;

  return (
    <div className="group rounded-lg bg-white p-4 pb-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-blacksection border border-[#eee] dark:border-strokedark">
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
    </div>
  );
};

export default BlogItem;