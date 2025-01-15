import { Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Search } from "../pages/Search";
import { WatchList } from "../pages/WatchList";
import { MovieId } from "../pages/MovieId";

export const publicRoutes = [
  { path: "*", element: <Navigate to='/login' />, exact: true },
  { path: "/login", element: <Login />, exact: true },
  { path: "/register", element: <Register />, exact: true },
];

export const privateRoutes = [
  { path: "*", element: <Navigate to='/home' />, exact: true },
  { path: "/home", element: <Home />, exact: true },
  { path: "/search", element: <Search />, exact: true },
  { path: "/watchlist", element: <WatchList />, exact: true },
  { path: "/search/:id", element: <MovieId />, exact: true },
];
