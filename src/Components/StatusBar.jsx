import { IoIosWifi } from "react-icons/io";
import arrowIcon from "../assets/icons/Arrow.svg";
import batteryIcon from "../assets/icons/battery.svg";
import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

const StatusBar = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="d-flex justify-content-center align-content-center bg-black text-white status-bar">
      <Row className="px-4 status-bar-container">
        {/* Time */}
        <Col className="d-flex align-items-center p-0 status-bar-time ">
          <span className="status-time">{currentTime}</span>
          <img src={arrowIcon} alt="Arrow Icon" />
        </Col>

        <Col className="d-flex justify-content-end align-items-center p-0 status-bar-icon">
          <div className="status-bar-dots">....</div>
          <div className="d-flex align-items-center justify-content-center status-bar-wifi">
            <IoIosWifi />
          </div>
          <div className="status-bar-battery-container">
            <img
              className="status-bar-battery"
              src={batteryIcon}
              alt="Battery Icon"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default StatusBar;
