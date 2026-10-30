import data from "@/util/blogData"
import Isotope from "isotope-layout"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function MinimalIsotope() {
    const isotope = useRef()

    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".minimal__post-wrapper", {
                itemSelector: ".minimal__post-item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".minimal__post-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)

    }, [])

    return (
        <>

            <section className="minimal__post-area pt-80 pb-80">
                <div className="container">
                    <div className="minimal__post-wrapper">
                        {data.slice(114, 123).map((item, i) => (
                            <div className="minimal__post-item grid-item" key={i}>
                                <div className="minimal__post-thumb tgImage__hover">
                                    <div className="minimal__post-tags">
                                        <Link href="#">{item.category}</Link>
                                    </div>
                                    <Link href="/blog/1"><img src={`/assets/img/${item.group}/${item.img}`} alt="img" /></Link>
                                </div>
                                <div className="minimal__post-content">
                                    <ul className="tgbanner__content-meta list-wrap">
                                        <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                        <li>nov 21, 2022</li>
                                    </ul>
                                    <h4 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>{item.title}</Link></h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="minimal__post-more text-center">
                        <Link href="#" id="loadMore" className="btn"><span className="text">Load More</span> <i className="far fa-plus" /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}