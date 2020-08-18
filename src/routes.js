import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import Orders from "./pages/Orders";

export const routes = [
  { path: "", component: Home },
  { path: "/profile", component: Profile },
  { path: "/reports", component: Reports },
  { path: "/orders", component: Orders }
];
