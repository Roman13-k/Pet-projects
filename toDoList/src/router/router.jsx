import About from "../Pages/About";
import DoList from "../Pages/DoList";
import Error from "../Pages/Error";
import Login from "../Pages/Login";

export const privateRoutes = [
  { path: "/dolist", element: <DoList />, exact: true },
  { path: "/about", element: <About />, exact: true },
  { path: "*", element: <Error />, exact: true },
];

export const publicRoutes = [
  { path: "/login", element: <Login />, exact: true },
  { path: "*", element: <Login />, exact: true },
];
