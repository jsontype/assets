import Data from "@data/sections/popular-posts.json";
import Date from '@library/date';
import Link from "next/link";

const PopularPostsSection = ( { posts } ) => {
    
    return (
        <>
            {/* popular */}
            {posts.slice(0, Data.numOfItems).map((item, key) => (
            <Link href={`/blog/${item.id}`} key={`blog-popular-${key}`} className="mil-blog-card mil-lg-card mil-mb-60">
                <div className="mil-cover mil-long mil-up">
                    <img src={item.image} alt={item.title} />
                    <div className="mil-date"><Date dateString={item.date} /></div>
                </div>
                <div className="mil-description">
                    <div className="mil-left-side">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">{item.category}</span>
                        <h4 className="mil-upper mil-up mil-mb-30">{item.title}</h4>
                    </div>
                    <div className="mil-right-side mil-mt-suptitle-offset">
                        <p className="mil-up mil-mb-30">{item.short}</p>
                        <span className="mil-link mil-upper mil-up">Read <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></span>
                    </div>
                </div>
            </Link>
            ))}
            {/* popular end */}
        </>
    );
};

export default PopularPostsSection;