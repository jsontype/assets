
import Link from "next/link"
import data from "@/utils/blogData2"

const RecentPosts3 = () => {
    return (
        <>
            <div className="row mt-90 mb-50">
                <div className="col-lg-12">
                    <div className="box-list-posts">
                        <div className="row">
                            <div className="col-lg-7">
                            {data.slice(0, 1).map((item, i) => (
                                <div className="card-blog-1 card-blog-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay={0} key={i}>
                                    <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href={`/blog/${item.id}`}><img src={`/assets/imgs/page/healthy/${item.img}`} alt="Genz" /></Link></div>
                                    <div className="card-info"><Link href={`/blog/${item.id}`}>
                                        <h4 className="color-white mt-30">{item.title}</h4></Link>
                                        <p className="mt-25 text-lg color-gray-700">{item.excerpt}</p>
                                        <div className="row align-items-center mt-45">
                                            <div className="col-7">
                                                <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                    <div className="author-info">
                                                        <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">{item.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href={`/blog/${item.id}`}><span>Read more</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                            </div>
                            <div className="col-lg-5">
                                <div className="row">
                                {data.slice(1, 5).map((item, i) => (
                                    <div className="col-lg-12" key={i}>
                                        <div className="card-list-posts card-list-posts-small mb-30 wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                                            <div className="card-image hover-up">
                                                <Link href={`/blog/${item.id}`}>
                                                    <img src={`/assets/imgs/page/healthy/${item.img}`} alt="Genz" />
                                                </Link>
                                            </div>
                                            <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up mb-10 text-xs" href="/blog-archive">{item.category}</Link><Link href={`/blog/${item.id}`}>
                                                <h5 className="mb-10 color-white">{item.title}</h5></Link>
                                                <div className="row mt-10">
                                                    <div className="col-12"><span className="calendar-icon color-gray-700 text-sm mr-20">{item.date}</span><span className="color-gray-700 text-sm timeread">{item.date}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
};

export default RecentPosts3;