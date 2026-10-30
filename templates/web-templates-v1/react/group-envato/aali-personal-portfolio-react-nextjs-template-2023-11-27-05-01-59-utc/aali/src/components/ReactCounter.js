import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const ReactCounter = ({ end, decimals }) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={1.2}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span className="tm_counter" data-to={end} ref={countUpRef}>
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default ReactCounter;
