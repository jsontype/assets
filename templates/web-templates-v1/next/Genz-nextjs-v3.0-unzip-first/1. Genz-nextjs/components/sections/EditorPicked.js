
import Link from "next/link"
import data from "@/utils/blogData2"

const EditorPicked = () => {
    return (
        <>
           <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Editor's picked</h2>
            <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Featured and highly
                rated articles</p>
            <div className="row mt-70">
                {data.slice(0, 5).map((item, i) => (
                    i < 2 ? (
                        <div className="col-lg-6 wow animate__animated animate__fadeIn" key={i}>
                            <div className="card-blog-1 hover-up">
                                <div className="card-image mb-20 mh-315 bdr-16"><Link className="post-type" href={`/blog/${item.id}`} />
                                    <Link href={`/blog/${item.id}`}>
                                        <img src={`/assets/imgs/page/healthy/${item.img}`} alt="Genz" />
                                    </Link>
                                </div>
                                <div className="card-info">
                                    <div className="row">
                                        <div className="col-7"><Link className="color-gray-700 text-sm" href={`/blog/${item.id}`}> #Travel</Link>
                                        </div>
                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">{item.duration}  mins read</span></div>
                                    </div><Link href={`/blog/${item.id}`}>
                                        <h4 className="color-white mt-20">{item.title}</h4>
                                    </Link>
                                    <div className="row align-items-center mt-25">
                                        <div className="col-7">
                                            <div className="box-author"><img src="assets/imgs/page/homepage1/author.png" alt="Genz" />
                                                <div className="author-info">
                                                    <h6 className="color-gray-700">{item.authorname}</h6><span className="color-gray-700 text-sm">{item.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href={`/blog/${item.id}`}><span>Read more</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".1s" key={i}>
                            <div className="card-blog-1 hover-up">
                                <div className="card-image mb-20 mh-200 bdr-16 ">
                                    <Link className="post-type" href={`/blog/${item.id}`} />
                                    <Link href={`/blog/${item.id}`}>
                                        <img src={`/assets/imgs/page/healthy/${item.img}`} alt="Genz" />
                                    </Link>
                                </div>
                                <div className="card-info">
                                    <div className="row">
                                        <div className="col-7"><Link className="color-gray-700 text-sm" href={`/blog/${item.id}`}> #Design</Link>
                                        </div>
                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">{item.duration}  mins read</span></div>
                                    </div><Link href="/single-sidebar">
                                        <h5 className="color-white mt-20">{item.title}</h5>
                                    </Link>
                                    <div className="row align-items-center mt-25">
                                        <div className="col-7">
                                            <div className="box-author"><img src="assets/imgs/page/homepage1/author3.png" alt="Genz" />
                                                <div className="author-info">
                                                    <h6 className="color-gray-700">{item.authorname}</h6><span className="color-gray-700 text-sm">{item.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href={`/blog/${item.id}`}><span>Read more</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    ))
                }
            </div>
            <div className="text-center mb-50"><Link href="#" className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn">
                Show More Posts
                <i className="fi-rr-arrow-small-right" /></Link></div>
            <div className="text-center mb-80 mt-50 wow animate__animated animate__pulse"><img src="assets/imgs/page/homepage4/banner-3.png" alt="Genz" /></div>
        </>
     );
};

export default EditorPicked;