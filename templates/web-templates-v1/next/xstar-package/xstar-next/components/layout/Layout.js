
'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Search from "./Search"
import Sidebar from "./Sidebar"
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import Footer4 from './footer/Footer4'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
    }
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => {
        setSidebar(!isSidebar)
    }
    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => {
        setSearch(!isSearch)
    }

    useEffect(() => {
        AOS.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })

        const firstLineShape = document.querySelector('.line-shape.first')
        if (firstLineShape) {
            for (let i = 0; i < 3; i++) {
                const span = document.createElement('span')
                firstLineShape.appendChild(span)
            }
        }
    }, [])
    return (
        <><div id="top" />
            {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} isSearch={isSearch} handleSearch={handleSearch} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} isSearch={isSearch} handleSearch={handleSearch} /> : null}
            {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} isSearch={isSearch} handleSearch={handleSearch} /> : null}

            <Search isSearch={isSearch} handleSearch={handleSearch} />

            <main className="main">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}
            </main>

            {!footerStyle && < Footer1 />}
            {footerStyle == 1 ? < Footer1 /> : null}
            {footerStyle == 2 ? < Footer2 /> : null}
            {footerStyle == 3 ? < Footer3 /> : null}
            {footerStyle == 4 ? < Footer4 /> : null}

            <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />

            <BackToTop target="#top" />
        </>
    )
}
