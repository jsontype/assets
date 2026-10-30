import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Isotope from "isotope-layout"
import { useEffect, useRef } from "react"

export default function AdventureIsotope() {
    const isotope = useRef()

    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".adventure__post-wrapper", {
                itemSelector: ".adventure__post-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".adventure__post-item",
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
            <div className="adventure__post-area pt-20 pb-70">
                <div className="container">
                    <div className="adventure__post-wrapper">
                        <div className="adventure__post-item grid-item tg-img-reveal-item" data-author="miranda h." data-title="The multiverse is a hypothetical group of the universes." data-date="nov 21, 2022" data-fx={1}>
                            <div className="adventure__post-thumb tgImage__hover">
                                <Link href="/blog/1"><img src="/assets/img/adventure/adventure01.jpg" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="adventure__post-item grid-item tg-img-reveal-item" data-author="miranda h." data-title="Why we need guidelines for brain scan data to real data." data-date="nov 21, 2022" data-fx={1}>
                            <div className="adventure__post-thumb tgImage__hover">
                                <Link href="/blog/1"><img src="/assets/img/adventure/adventure02.jpg" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="adventure__post-item grid-item tg-img-reveal-item" data-author="miranda h." data-title="The multiverse is a hypothetical group of the universes." data-date="nov 21, 2022" data-fx={1}>
                            <div className="adventure__post-thumb tgImage__hover">
                                <Link href="/blog/1"><img src="/assets/img/adventure/adventure03.jpg" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="adventure__post-item grid-item tg-img-reveal-item" data-author="miranda h." data-title="Why we need guidelines for brain scan data to real data." data-date="nov 21, 2022" data-fx={1}>
                            <div className="adventure__post-thumb tgImage__hover">
                                <Link href="/blog/1"><img src="/assets/img/adventure/adventure04.jpg" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="adventure__post-item grid-item tg-img-reveal-item" data-author="miranda h." data-title="The multiverse is a hypothetical group of the universes." data-date="nov 21, 2022" data-fx={1}>
                            <div className="adventure__post-thumb tgImage__hover">
                                <Link href="/blog/1"><img src="/assets/img/adventure/adventure05.jpg" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="adventure__post-item grid-item tg-img-reveal-item" data-author="miranda h." data-title="Why we need guidelines for brain scan data to real data." data-date="nov 21, 2022" data-fx={1}>
                            <div className="adventure__post-thumb tgImage__hover">
                                <Link href="/blog/1"><img src="/assets/img/adventure/adventure06.jpg" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="adventure__post-item grid-item tg-img-reveal-item" data-author="miranda h." data-title="The multiverse is a hypothetical group of the universes." data-date="nov 21, 2022" data-fx={1}>
                            <div className="adventure__post-thumb tgImage__hover">
                                <Link href="/blog/1"><img src="/assets/img/adventure/adventure07.jpg" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="adventure__post-item grid-item tg-img-reveal-item" data-author="miranda h." data-title="The multiverse is a hypothetical group of the universes." data-date="nov 21, 2022" data-fx={1}>
                            <div className="adventure__post-thumb tgImage__hover">
                                <Link href="/blog/1"><img src="/assets/img/adventure/adventure08.jpg" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="adventure__post-item grid-item tg-img-reveal-item" data-author="miranda h." data-title="The multiverse is a hypothetical group of the universes." data-date="nov 21, 2022" data-fx={1}>
                            <div className="adventure__post-thumb tgImage__hover">
                                <Link href="/blog/1"><img src="/assets/img/adventure/adventure09.jpg" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="adventure__post-item grid-item tg-img-reveal-item" data-author="miranda h." data-title="The multiverse is a hypothetical group of the universes." data-date="nov 21, 2022" data-fx={1}>
                            <div className="adventure__post-thumb tgImage__hover">
                                <Link href="/blog/1"><img src="/assets/img/adventure/adventure10.jpg" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="adventure__post-item grid-item tg-img-reveal-item" data-author="miranda h." data-title="The multiverse is a hypothetical group of the universes." data-date="nov 21, 2022" data-fx={1}>
                            <div className="adventure__post-thumb tgImage__hover">
                                <Link href="/blog/1"><img src="/assets/img/adventure/adventure11.jpg" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="adventure__post-item grid-item tg-img-reveal-item" data-author="miranda h." data-title="The multiverse is a hypothetical group of the universes." data-date="nov 21, 2022" data-fx={1}>
                            <div className="adventure__post-thumb tgImage__hover">
                                <Link href="/blog/1"><img src="/assets/img/adventure/adventure12.jpg" alt="img" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}