import Link from "next/link";
import Breadcrumb from "@/components/elements/Breadcrumb"

const PageHeader1 = ({ title, des }) => {
    return (
        <>
            <div className="row align-items-end mt-50">
                <div className="col-lg-7 mb-20">
                    <div className="d-inline-block position-relative">
                        <h1 className="color-white mb-20 color-linear wow animate__animated animate__fadeIn">{title}</h1>
                        <span className="btn btn-linear-small btn-number-arts">36 articles</span>
                    </div>
                    <p className="color-gray-500 text-base wow animate__animated animate__fadeIn">{des}</p>
                </div>
                <div className="col-lg-5 mb-20 text-start text-lg-end">
                    <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                        <Breadcrumb />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="border-bottom border-gray-800 mt-10 mb-30" />
                </div>
            </div>
        </>
    );
};
export default PageHeader1;
