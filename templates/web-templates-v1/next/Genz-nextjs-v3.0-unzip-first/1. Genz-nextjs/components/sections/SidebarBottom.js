
import Link from "next/link"

const SidebarBottom = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                <div className="head-sidebar">
                                    <h5 className="line-bottom">Popular Posts</h5>
                                </div>
                                <div className="content-sidebar">
                                    <div className="list-posts">
                                        <div className="item-post wow animate__animated animate__fadeIn">
                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post.jpg" alt="Genz" /></Link></div>
                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                <h6 className="color-white">Creating is a privilege but it’s also a gift</h6></Link><span className="color-gray-700">15 mins read</span>
                                                <ul className="d-inline-block">
                                                    <li className="color-gray-700">15 April 2023</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-post wow animate__animated animate__fadeIn">
                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post2.jpg" alt="Genz" /></Link></div>
                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                <h6 className="color-white">Being unique is better than being perfect</h6></Link><span className="color-gray-700">15 mins read</span>
                                                <ul className="d-inline-block">
                                                    <li className="color-gray-700">15 April 2023</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-post wow animate__animated animate__fadeIn">
                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post3.jpg" alt="Genz" /></Link></div>
                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                <h6 className="color-white">Every day, in every city and town across the country</h6></Link><span className="color-gray-700">15 mins read</span>
                                                <ul className="d-inline-block">
                                                    <li className="color-gray-700">15 April 2023</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-post wow animate__animated animate__fadeIn">
                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                <h6 className="color-white">Your voice, your mind, your story, your vision</h6></Link><span className="color-gray-700">15 mins read</span>
                                                <ul className="d-inline-block">
                                                    <li className="color-gray-700">15 April 2023</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                <div className="head-sidebar wow animate__animated animate__fadeIn">
                                    <h5 className="line-bottom">Last Comment</h5>
                                </div>
                                <div className="content-sidebar">
                                    <div className="list-comments">
                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                            <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                            <div className="box-author-small"><img src="assets/imgs/page/homepage1/author6.png" alt="Genz" />
                                                <div className="author-info"><span className="d-block color-gray-700 text-sm">Jane Cooper</span><span className="color-gray-700 text-xs">15 April 2023</span></div>
                                            </div>
                                        </div>
                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                            <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                            <div className="box-author-small"><img src="assets/imgs/page/homepage1/author7.png" alt="Genz" />
                                                <div className="author-info"><span className="d-block color-gray-700 text-sm">Katen Doe</span><span className="color-gray-700 text-xs">15 April 2023</span></div>
                                            </div>
                                        </div>
                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                            <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                            <div className="box-author-small"><img src="assets/imgs/page/homepage1/author8.png" alt="Genz" />
                                                <div className="author-info"><span className="d-block color-gray-700 text-sm">Barbara Cartland</span><span className="color-gray-700 text-xs">15 April 2023</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                <div className="head-sidebar"><Link href="/"><img src="assets/imgs/template/logo.svg" alt="Genz" /></Link>
                                    <h6 className="color-gray-700">Follow us on instagram</h6>
                                </div>
                                <div className="content-sidebar">
                                    <div className="row mt-30 mb-10">
                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery.png" alt="Genz" /></Link></div>
                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery2.png" alt="Genz" /></Link></div>
                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery3.png" alt="Genz" /></Link></div>
                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery4.png" alt="Genz" /></Link></div>
                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery5.png" alt="Genz" /></Link></div>
                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery6.png" alt="Genz" /></Link></div>
                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery7.png" alt="Genz" /></Link></div>
                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery8.png" alt="Genz" /></Link></div>
                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery9.png" alt="Genz" /></Link></div>
                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery7.png" alt="Genz" /></Link></div>
                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery8.png" alt="Genz" /></Link></div>
                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery9.png" alt="Genz" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </>
     );
};

export default SidebarBottom;