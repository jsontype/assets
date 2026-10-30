import Link from "next/link"
import React, { useState, useEffect } from "react"

const portfolio = [
    {
        name: "Flyer design",
        category: ["all", "web", "motion"],
        img: "img1.png"
    },
    {
        name: "Banner design",
        category: ["all", "graphic", "web"],
        img: "img2.png"
    },
    {
        name: "Disk cover",
        category: ["all", "graphic", "motion "],
        img: "img3.png"
    },
    {
        name: "Pattern design",
        category: ["all", "motion", "mobile"],
        img: "img4.png"
    },
    {
        name: "Logo design",
        category: ["all", "web", "graphic"],
        img: "img5.png"
    },
    {
        name: "Animal pattern",
        category: ["all", "mobile"],
        img: "img5.png"
    }
];

const PortfolioFilter = ({col, show}) => {

    // State variable to store the currently selected filter category
    const [filter, setFilter] = useState("all");

    // State variable to store the projects to be displayed based on the selected filter
    const [projects, setProjects] = useState([]);

    // Effect hook to initialize the 'projects' state with the initial portfolio data when the component mounts
    useEffect(() => {
        setProjects(portfolio);
    }, []);

    // Effect hook to update the 'projects' state whenever the 'filter' state changes
    useEffect(() => {
        // Clear the 'projects' state to prepare for filtering
        setProjects([]);

        // Map through the 'portfolio' data and create a new array of projects with an additional property 'filtered'
        // The 'filtered' property indicates whether a project belongs to the selected filter category or not
        const filtered = portfolio.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));

        // Update the 'projects' state with the filtered array of projects
        setProjects(filtered);
    }, [filter]);

    return (
        <>
            <div className="row text-center filter-nav">
                <div className="col-lg-12">
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "all" && "active"}`} active={filter === "all" ? 1 : 0} onClick={() => setFilter("all")}>All Projects</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "web" && "active"}`}
                            onClick={() => setFilter("web")}>Web Development</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "mobile" && "active"}`}
                            onClick={() => setFilter("mobile")}>Mobile App</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "motion" && "active"}`}
                            onClick={() => setFilter("motion")}>Motion</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "graphic" && "active"}`}
                            onClick={() => setFilter("graphic")}>Graphic Design</span>
                    </span>
                </div>
            </div>

            <div className="mt-70 mb-50">
                <div className="row">
                    {projects.slice(0,show).map(item =>
                        item.filtered === true ?
                            <div className={`col-lg-${col}`} key={item.name}>
                                <div className="project" data-category="web motion">
                                    <div className="item-content">
                                        <div className="card-style-1 hover-up mb-30" data-wow-delay=".0s">
                                            <div className="card-image">
                                                <Link className="link-post" href="#"><img src={`assets/imgs/page/about/${item.img}`} alt="Genz" />
                                                    <div className="card-info card-bg-2">
                                                        <div className="info-bottom mb-15">
                                                            <h3 className="color-white mb-10">{item.name}</h3>
                                                            <p className="color-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque suscipit</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        : null
                    )}
                </div>
            </div>
        </>
    );
};

export default PortfolioFilter;