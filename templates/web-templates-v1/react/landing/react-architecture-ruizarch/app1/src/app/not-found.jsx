import Link from "next/link";
import Header from "@layouts/headers/Index";

const NotFound = () => {
  return (
    <>
      <Header layout={"default"} />

      {/* content */}
      <div id="content">

        {/* 404 */}
        <section className="mil-banner mil-relative">
            <img src="/img/photo/16.jpg" className="mil-bg-img mil-scale" data-value-1=".4" data-value-2="1.4" alt="image" />
            
            <div className="mil-overlay" />
            
            <div className="container">
                <div className="mil-background-grid mil-top-space" />

                <div className="mil-banner-content">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-xl-5">

                            <div className="mil-sm-center mil-mb-90">
                                <span className="mil-suptitle mil-light mil-upper mil-mb-60">Page Not Found</span>
                                <h1 className="mil-upper mil-light mil-mb-60">Error <span className="mil-marker mil-dark">404</span></h1>
                                <p className="mil-light-soft mil-mb-60">The page you are looking for does not exist, it may have been moved or removed altogether.</p>
                                <Link href="/" className="mil-button">Back to Home</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* 404 end */}

      </div>
      {/* content */}
    </>
  );
};
export default NotFound;
