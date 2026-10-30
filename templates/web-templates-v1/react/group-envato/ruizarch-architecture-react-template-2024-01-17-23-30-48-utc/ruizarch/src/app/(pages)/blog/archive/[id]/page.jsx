import Link from "next/link";

import PageBanner from "@components/PageBanner";
import Sidebar from "@components/Sidebar";
import PaginatedBlog from '@components/PaginatedBlog';

import { notFound } from 'next/navigation';

import { getSortedCategoriesData } from "@library/categories";
import { getAllArchivesIds, getArchiveData } from "@library/archives";
import { getArchivePosts } from "@library/posts";

export async function generateMetadata({ params }) {
  const archiveData = await getSingleArchiveData(params);
  
  return {
    title: archiveData.month+', '+archiveData.year + " | Archive | Blog",
  }
}

async function BlogArchive( { params } ) {
  const categories = await getAllCategories();
  const posts = await getAllPosts(params);
  const archiveData = await getSingleArchiveData(params);

  return (
    <>
      
      <PageBanner pageTitle={"Archive: "+archiveData.month+', '+archiveData.year} breadTitle={archiveData.month+', '+archiveData.year} bgImage={"/img/photo/12.jpg"} />
      
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
export default BlogArchive;

export async function _generateStaticParams() {
    const paths = getAllArchivesIds()
    return paths
}

async function getAllCategories() {
    const categoriesData = await getSortedCategoriesData()

    return categoriesData
}

async function getSingleArchiveData(params) {
    const archiveData = await getArchiveData(params.id)

    if ( !archiveData ) {
        notFound()
    } else {
        return archiveData
    }
}

async function getAllPosts( params ) {
    const archivePosts = await getArchivePosts(params.id)

    if (!archivePosts.length) {
        notFound()
    }

    return archivePosts
}