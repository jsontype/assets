import ReactCounter from "./ReactCounter";

const Counter = () => {
  return (
    <div className="aali_tm_section">
      <div className="aali_tm_counter">
        <div className="container">
          <div className="counter_list">
            <ul className="wow fadeIn" data-wow-duration="1s">
              <li>
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="value">
                      <span className="abs">
                        {/* <span
                          className="tm_counter"
                          data-from={0}
                          data-to={5}
                          data-speed={1200}
                        >
                          0
                        </span> */}
                        <ReactCounter end={5} />
                        <label className="big">K</label>
                      </span>
                    </div>
                    <div className="text">
                      <h3>
                        JavaScript
                        <br />
                        Projects
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="value">
                      <span className="abs">
                        <ReactCounter end={90} />
                        <label className="small">+</label>
                      </span>
                    </div>
                    <div className="text">
                      <h3>
                        Digital
                        <br />
                        Products
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="value">
                      <span className="abs">
                        <ReactCounter end={300} />
                        <label className="small">+</label>
                      </span>
                    </div>
                    <div className="text">
                      <h3>
                        Happy
                        <br />
                        Clients
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span className="border moving_effect" data-direction="x" />
      </div>
    </div>
  );
};

export default Counter;
