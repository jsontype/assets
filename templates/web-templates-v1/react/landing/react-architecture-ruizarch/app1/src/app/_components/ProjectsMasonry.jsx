"use client";

import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ProjectsMasonry = ({ projects, categories }) => {
    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    
    useEffect(() => {
        //setTimeout(() => {
            isotope.current = new Isotope(".mil-portfolio-grid", {
                itemSelector: ".mil-grid-item",
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer'
                },
                transitionDuration: '0.5s',
            });
        //}, 500);
    }, []);

    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    
    const handleFilterKeyChange = (key, e) => {
        e.preventDefault();
        setFilterKey(key);
        const filterLinks = document.querySelectorAll(".mil-filter a");
        filterLinks.forEach((filter) => {
            const filterValue = filter.getAttribute("data-filter");
            if (filterValue == key) {
                filter.classList.add("mil-current");
            } else {
                filter.classList.remove("mil-current");
            }
        });
    };

    return (
      <>
        {/* filter */}
        <div className="mil-filter mil-up mil-mb-90">
            <div className="mil-filter-links">
                <a href="#" data-filter="*" className="mil-current" onClick={ (e) => handleFilterKeyChange("*", e)}>All</a>
                {categories.map((item, key) => (
                <a href="#" data-filter={`${item.slug}`} key={`projects-filter-item-${key}`} onClick={(e) => handleFilterKeyChange(item.slug, e)}>{item.name}</a>
                ))}
            </div>
        </div>
        {/* filter end */}
        
        {/* projects row */}
        <div className="row">
            <div className="col-lg-12">
                
                <div className="mil-portfolio-grid mil-up">
                <div className="grid-sizer" />

                {projects.map((item, key) => (
                <div className={`mil-grid-item ${item.category_slug}`} key={`projects-item-${key}`}>

                    <Link href={`/projects/${item.id}`} className={item.orientation == "vertical" ? "mil-portfolio-item-2 mil-long-item mil-mb-30" : "mil-portfolio-item-2 mil-square-item mil-mb-30"}>
                        <img src={item.image} alt={item.title} />

                        <div className="mil-project-descr">
                            <h3 className="mil-upper mil-mb-30">{item.title}</h3>
                            <div className="mil-link mil-upper">Start A Project <div className="mil-arrow mil-light"><img src="/img/icons/1.svg" alt="arrow" /></div></div>
                        </div>

                        <div className="mil-category">{item.category}</div>
                    </Link>

                </div>
                ))}
                </div>
                
            </div>
        </div>
        {/* projects row end */}
      </>
    );
};
export default ProjectsMasonry;
  