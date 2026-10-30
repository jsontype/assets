import Link from "next/link";

import PageBanner from "@components/PageBanner";
import Sidebar from "@components/Sidebar";
import PaginatedBlog from '@components/PaginatedBlog';

import { notFound } from 'next/navigation';

import { getSortedCategoriesData } from "@library/categories";
import { getAllTagsIds, getTagData } from "@library/tags";
import { getTagPosts } from "@library/posts";

export async function generateMetadata({ params }) {
  const tagData = await getSingleTagData(params);
  
  return {
    title: tagData.title + " | Blog",
  }
}

async function BlogTag( { params } ) {
  const categories = await getAllCategories();
  const posts = await getAllPosts(params);
  const tagData = await getSingleTagData(params);

  return (
    <>
      
      <PageBanner pageTitle={"Tag: "+tagData.title} breadTitle={tagData.title} bgImage={"/img/photo/12.jpg"} />
      
      {/* blog */}
      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened"></div>
              <div className="row justify-content-between">
                  <div className="col-lg-7">
                      {/* filter */}
                      <div className="mil-filter mil-up mil-mb-90">
                          <div className="mil-filter-links">
                              <Link href="/blog" className="mil-current">All</Link>
                              {categories.map((item, key) => (
                              <Link key={`categories-item-${key}`} href={`/blog/category/${item.id}`}>{item.title}</Link>
                              ))}
                          </div>
                      </div>
                      {/* filter end */}
                      
                      <PaginatedBlog
                        items={posts}
                      />

                  </div>
                  <div className="col-lg-5">

                      <Sidebar />

                  </div>
              </div>
          </div>
      </section>
      {/* blog end */}

    </>
  );
};
export default BlogTag;

export async function generateStaticParams() {
    const paths = getAllTagsIds()
    return paths
}

async function getAllCategories() {
    const categoriesData = await getSortedCategoriesData()

    return categoriesData
}

async function getSingleTagData(params) {
    const tagData = await getTagData(params.id)

    if ( !tagData ) {
        notFound()
    } else {
        return tagData
    }
}

async function getAllPosts( params ) {
    const tagPosts = await getTagPosts(params.id)

    if (!tagPosts.length) {
        notFound()
    }

    return tagPosts
}