
import Link from "next/link"
import data from "@/utils/blogData2"

const RecentPosts3 = () => {
    return (
        <>
            <div className="row mt-70">
                <div className="col-lg-12">
                    <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Recent posts</h2>
                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Don't miss the latest trends</p>
                    <div className="box-list-posts mt-70">
                        <div className="row">
                            {data.slice(0, 6).map((item, i) => (
                                <div className="col-lg-6" key={i}>
                                    <div className="card-list-posts card-list-posts-small wow animate__animated animate__fadeIn">
                                        <div className="card-image hover-up"><Link href={`/blog/${item.id}`}><img src={`/assets/imgs/page/homepage3/${item.img}`} alt="Genz" /></Link></div>
                                        <div className="card-info"><Link href={`/blog/${item.id}`}>
                                            <h5 className="mb-15 color-white">{item.title}</h5></Link>
                                            <p className="color-gray-500">{item.excerpt}</p>
                                            <div className="row mt-20">
                                                <div className="col-12"><span className="calendar-icon color-gray-700 text-sm mr-25">{item.date}</span><span className="color-gray-700 text-sm timeread">{item.duration} mins read</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-start mb-80"><Link className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn" href="#">Show More Posts<i className="fi-rr-arrow-small-right" /></Link></div>
                </div>
            </div>
        </>
     );
};

export default RecentPosts3;