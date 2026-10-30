import Link from "next/link"
import categories from "@/utils/categoriesData"

const Hero2 = () => {
    return (
        <>
            <div className="banner banner-home2">
                <div className="text-center">
                    <h6 className="color-gray-600">Welcome to our blog</h6>
                    <h1 className="color-white">Being<span className="color-linear"> Unique&nbsp;</span>
                        is better<br className="d-none d-lg-block" />than being
                        <span className="color-linear">&nbsp;Erfect</span>
                    </h1>
                </div>
                <div className="text-center mt-50">
                    <ul className="list-tags-col-5 mb-50 text-center">
                        {categories.slice(0, 9).map((item, i) => (
                            <li key={i}>
                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay={`${i/10}s`}>
                                    <div className="card-image"><Link href="/blog-archive"><img src={`assets/imgs/page/homepage1/${item.img}`} alt="Genz" /></Link></div>
                                    <div className="card-info"><Link className="color-gray-500" href="/blog-archive">{item.title}</Link></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
     );
};

export default Hero2;