import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    // window.velocity = require("velocity-animate/velocity.js");
    // const preload = document.querySelector(".preloader");
    // setTimeout(function () {
    //   preload.getElementsByClassName("spinner")[0].velocity(
    //     {
    //       opacity: "0",
    //       translateY: "-40px",
    //     },
    //     {
    //       duration: 400,
    //       complete: function () {
    //         preload.getElementsByClassName("box-1")[0].velocity(
    //           {
    //             translateY: "-100%",
    //           },
    //           {
    //             duration: 1000,
    //             easing: [0.7, 0, 0.3, 1],
    //           }
    //         );
    //         preload.getElementsByClassName("box-2")[0].velocity(
    //           {
    //             translateY: "-100%",
    //           },
    //           {
    //             duration: 400,
    //             easing: [0.7, 0, 0.3, 1],
    //           }
    //         );
    //       },
    //     }
    //   );
    // }, 1000);
  }, []);

  return (
    <div className="preloader">
      <div className="box-1">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner">
              <div className="lines" />
            </div>
          </div>
        </div>
      </div>
      <div className="box-2" />
    </div>
  );
};
export default Preloader;
