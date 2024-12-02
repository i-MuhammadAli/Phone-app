import { BsCameraVideoFill, BsFillMicMuteFill } from "react-icons/bs";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoIosKeypad } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdCallEnd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { endPhoneCall } from "../store/actions/phoneCallActions";
import { useNavigate } from "react-router-dom";
import { RxInfoCircled } from "react-icons/rx";

const actionButtons = [
  { icon: <HiSpeakerWave />, label: "Speaker" },
  { icon: <BsCameraVideoFill />, label: "FaceTime" },
  { icon: <BsFillMicMuteFill />, label: "Mute" },
  { icon: <IoPersonAddSharp />, label: "Add" },
  { icon: <MdCallEnd />, label: "End", className: "end-call" },
  { icon: <IoIosKeypad />, label: "Keypad" },
];

const CallScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { callData } = useSelector((state) => state?.call);

  // Check if callData exists before rendering the component
  if (!callData || !callData[0]) {
    return <div>Loading...</div>; // Or an error message if call data is missing
  }

  const handleCallEnd = () => {
    dispatch(endPhoneCall(() => navigate("/recent")));
  };

  return (
    <div className="callwindow">
      <div className="call-info">
        <div className="d-flex callwindow-icon ms-auto">
          <RxInfoCircled />
        </div>
        <div className="status">calling mobile...</div>
        <h1 className="contact-name mx-auto text-center text-white">
          {callData[0]?.number}
        </h1>
      </div>
      <div className="callwindow-container">
        <div className="action-grid">
          {actionButtons.map(({ icon, className, label }, index) => {
            const handleClick = label === "End" ? handleCallEnd : () => {}; // Empty handler for non-functional buttons

            return (
              <div key={index}>
                <button
                  className={`action-button ${className || ""}`}
                  onClick={handleClick}
                  aria-label={label}
                >
                  <span className="button-icons mb-2">{icon}</span>
                </button>
                <p className="text-white text-center m-0">{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CallScreen;
