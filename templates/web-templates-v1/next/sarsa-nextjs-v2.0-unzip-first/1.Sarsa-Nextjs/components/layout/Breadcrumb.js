import Link from "next/link"

export default function Breadcrumb({ breadcrumbCategory, breadcrumbPostTitle }) {
    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                        {breadcrumbCategory && <li className="breadcrumb-item"><Link href="/blog">{breadcrumbCategory}</Link></li>}

                                        {breadcrumbPostTitle && <li className="breadcrumb-item active" aria-current="page">{breadcrumbPostTitle}</li>}
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
