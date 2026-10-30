export default function Preloader() {
    return (
        <>
            <div id="preloader" className="preloader">
                <div className="animation-preloader">
                    <div className="spinner">
                    </div>
                    <div className="txt-loading">
                        <span data-text-preloader="X" className="letters-loading">
                            X
                        </span>
                        <span data-text-preloader="S" className="letters-loading">
                            S
                        </span>
                        <span data-text-preloader="T" className="letters-loading">
                            T
                        </span>
                        <span data-text-preloader="A" className="letters-loading">
                            A
                        </span>
                        <span data-text-preloader="R" className="letters-loading">
                            R
                        </span>
                    </div>
                    <p className="text-center">Loading</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
