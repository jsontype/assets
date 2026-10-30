"use client";

import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const TeamMasonry = ({ team, categories }) => {
    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    
    useEffect(() => {
        //setTimeout(() => {
            isotope.current = new Isotope(".mil-team-grid", {
                itemSelector: ".mil-grid-item",
                percentPosition: true,
                masonry: {
                    columnWidth: '.mil-grid-item'
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
                <a href="#" data-filter={`${item.slug}`} key={`team-filter-item-${key}`} onClick={(e) => handleFilterKeyChange(item.slug, e)}>{item.name}</a>
                ))}
            </div>
        </div>
        {/* filter end */}

        {/* projects row */}
        <div className="row mil-team-grid">
            {team.map((item, key) => (
            <div className={`col-sm-6 col-lg-3 mil-grid-item mil-up ${item.category_slug}`} key={`team-item-${key}`}>
                <Link href={`/team/${item.id}`} className="mil-team-member">
                    <div className="mil-avatar mil-mb-30">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <h6 className="mil-upper mil-mb-10">{item.name}</h6>
                    <p className="mil-dark-soft">{item.role}</p>
                </Link>
            </div>
            ))}
        </div>
        {/* projects row end */}        
      </>
    );
};
export default TeamMasonry;
  