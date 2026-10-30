
import Link from "next/link"
import data from "@/utils/blogData2"

const EditorPicked2 = () => {
    return (
        <>
            <div className="row mt-70">
                <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Editor's picked</h2>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Featured and highly
                    rated articles</p>
                <div className="row mt-70">
                    {data.slice(0, 4).map((item, i) => (
                        <div className="col-lg-6 wow animate__animated animate__fadeIn" data-wow-delay={`${i/10}s`} key={i}>
                            <div className="card-blog-1 hover-up">
                                <div className="card-image mb-20"><Link className="post-type" href={`/blog/${item.id}`} />
                                    <Link href={`/blog/${item.id}`}>
                                        <img src={`assets/imgs/page/homepage2/${item.img}`} alt="Genz" />
                                    </Link>
                                </div>
                                <div className="card-info">
                                    <div className="row">
                                        <div className="col-7">
                                            <Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link>
                                        </div>
                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">{item.duration} mins read</span></div>
                                    </div>
                                    <Link href={`/blog/${item.id}`}>
                                        <h4 className="color-white mt-20">Are You Ready To Go Home After The Sunset View?</h4>
                                    </Link>
                                    <div className="row align-items-center mt-25">
                                        <div className="col-7">
                                            <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                <div className="author-info">
                                                    <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-30">
                    <Link className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn" href="#">
                        Show More Posts
                        <i className="fi-rr-arrow-small-right" />
                    </Link>
                </div>

            </div>
        </>
     );
};

export default EditorPicked2;