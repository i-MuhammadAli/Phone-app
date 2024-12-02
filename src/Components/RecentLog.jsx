import { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { handleDelCall } from "../store/actions/phoneCallActions";

const RecentLog = () => {
  const { callData } = useSelector((state) => state?.call);
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState("All");

  const handleDeleteCallLog = (callId) => {
    dispatch(handleDelCall(callId));
  };

  const filteredCallLog = callData.filter(
    (call) => activeFilter === "All" || call.type === "Missed"
  );

  return (
    <section className="recents">
      <div className="recents-container">
        <div className="header">
          <span className="text-primary edit-btn">Edit</span>
          <div className="filter-buttons mx-auto">
            <button
              className={`filter px-4 ${
                activeFilter === "All" ? "active" : "non-active"
              }`}
              onClick={() => setActiveFilter("All")}
              aria-label="Show all calls"
            >
              All
            </button>
            <button
              className={`filter px-3 ${
                activeFilter === "Missed" ? "active" : "non-active"
              }`}
              onClick={() => setActiveFilter("Missed")}
              aria-label="Show missed calls"
            >
              Missed
            </button>
          </div>
        </div>
        <div className="title px-3">
          <h2 className="text-white my-3">Recents</h2>
        </div>
        {filteredCallLog.map(({ id, number, time }, index) => (
          <div className="call-list" key={id || index}>
            {/* Prefer using 'id' as key if available */}
            <div className="call-item">
              <div className="call-log-info text-start">
                <h5 className="logs-contact-name text-danger m-0">{number}</h5>
                <p className="call-type m-0">Phone Call Audio</p>
              </div>
              <div className="call-details">
                <span className="call-time">{time}</span>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteCallLog(id)}
                >
                  <RiDeleteBin5Fill />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentLog;
