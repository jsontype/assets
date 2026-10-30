import Link from 'next/link'
import InstagramSidebarSlider from '../slider/InstagramSidebarSlider'
import SidePostSlider from '../slider/SidePostSlider'

export default function BlogSidebar() {
    return (
        <>
            <aside className="blog-sidebar">
                <div className="widget sidebar-widget">
                    <div className="tgAbout-me">
                        <div className="tgAbout-thumb">
                            <img src="/assets/img/others/about_me.png" alt="me" />
                        </div>
                        <div className="tgAbout-info">
                            <p className="intro">Hi there, I’m <span>Rosalina D.</span></p>
                            <span className="designation">Content Writer</span>
                        </div>
                        <div className="tgAbout-social">
                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                            <Link href="#"><i className="fab fa-twitter" /></Link>
                            <Link href="#"><i className="fab fa-behance" /></Link>
                            <Link href="#"><i className="fab fa-youtube" /></Link>
                        </div>
                    </div>
                </div>
                <div className="widget sidebar-widget widget_categories">
                    <h4 className="widget-title">Trending Category</h4>
                    <ul className="list-wrap">
                        <li>
                            <div className="thumb"><Link href="/blog"><img src="/assets/img/category/side_category01.jpg" alt="img" /></Link></div>
                            <Link href="/blog">technology</Link>
                            <span className="float-right">12</span>
                        </li>
                        <li>
                            <div className="thumb"><Link href="/blog"><img src="/assets/img/category/side_category02.jpg" alt="img" /></Link></div>
                            <Link href="/blog">business</Link>
                            <span className="float-right">08</span>
                        </li>
                        <li>
                            <div className="thumb"><Link href="/blog"><img src="/assets/img/category/side_category03.jpg" alt="img" /></Link></div>
                            <Link href="/blog">fitness</Link>
                            <span className="float-right">13</span>
                        </li>
                        <li>
                            <div className="thumb"><Link href="/blog"><img src="/assets/img/category/side_category04.jpg" alt="img" /></Link></div>
                            <Link href="/blog">Gadgets</Link>
                            <span className="float-right">09</span>
                        </li>
                        <li>
                            <div className="thumb"><Link href="/blog"><img src="/assets/img/category/side_category05.jpg" alt="img" /></Link></div>
                            <Link href="/blog">politics</Link>
                            <span className="float-right">15</span>
                        </li>
                    </ul>
                </div>
                <div className="widget sidebar-widget">
                    <SidePostSlider />
                </div>
                <div className="widget sidebar-widget">
                    <h4 className="widget-title">Instagram Feeds</h4>
                    <div className="sidebarInsta__wrap">
                        <div className="sidebarInsta__top">
                            <div className="sidebarInsta__logo">
                                <img src="/assets/img/instagram/insta_logo.png" alt="img" />
                            </div>
                            <div className="sidebarInsta__info">
                                <h6 className="name"><Link href="#">ins.co/sarso.co</Link></h6>
                                <span className="designation">Code Supply Co.</span>
                            </div>
                        </div>
                        <div className="sidebarInsta__slider-wrap">
                            <div className="swiper-container sidebarInsta-active">
                                <InstagramSidebarSlider />
                            </div>
                            <div className="swiper-container sidebarInsta-active-2" dir="rtl">
                                <InstagramSidebarSlider />
                            </div>
                        </div>
                        <div className="sidebarInsta__bottom">
                            <Link href="https://www.instagram.com/" target="_blank" className="btn"><i className="fab fa-instagram" /><span className="text">Follow Me</span></Link>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}
