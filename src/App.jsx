import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StatusBar from "./Components/StatusBar";
import { routes } from "./routes";
import TabBar from "./Components/TabBar";
import CallScreen from "./Components/CallScreen";

// Routing and app logic mixed up. App logic must be placed in a separate component for better structure and  code clarity.

function App() {
  const location = useLocation();
  const { callActive } = useSelector((state) => state?.call);

  const isCallRoute = location.pathname === "/call";

  const callRoute = callActive ? (
    <Route key="/call" path="/call" element={<CallScreen />} />
  ) : (
    <Route
      key="/call"
      path="/call"
      element={<Navigate to="/recent" replace />}
    />
  );

  return (
    <section className="d-flex flex-column m-auto parent-container">
      {!isCallRoute && <StatusBar />}

      <Routes>
        {routes.map(({ path, component }, index) => {
          if (!path || !component) {
            console.error("Invalid route configuration", {
              path,
              component,
            });
            return null;
          }
          return path === "/call" ? (
            callRoute
          ) : (
            <Route key={index} path={path} element={component} />
          );
        })}

        <Route path="*" element={<Navigate to="/dial" replace />} />
      </Routes>

      {!isCallRoute && <TabBar />}
    </section>
  );
}

export default App;
