import Link from "next/link";

import PageBanner from "@components/PageBanner";
import Sidebar from "@components/Sidebar";
import PaginatedBlog from '@components/PaginatedBlog';

import { notFound } from 'next/navigation';

import { getSortedCategoriesData } from "@library/categories";
import { getAllAuthorsIds, getAuthorData } from "@library/authors";
import { getAuthorPosts } from "@library/posts";

export async function generateMetadata({ params }) {
  const authorData = await getSingleAuthorData(params);
  
  return {
    title: authorData.title + " | Author | Blog",
  }
}

async function BlogAuthor( { params } ) {
  const categories = await getAllCategories();
  const posts = await getAllPosts(params);
  const authorData = await getSingleAuthorData(params);

  return (
    <>
      
      <PageBanner pageTitle={"Author: "+authorData.title} breadTitle={authorData.title} bgImage={"/img/photo/12.jpg"} />
      
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
export default BlogAuthor;

export async function generateStaticParams() {
    const paths = getAllAuthorsIds()
    return paths
}

async function getAllCategories() {
    const categoriesData = await getSortedCategoriesData()

    return categoriesData
}

async function getSingleAuthorData(params) {
    const authorData = await getAuthorData(params.id)

    if ( !authorData ) {
        notFound()
    } else {
        return authorData
    }
}

async function getAllPosts( params ) {
    const authorPosts = await getAuthorPosts(params.id)

    if (!authorPosts.length) {
        notFound()
    }

    return authorPosts
}