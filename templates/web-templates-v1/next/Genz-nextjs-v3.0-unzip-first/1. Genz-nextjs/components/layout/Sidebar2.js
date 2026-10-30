import Link from "next/link"
import data from "@/utils/blogData2"
import comments from "@/utils/commentsData"
import gallery from "@/utils/galleryData"

const Sidebar2 = ({ openClass }) => {
    return (
        <>
            <div className="sidebar">
                <div className="box-sidebar bg-gray-850 border-gray-800">
                    <div className="head-sidebar">
                        <h5 className="line-bottom">Categories</h5>
                    </div>
                    <div className="content-sidebar">
                        <div className="list-cats">
                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                <div className="cat-left">
                                    <div className="image-cat">
                                        <Link href="/blog-archive">
                                            <img src="assets/imgs/page/healthy/cat1.png" alt="Genz" />
                                        </Link>
                                    </div>
                                    <div className="info-cat">
                                        <Link className="color-gray-500 text-xl" href="/blog-archive">
                                            Travel Tips
                                        </Link>
                                    </div>
                                </div>
                                <div className="cat-right">
                                    <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive">
                                        36 posts
                                    </Link>
                                </div>
                            </div>
                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                <div className="cat-left">
                                    <div className="image-cat">
                                        <Link href="/blog-archive-2">
                                            <img src="assets/imgs/page/healthy/cat2.png" alt="Genz" />
                                        </Link>
                                    </div>
                                    <div className="info-cat">
                                        <Link className="color-gray-500 text-xl" href="/blog-archive-2">
                                            Technology
                                        </Link>
                                    </div>
                                </div>
                                <div className="cat-right">
                                    <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-2">
                                        14 posts
                                    </Link>
                                </div>
                            </div>
                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                <div className="cat-left">
                                    <div className="image-cat">
                                        <Link href="/blog-archive-3">
                                            <img src="assets/imgs/page/healthy/cat3.png" alt="Genz" />
                                        </Link>
                                    </div>
                                    <div className="info-cat">
                                        <Link className="color-gray-500 text-xl" href="/blog-archive-3">
                                            Business
                                        </Link>
                                    </div>
                                </div>
                                <div className="cat-right">
                                    <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-3">
                                        87 posts
                                    </Link>
                                </div>
                            </div>
                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                <div className="cat-left">
                                    <div className="image-cat">
                                        <Link href="/blog-archive-4">
                                            <img src="assets/imgs/page/healthy/cat4.png" alt="Genz" />
                                        </Link>
                                    </div>
                                    <div className="info-cat">
                                        <Link className="color-gray-500 text-xl" href="/blog-archive-4">
                                            Food
                                        </Link>
                                    </div>
                                </div>
                                <div className="cat-right">
                                    <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-4">
                                        125 posts
                                    </Link>
                                </div>
                            </div>
                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                <div className="cat-left">
                                    <div className="image-cat">
                                        <Link href="/blog-archive-5">
                                            <img src="assets/imgs/page/healthy/cat5.png" alt="Genz" />
                                        </Link>
                                    </div>
                                    <div className="info-cat">
                                        <Link className="color-gray-500 text-xl" href="/blog-archive-5">
                                            Lifestyle
                                        </Link>
                                    </div>
                                </div>
                                <div className="cat-right">
                                    <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-5">
                                        6 posts
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-sidebar bg-gray-850 border-gray-800">
                    <div className="head-sidebar wow animate__animated animate__fadeIn">
                        <h5 className="line-bottom">Popular Posts</h5>
                    </div>
                    <div className="content-sidebar">
                        <div className="list-posts">
                            {data.slice(0, 5).map((item, i) => (
                                <div className="item-post wow animate__animated animate__fadeIn" data-wow-delay={`${i / 10}s`} key={i}>
                                    <div className="image-post">
                                        <Link href={`/blog/${item.id}`}>
                                            <img src={`/assets/imgs/page/healthy/${item.img}`} alt="Genz" />
                                        </Link>
                                    </div>
                                    <div className="info-post border-gray-800">
                                        <Link href={`/blog/${item.id}`}>
                                            <h6 className="color-white">{item.title}</h6>
                                        </Link>
                                        <span className="color-gray-700">{item.duration} mins read</span>
                                        <ul className="d-inline-block">
                                            <li className="color-gray-700">{item.date}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="box-sidebar bg-gray-850 border-gray-800">
                    <div className="head-sidebar wow animate__animated animate__fadeIn">
                        <h5 className="line-bottom">Last Comment</h5>
                    </div>
                    <div className="content-sidebar">
                        <div className="list-comments">
                            {comments.slice(0, 3).map((item, i) => (
                                <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn" data-wow-delay={`${i / 10}s`} key={i}>
                                    <p className="color-gray-500 mb-20">“{item.content}“</p>
                                    <div className="box-author-small">
                                        <img src={`/assets/imgs/page/homepage1/${item.authorAvata}`} alt="Genz" />
                                        <div className="author-info">
                                            <span className="d-block color-gray-700 text-sm">{item.authorName}</span>
                                            <span className="color-gray-700 text-xs">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="box-sidebar bg-gray-850 border-gray-800">
                    <div className="head-sidebar">
                        <Link href="/">
                            <img src="assets/imgs/template/logo.svg" alt="Genz" />
                        </Link>
                        <h6 className="color-gray-700">Follow us on instagram</h6>
                    </div>
                    <div className="content-sidebar">
                        <div className="row mt-30 mb-10">
                            {gallery.slice(0, 9).map((item, i) => (
                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn" data-wow-delay={`${i / 10}s`} key={i}>
                                    <Link href={`${item.link}`}>
                                        <img className="bdrd-8" src={`/assets/imgs/page/homepage1/${item.img}`} alt="Genz" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar2;
