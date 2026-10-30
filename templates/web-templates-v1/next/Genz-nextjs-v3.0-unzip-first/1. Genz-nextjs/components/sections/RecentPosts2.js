
import Link from "next/link"
import data from "@/utils/blogData"
import Pagination from "@/components/elements/Pagination"

const RecentPosts2 = () => {
    return (
        <>
            <div className="box-list-posts">
                <div className="row">
                    {data.slice(0, 8).map((item, i) => (
                        <div className="col-lg-6" key={i}>
                            <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn" data-wow-delay={`${i/10}s`}>
                                <div className="card-image mb-20">
                                    <Link href={`/blog/${item.id}`}>

                                    </Link>
                                </div>
                                <div className="card-info">
                                    <div className="row">
                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># {item.category}</Link></div>
                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">{item.duration} mins read</span></div>
                                    </div><Link href={`/blog/${item.id}`}>
                                        <h5 className="color-gray-50 mt-20">{item.title}</h5></Link>
                                    <div className="row align-items-center mt-25">
                                        <div className="col-7">
                                            <div className="box-author"><img src="assets/imgs/page/homepage2/author.png" alt="Genz" />
                                                <div className="author-info">
                                                    <h6 className="color-gray-700">{item.authorName}</h6><span className="color-gray-700 text-sm">{item.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href={`/blog/${item.id}`}><span>Read more</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Pagination />
            </div>
        </>
     );
};

export default RecentPosts2;