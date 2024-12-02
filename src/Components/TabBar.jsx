import { Row, Col } from "reactstrap";
import { FaUser } from "react-icons/fa";
import { IoIosKeypad } from "react-icons/io";
import { TbClockHour9Filled } from "react-icons/tb";
import { IoStar } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const TabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: IoStar, label: "Favourites" },
    { icon: TbClockHour9Filled, label: "Recents", path: "/recent" },
    { icon: FaUser, label: "Contacts" },
    { icon: IoIosKeypad, label: "Keypad", path: "/dial" },
  ];

  const handleTabBtns = (path) => {
    if (path === "/recent" || path === "/dial") {
      navigate(path);
    }
  };

  return (
    <>
      <section className="fixed-bottom tabbar-container">
        <Row className="text-center tabbar-row ">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Col key={index}>
                <button
                  onClick={() => item.path && handleTabBtns(item.path)}
                  disabled={!item.path}
                >
                  <item.icon
                    size={24}
                    color={isActive ? "dodgerblue" : "#333"}
                  />
                  <p
                    className="m-0"
                    style={{
                      color: isActive ? "dodgerblue" : "#333",
                    }}
                  >
                    {item.label}
                  </p>
                </button>
              </Col>
            );
          })}
          <div className="tabbar-line mx-auto"></div>
        </Row>
      </section>
    </>
  );
};

export default TabBar;
