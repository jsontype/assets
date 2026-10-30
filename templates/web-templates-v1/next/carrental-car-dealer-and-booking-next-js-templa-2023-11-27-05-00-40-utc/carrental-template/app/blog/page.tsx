import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "../_sections/page-title";
import Sidebar from "../_sections/sidebar";
import Pagination from "../_sections/pagination";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";

import { getSortedPostsData } from "@/lib/posts";
import SectionWrapper from "../_sections/section-wrapper";

const title = "Blog";
const desc = "Page description";

export async function generateMetadata() {
  return {
    title: title,
    description: desc,
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((p) => ({
    slug: p.id,
  }));
}

export default function Blog() {
  const posts = getSortedPostsData(4);
  return (
    <>
      <PageTitle title={title} />
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-2 lg:gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="grid gap-16">
              {posts.map((post, index) => (
                <article className="grid gap-4" key={index}>
                  <Link
                    href={`/blog/${post.id}`}
                    className="relative group/image"
                  >
                    {post.data.image && (
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={post.data.image}
                          className="object-cover"
                          fill
                          sizes="(max-width: 400px) 320px, (max-width: 768px) 640px, 840px"
                          alt="Post featured image"
                        />
                      </div>
                    )}
                    <div className="flex justify-center flex-col absolute w-full h-full top-0 hover:backdrop-blur-sm hover:backdrop-brightness-50 transition-all ease-linear invisible group-hover/image:visible">
                      <div className="text-center">
                        <AiOutlineLink
                          size={24}
                          className="text-white w-full translate-y-2 opacity-0 delay-350 transition-all ease-in group-hover/image:translate-y-0 group-hover/image:opacity-100"
                        />
                      </div>
                    </div>
                  </Link>

                  <h3 className="text-2xl font-semibold">
                    <Link href={`/blog/${post.id}`}>{post.data.title}</Link>
                  </h3>
                  <p>{post.data.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-orange-500 transition-colors font-bold uppercase block w-[112px] relative group/link hover:text-slate-600"
                  >
                    <div className="flex gap-2 relative z-10 items-center">
                      <span>Read more</span>
                      <BsArrowRight size={20} />
                    </div>
                    <span className="absolute h-2 w-0 z-0 transition-all ease-in top-4 bg-orange-400 group-hover/link:w-full"></span>
                  </Link>
                </article>
              ))}
            </div>
            <Pagination />
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
