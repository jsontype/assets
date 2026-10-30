import Link from "next/link"

export default function Sidebar({handleSidebarClose}) {
    return (
        <>
            <div className="offCanvas__wrap">
                <div className="offCanvas__body">
                    <div className="offCanvas__toggle" onClick={handleSidebarClose}><i className="flaticon-addition" /></div>
                    <div className="offCanvas__content">
                        <div className="offCanvas__logo logo">
                            <Link href="/" className="logo-dark"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                            <Link href="/" className="logo-light"><img src="/assets/img/logo/w_logo.png" alt="Logo" /></Link>
                        </div>
                        <p>Change how the world works with Biotellus, made for ecology.</p>
                        <ul className="offCanvas__instagram list-wrap">
                            <li><Link href="/assets/img/blog/blog01.jpg" className="popup-image"><img src="/assets/img/blog/blog01.jpg" alt="img" /></Link></li>
                            <li><Link href="/assets/img/blog/blog02.jpg" className="popup-image"><img src="/assets/img/blog/blog02.jpg" alt="img" /></Link></li>
                            <li><Link href="/assets/img/blog/blog03.jpg" className="popup-image"><img src="/assets/img/blog/blog03.jpg" alt="img" /></Link></li>
                            <li><Link href="/assets/img/blog/blog04.jpg" className="popup-image"><img src="/assets/img/blog/blog04.jpg" alt="img" /></Link></li>
                            <li><Link href="/assets/img/blog/blog05.jpg" className="popup-image"><img src="/assets/img/blog/blog05.jpg" alt="img" /></Link></li>
                            <li><Link href="/assets/img/blog/blog06.jpg" className="popup-image"><img src="/assets/img/blog/blog06.jpg" alt="img" /></Link></li>
                        </ul>
                    </div>
                    <div className="offCanvas__contact">
                        <h4 className="title">Get In Touch</h4>
                        <ul className="offCanvas__contact-list list-wrap">
                            <li><i className="fas fa-envelope-open" /><Link href="/mailto:info@webmail.com">info@webmail.com</Link></li>
                            <li><i className="fas fa-phone" /><Link href="/tel:88899988877">888 999 888 77</Link></li>
                            <li><i className="fas fa-map-marker-alt" /> 12/A, New Booston, NYC</li>
                        </ul>
                        <ul className="offCanvas__social list-wrap">
                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                            <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="offCanvas__overlay"  onClick={handleSidebarClose}/>
        </>
    )
}
