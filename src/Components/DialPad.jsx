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

  const formatTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
  };

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
    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center bg-black text-white dialpad-container">
      <input
        type="text"
        readOnly
        value={currentNumber}
        className="bg-transparent border-0 text-center fs-1 text-white number-preview"
      />
      <p className="text-primary cursor-pointer mb-2">Add Number</p>
      <div className="d-grid align-items-center dialpad-grid">
        {dialPadValues.map((value) => (
          <button
            key={value.no}
            color="white"
            className="d-flex justify-content-center align-items-center  text-white dialpad-button"
            onClick={() => handleButtonClick(value.no)}
          >
            <div className="text-center">
              <h2 className="m-0 fw-light">{value.no}</h2>
              <small>{value.chars}</small>
            </div>
          </button>
        ))}
        <button
          className="dialpad-call"
          onClick={handleCallBtn}
          disabled={!currentNumber}
        >
          <IoIosCall color="white" />
        </button>
        <button
          className="d-flex justify-content-center align-items-center"
          onClick={handleRemoveNumBtn}
          disabled={!currentNumber}
        >
          <img src={removeBtn} alt="Delete Icon" />
        </button>
      </div>
    </div>
  );
};

export default DialPad;
