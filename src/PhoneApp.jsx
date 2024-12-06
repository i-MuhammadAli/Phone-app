const PhoneApp = () => {
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

      {!isCallRoute && <TabBar />}
    </section>
  );
};

export default PhoneApp;
