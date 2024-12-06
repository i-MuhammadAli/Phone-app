import StatusBar from "../Components/StatusBar";
import TabBar from "../Components/TabBar";

export const Layout = ({ children }) => {
  return (
    <section className="d-flex flex-column m-auto parent-container">
      <StatusBar />
      {children}
      <TabBar />
    </section>
  );
};
