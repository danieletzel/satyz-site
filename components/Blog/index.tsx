"use client";

import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="text-center">
          <SectionHeader
            headerInfo={{
              title: "CONTEÚDO E IDEIAS",
              subtitle: "Insights e novidades sobre IA",
              description:
                "Descubra como a inteligência artificial está transformando empresas, equipes e experiências com clientes.",
            }}
          />
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-c-1280 px-4 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {BlogData.slice(0, 3).map((blog) => (
            <BlogItem blog={blog} key={blog._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;