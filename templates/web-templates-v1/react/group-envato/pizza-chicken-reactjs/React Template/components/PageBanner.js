import Link from "next/link";

const PageBanner = ({ pageTitle, pageName }) => {
  return (
    <section
      className="page-banner-area overlay pt-215 rpt-150 pb-160 rpb-120 rel z-1 bgs-cover text-center"
      style={{ backgroundImage: "url(assets/images/background/banner.jpg)" }}
    >
      <div className="container">
        <div className="banner-inner text-white">
          <h1
            className="page-title"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            {pageTitle}
          </h1>
          <nav aria-label="breadcrumb">
            <ol
              className="breadcrumb justify-content-center"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">
                {pageName ? pageName : pageTitle}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
