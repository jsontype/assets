import Link from "next/link";

import PageBanner from "@components/PageBanner";
import Sidebar from "@components/Sidebar";
import PaginatedBlog from '@components/PaginatedBlog';

import { notFound } from 'next/navigation';

import { getAllCategoriesIds, getCategoryData, getSortedCategoriesData } from "@library/categories";
import { getCategoryPosts } from "@library/posts";

export async function generateMetadata({ params }) {
  const categoryData = await getSingleCategoryData(params);

  return {
    title: categoryData.title + " | Blog",
  }
}

async function BlogCategory( { params } ) {
  const categories = await getAllCategories();
  const posts = await getAllPosts(params);
  const categoryData = await getSingleCategoryData(params);

  return (
    <>
      
      <PageBanner pageTitle={"Category: "+categoryData.title} breadTitle={categoryData.title} bgImage={"/img/photo/12.jpg"} />
      
      {/* blog */}
      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened"></div>
              <div className="row justify-content-between">
                  <div className="col-lg-7">
                      {/* filter */}
                      <div className="mil-filter mil-up mil-mb-90">
                          <div className="mil-filter-links">
                              <Link href="/blog">All</Link>
                              {categories.map((item, key) => (
                              <Link key={`categories-item-${key}`} href={`/blog/category/${item.id}`} className={item.id == params.id ? "mil-current": ""}>{item.title}</Link>
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
export default BlogCategory;

export async function generateStaticParams() {
    const paths = getAllCategoriesIds()
    return paths
}

async function getAllCategories() {
    const categoriesData = await getSortedCategoriesData()

    return categoriesData
}

async function getSingleCategoryData(params) {
    const categoryData = await getCategoryData(params.id)

    if ( !categoryData ) {
        notFound()
    } else {
        return categoryData
    }
}

async function getAllPosts( params ) {
    const categoryPosts = await getCategoryPosts(params.id)

    if (!categoryPosts.length) {
        notFound()
    }

    return categoryPosts
}