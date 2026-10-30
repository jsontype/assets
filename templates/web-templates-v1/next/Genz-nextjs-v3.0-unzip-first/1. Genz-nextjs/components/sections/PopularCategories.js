import Link from "next/link"
import categories from "@/utils/categoriesData"

const PopularCategories = () => {
    return (
        <>
            <div className="mt-30">
                <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Popular Tags</h2>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Most searched keywords</p>
                <div className="row mt-70 mb-50">
                    {categories.slice(0, 12).map((item, i) => (
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" key={i}>
                            <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay={`${i/10}s`}>
                                <div className="card-image">
                                    <Link href="/blog-archive"><img src={`assets/imgs/page/homepage1/${item.img}`} alt="Genz" /></Link>
                                </div>
                                <div className="card-info">
                                    <Link className="color-gray-500" href="/blog-archive">{item.title}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
     );
};

export default PopularCategories;