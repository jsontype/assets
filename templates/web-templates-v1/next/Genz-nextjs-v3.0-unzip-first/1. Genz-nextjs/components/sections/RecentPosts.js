
import Link from "next/link"
import data from "@/utils/blogData2"

const RecentPosts = () => {
    return (
        <>
            <h2 className="color-linear d-inline-block mb-10">Recent posts</h2>
            <p className="text-lg color-gray-500">Don't miss the latest trends</p>
            <div className="box-list-posts mt-70">
                {data.slice(1, 6).map((item, i) => (
                    <div className="card-list-posts wow animate__animated animate__fadeIn" key={i} data-wow-delay={`${i/10}s`}>
                        <div className="card-image hover-up">
                            <Link href={`/blog/${item.id}`}>
                                <img src={`/assets/imgs/page/healthy/${item.img}`} alt="Genz" />
                            </Link>
                        </div>
                        <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up" href={`/blog/${item.id}`}>{item.category}</Link>
                        <Link href={`/blog/${item.id}`}>
                            <h4 className="mt-15 mb-20 color-white">{item.title}</h4>
                        </Link>
                            <p className="color-gray-500">{item.excerpt}</p>
                            <div className="row mt-20">
                                <div className="col-7">
                                        {item.tags ? (
                                            item.tags.map((tag) => (
                                                <Link className="color-gray-700 text-sm mr-15" href="/blog-archive" key={tag}>
                                                    # {tag}
                                                </Link>
                                            ))
                                        ) : ( "")}
                                </div>
                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">{item.duration} mins read</span></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
     );
};

export default RecentPosts;