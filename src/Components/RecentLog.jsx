import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { handleDelCall } from "../store/actions/phoneCallActions";
import { Layout } from "../layout";

// Implement All | Missed tabs functionality. No need for that.
// Otherwise code clarity is very good.

const RecentLog = () => {
  const { callData } = useSelector((state) => state?.call);
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState("All");

  const handleDeleteCallLog = (callId) => {
    dispatch(handleDelCall(callId));
  };

  return (
    <Layout>
      <section className="d-flex flex-column bg-black overflow-y-auto  text-white recents">
        <div className="mx-auto w-100 recents-container">
          <div className="d-flex align-items-center header">
            <span className="text-primary cursor-pointer edit-btn">Edit</span>
            <div className="d-flex mx-auto text-white filter-buttons">
              <button
                className={`filter px-4 ${
                  activeFilter === "All" ? "active" : "non-active"
                }`}
                onClick={() => setActiveFilter("All")}
              >
                All
              </button>
              <button
                className={`filter px-3 ${
                  activeFilter === "Missed" ? "active" : "non-active"
                }`}
                onClick={() => setActiveFilter("Missed")}
              >
                Missed
              </button>
            </div>
          </div>
          <div className="title px-3">
            <h2 className="text-white my-3">Recents</h2>
          </div>
          {callData?.map(({ id, number, time }) => (
            <div className="call-list" key={id}>
              <div className="d-flex justify-content-between align-items-center call-item">
                <div className="d-flex flex-column text-start call-log-info">
                  <h5 className="logs-contact-name text-danger m-0">
                    {number}
                  </h5>
                  <p className="call-type m-0">Phone Call Audio</p>
                </div>
                <div className="call-details d-flex justify-content-center align-items-center">
                  <span className="call-time">{time}</span>
                  <button
                    className=" delete-button cursor-pointer"
                    onClick={() => handleDeleteCallLog(id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default RecentLog;
