"use client";

import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, slug } = blog;

  return (
    <div className="group rounded-lg bg-white p-4 pb-9 shadow-solid-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-blacksection">
      <Link
        href={`/blog/${slug}`}
        className="block overflow-hidden rounded-md mb-5"
      >
        <Image
          src={mainImage}
          alt={`Imagem do post: ${title}`}
          width={368}
          height={239}
          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="px-4">
        <h3 className="mb-3.5 text-lg font-medium text-black dark:text-white line-clamp-2">
          <Link
            href={`/blog/${slug}`}
            className="transition-colors duration-300 hover:text-primary dark:hover:text-primary"
          >
            {title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm text-waterloo dark:text-manatee">
          {metadata}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;