import { IoIosWifi } from "react-icons/io";
import arrowIcon from "../assets/icons/Arrow.svg";
import batteryIcon from "../assets/icons/battery.svg";
import { useState, useEffect } from "react";

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
    }, 60000); // Update the time every minute instead of every second to reduce unnecessary updates

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div className="status-bar">
      <div className="status-bar-container">
        {/* Time */}
        <div className="status-bar-time">
          <span className="status-time">{currentTime}</span>
          <img src={arrowIcon} alt="Arrow Icon" />
        </div>

        {/* Signal Strength, Wi-Fi, and Battery */}
        <div className="status-bar-icon">
          <div className="status-bar-dots" aria-hidden="true">
            .... {/* Placeholder for dots */}
          </div>
          <div className="status-bar-wifi" aria-label="Wi-Fi">
            <IoIosWifi />
          </div>
          <div className="status-bar-battery-container">
            <img
              className="status-bar-battery"
              src={batteryIcon}
              alt="Battery Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
