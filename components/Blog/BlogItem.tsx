"use client";

import { Blog } from "@/types/blog";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, slug } = blog;

  return (
    <div className="rounded-lg bg-white p-4 pb-8 dark:bg-blacksection border border-[#eee] dark:border-strokedark">
      <Link href={`/blog/${slug}`} className="block mb-4">
        <img
          src={mainImage}
          alt={title}
          width={368}
          height={239}
          className="w-full h-auto rounded-md"
          loading="lazy"
        />
      </Link>

      <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>

      <p className="text-sm text-gray-600 dark:text-manatee">{metadata}</p>
    </div>
  );
};

export default BlogItem;