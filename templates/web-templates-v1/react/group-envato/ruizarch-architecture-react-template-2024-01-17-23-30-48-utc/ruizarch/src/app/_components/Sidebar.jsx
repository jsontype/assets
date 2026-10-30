import { Suspense } from "react";

import AppData from "@data/app.json";
import Link from "next/link";
import Date from '@library/date';

import SearchBarModule from '@components/SearchBar';

import { getSortedArchivesData } from "@library/archives";
import { getSortedPostsData } from "@library/posts";
import { getSortedTagsData } from "@library/tags";
import { getSortedAuthorsData } from "@library/authors";

async function Sidebar() {
  const archives = await getAllArchives();
  const posts = await getAllRecentPosts();
  const tags = await getAllTags();
  const authors = await getAllAuthors();

  return (
    <>
        {/* sidebar */}
        <div className="mil-sidebar-frame">
            <h6 className="mil-upper mil-up mil-mb-30">Media Info</h6>

            <ul className="mil-list mil-dark mil-up mil-mb-30">
                <li className="mil-text-sm">media@ruizarch.com</li>
                <li className="mil-text-sm">authors@ruizarch.com</li>
            </ul>

            <div className="mil-divider-lg mil-up mil-mb-30"></div>

            <Suspense fallback={<div>Loading...</div>}>
                <SearchBarModule />
            </Suspense>
            
            <div className="mil-divider-lg mil-up mil-mb-30"></div>

            <h6 className="mil-upper mil-up mil-mb-30">Recent Posts</h6>
            <ul className="mil-list mil-list-type-2 mil-dark mil-up mil-mb-30">
                {posts.slice(0, 4).map((item, key) => (
                <li key={`sidebar-posts-item-${key}`}>
                    <div className="mil-text-sm mil-mb-10"><Link href={`/blog/${item.id}`}>{item.title}</Link></div>
                    <div className="mil-additional-text mil-text-xs mil-upper mil-mb-15"><Date dateString={item.date} /></div>
                </li>
                ))}
            </ul>

            <div className="mil-divider-lg mil-up mil-mb-30"></div>

            <h6 className="mil-upper mil-up mil-mb-30">Archives</h6>

            <ul className="mil-list mil-dark mil-up mil-mb-30">
                {archives.map((item, key) => (
                <li className="mil-text-sm" key={`sidebar-archives-item-${key}`}>
                    <Link href={`/blog/archive/${item.id}`}>{item.month}, {item.year}</Link>
                </li>
                ))}
            </ul>

            <div className="mil-divider-lg mil-up mil-mb-30"></div>

            <h6 className="mil-upper mil-up mil-mb-30">Tags</h6>

            <ul className="mil-list mil-dark mil-up mil-mb-30">
                {tags.map((item, key) => (
                <li className="mil-text-sm" key={`sidebar-tags-item-${key}`}>
                    <Link href={`/blog/tag/${item.id}`}>{item.title}</Link>
                </li>
                ))}
            </ul>

            <div className="mil-divider-lg mil-up mil-mb-30"></div>

            <h6 className="mil-upper mil-up mil-mb-30">Authors</h6>

            <ul className="mil-list mil-dark mil-mb-30">
                {authors.map((item, key) => (
                <li className="mil-text-sm mil-up mil-mb-10" key={`sidebar-author-item-${key}`}>
                    <img src={item.avatar} alt={item.title} className="mil-pub-author" />
                    <Link href={`/blog/author/${item.id}`}>{item.title}</Link>
                </li>
                ))}
            </ul>

            <div className="mil-divider-lg mil-up mil-mb-30"></div>

            <h6 className="mil-upper mil-up mil-mb-30">Social Media</h6>

            <ul className="mil-list mil-dark mil-up">
                {AppData.social.map((item, key) => (
                <li className="mil-text-sm" key={`sidebar-social-item-${key}`}><a href={item.link} target="_blank">{item.title}</a></li>
                ))}
            </ul>

        </div>
        {/* sidebar end */}
    </>
  );
};
export default Sidebar;

async function getAllArchives() {
    const archivesData = await getSortedArchivesData()

    if ( !archivesData ) {
        return [];
    } else {
        return archivesData
    }
}

async function getAllTags() {
    const tagsData = await getSortedTagsData()

    if ( !tagsData ) {
        return [];
    } else {
        return tagsData
    }
}

async function getAllAuthors() {
    const authorsData = await getSortedAuthorsData()

    if ( !authorsData ) {
        return [];
    } else {
        return authorsData
    }
}

async function getAllRecentPosts() {
    const postsData = await getSortedPostsData()

    if ( !postsData ) {
        return [];
    } else {
        return postsData
    }
}