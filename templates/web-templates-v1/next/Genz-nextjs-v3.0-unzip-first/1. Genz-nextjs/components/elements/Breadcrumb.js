import Link from "next/link"

function Breadcrumb({title}) {
    return (
        <ul className="breadcrumb">
            <li><Link className="home" href="/">Home</Link></li>
            <li><Link href="/blog-archive">Blog</Link></li>
            <li><span>{title}</span></li>
        </ul>
    );
}
export default Breadcrumb;