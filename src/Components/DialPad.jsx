import { useState } from "react";
import { IoIosCall } from "react-icons/io";
import removeBtn from "../assets/icons/delete-icon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makePhoneCall } from "../store/actions/phoneCallActions";

const DialPad = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentNumber, setCurrentNumber] = useState("");

  const dialPadValues = [
    { no: "1", chars: "" },
    { no: "2", chars: "ABC" },
    { no: "3", chars: "DEF" },
    { no: "4", chars: "GHI" },
    { no: "5", chars: "JKL" },
    { no: "6", chars: "MNO" },
    { no: "7", chars: "PQRS" },
    { no: "8", chars: "TUV" },
    { no: "9", chars: "WXYZ" },
    { no: "*", chars: "" },
    { no: "0", chars: "+" },
    { no: "#", chars: "" },
  ];

  const handleButtonClick = (value) => {
    setCurrentNumber((prev) => prev + value);
  };

  const handleRemoveNumBtn = () => {
    setCurrentNumber(currentNumber.slice(0, -1));
  };

  // Clean function to format time
  const formatTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
  };

  // Generate a unique ID
  const generateUniqueId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  const handleCallBtn = () => {
    if (currentNumber) {
      const uniqueId = generateUniqueId();
      dispatch(
        makePhoneCall({
          id: uniqueId,
          time: formatTime(),
          number: currentNumber,
        })
      );
      navigate("/call");
    }
  };

  return (
    <div className="dialpad-container">
      <div className="number-display">
        <input
          type="text"
          readOnly
          value={currentNumber}
          className="text-center number-preview"
        />
      </div>
      <p className="text-primary cursor-pointer">Add Number</p>
      <div className="dialpad-grid">
        {dialPadValues.map((value) => (
          <button
            key={value.no}
            className="dialpad-button"
            onClick={() => handleButtonClick(value.no)}
          >
            <div className="d-flex flex-column">
              <h2 className="dialpad-num m-0 fw-normal">{value.no}</h2>
              <h6 className="dialpad-chars m-0">{value.chars}</h6>
            </div>
          </button>
        ))}
        <button className="dialpad-button dialpad-call" onClick={handleCallBtn}>
          <IoIosCall />
        </button>
        <button onClick={handleRemoveNumBtn} disabled={!currentNumber}>
          <img src={removeBtn} alt="Delete Icon" />
        </button>
      </div>
    </div>
  );
};

export default DialPad;
