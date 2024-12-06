import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { routes } from "./routes";

// Routing and app logic mixed up. App logic must be placed in a separate component for better structure and  code clarity.

function App() {
  return (
    <Routes>
      {routes?.map(({ path, component }) => (
        <Route path={path} element={component} key={path} />
      ))}

      <Route path="*" element={<Navigate to="/dial" replace />} />
    </Routes>
  );
}

export default App;
