import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";

export const routes = [
  { path: "", component: Home },
  { path: "/profile", component: Profile },
  { path: "/reports", component: Reports }
];
