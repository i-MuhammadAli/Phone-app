import CallScreen from "../Components/CallScreen";
import DialPad from "../Components/DialPad";
import RecentLog from "../Components/RecentLog";

export const routes = [
  { path: "/dial", component: <DialPad /> },
  { path: "/recent", component: <RecentLog /> },
  { path: "/call", component: <CallScreen /> },
];
