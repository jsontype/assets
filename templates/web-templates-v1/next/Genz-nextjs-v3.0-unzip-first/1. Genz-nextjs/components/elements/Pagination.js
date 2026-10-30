
import Link from "next/link"

const Pagination = () => {
    return (
        <>
            <nav className="mb-50">
                <ul className="pagination">
                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".0s"><Link className="page-link page-prev" href="#"><i className="fi-rr-arrow-small-left" /></Link></li>
                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".1s"><Link className="page-link" href="#">1</Link></li>
                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link active" href="#">2</Link></li>
                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".3s"><Link className="page-link" href="#">3</Link></li>
                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".4s"><Link className="page-link" href="#">...</Link></li>
                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".5s"><Link className="page-link page-next" href="#"><i className="fi-rr-arrow-small-right" /></Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Pagination;
