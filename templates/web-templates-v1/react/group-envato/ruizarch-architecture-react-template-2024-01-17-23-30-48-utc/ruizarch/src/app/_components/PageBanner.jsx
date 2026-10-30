"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const PageBanner = ({ pageTitle, breadTitle, bgImage }) => {
  const asPath = usePathname();

  let clearBreadTitle;

  if ( breadTitle != undefined ) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }

  if ( pageTitle == 'Search: %s' ) {
    const searchParams = useSearchParams();
    const query = searchParams.get('key');
    
    pageTitle = 'Search: '+query;
  }
  
  useEffect(() => {
    ScrollAnimation();
  }, []);

  return (
    
    <>    
      {/* banner */}
      <section className="mil-banner mil-banner-sm">
          <img src={bgImage} className="mil-bg-img mil-scale" data-value-1=".4" data-value-2="1.4" alt="image" style={{"objectPosition": "top"}} />

          <div className="mil-overlay" />

          <div className="container">
              <div className="mil-background-grid mil-top-space" />

              <div className="mil-banner-content mil-center">
                  <div className="mil-mb-90">
                      <h1 className="mil-light mil-upper mil-mb-30" dangerouslySetInnerHTML={{__html : pageTitle}} />
                      <ul className="mil-breadcrumbs mil-center">
                      <li><Link href="/">Home</Link></li>
                      {asPath.indexOf('/blog/') != -1 && asPath.indexOf('/blog/page/') == -1 &&
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      }
                      {asPath.indexOf('/projects/') != -1 &&
                      <li>
                        <Link href="/projects">Projects</Link>
                      </li>
                      }
                      {asPath.indexOf('/services/') != -1 &&
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      }
                      <li><a dangerouslySetInnerHTML={{__html : clearBreadTitle}} /></li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default PageBanner;
