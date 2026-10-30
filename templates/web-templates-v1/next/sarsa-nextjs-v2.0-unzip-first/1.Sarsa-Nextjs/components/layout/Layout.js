import { useEffect, useState } from 'react'
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer1 from './Footer/Footer1'
import Footer2 from './Footer/Footer2'
import Footer3 from './Footer/Footer3'
import Header1 from './Header/Header1'
import Header2 from './Header/Header2'
import Header3 from './Header/Header3'
import Header4 from './Header/Header4'
import Header5 from './Header/Header5'
import Header6 from './Header/Header6'
import Header7 from './Header/Header7'
import PageHead from './PageHead'

const Layout = ({ headerStyle, footerStyle, children, breadcrumbCategory, breadcrumbPostTitle, footerClass, headTitle,logoWhite }) => {

    const handleMobileMenuOpen = () => {
        document.body.classList.add("mobile-menu-visible")
    }

    const handleMobileMenuClose = () => {
        document.body.classList.remove("mobile-menu-visible")
    }

    const handleSidebarOpen = () => {
        document.body.classList.add("offCanvas__menu-visible")
    }

    const handleSidebarClose = () => {
        document.body.classList.remove("offCanvas__menu-visible")
    }

    //Language Toggle
    const [langToggle, setLangToggle] = useState(false)
    const handleLangToggle = () => setLangToggle(!langToggle)

    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    return (
        <>
            <PageHead headTitle={headTitle} />

            {!headerStyle &&
                <Header1
                    handleMobileMenuOpen={handleMobileMenuOpen}
                    handleMobileMenuClose={handleMobileMenuClose}
                    scroll={scroll}
                    langToggle={langToggle}
                    handleLangToggle={handleLangToggle}
                    handleSidebarOpen={handleSidebarOpen}
                    handleSidebarClose={handleSidebarClose}
                />
            }
            {headerStyle == 1 ? <Header1
                handleMobileMenuOpen={handleMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                scroll={scroll}
                langToggle={langToggle}
                handleLangToggle={handleLangToggle}
                handleSidebarOpen={handleSidebarOpen}
                handleSidebarClose={handleSidebarClose}
            /> : null}
            {headerStyle == 2 ? <Header2
                handleMobileMenuOpen={handleMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                scroll={scroll}
                langToggle={langToggle}
                handleLangToggle={handleLangToggle}
                handleSidebarOpen={handleSidebarOpen}
                handleSidebarClose={handleSidebarClose}
            /> : null}
            {headerStyle == 3 ? <Header3
                handleMobileMenuOpen={handleMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                scroll={scroll}
                langToggle={langToggle}
                handleLangToggle={handleLangToggle}
                handleSidebarOpen={handleSidebarOpen}
                handleSidebarClose={handleSidebarClose}
            /> : null}
            {headerStyle == 4 ? <Header4
                handleMobileMenuOpen={handleMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                scroll={scroll}
                langToggle={langToggle}
                handleLangToggle={handleLangToggle}
                handleSidebarOpen={handleSidebarOpen}
                handleSidebarClose={handleSidebarClose}
            /> : null}
            {headerStyle == 5 ? <Header5
                handleMobileMenuOpen={handleMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                scroll={scroll}
                langToggle={langToggle}
                handleLangToggle={handleLangToggle}
                handleSidebarOpen={handleSidebarOpen}
                handleSidebarClose={handleSidebarClose}
            /> : null}
            {headerStyle == 6 ? <Header6
                handleMobileMenuOpen={handleMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                scroll={scroll}
                langToggle={langToggle}
                handleLangToggle={handleLangToggle}
                handleSidebarOpen={handleSidebarOpen}
                handleSidebarClose={handleSidebarClose}
            /> : null}
            {headerStyle == 7 ? <Header7
                handleMobileMenuOpen={handleMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                scroll={scroll}
                langToggle={langToggle}
                handleLangToggle={handleLangToggle}
                handleSidebarOpen={handleSidebarOpen}
                handleSidebarClose={handleSidebarClose}
            /> : null}

            <main className="main">
                {breadcrumbCategory && <Breadcrumb breadcrumbCategory={breadcrumbCategory} breadcrumbPostTitle={breadcrumbPostTitle} />}

                {children}
            </main>

            {!footerStyle && < Footer1 />}
            {footerStyle == 1 ? < Footer1 /> : null}
            {footerStyle == 2 ? < Footer2 footerClass={footerClass} /> : null}
            {footerStyle == 3 ? < Footer3 footerClass={footerClass} logoWhite ={logoWhite} /> : null}

            <BackToTop />
        </>
    )
}

export default Layout