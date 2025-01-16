import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Search } from "../pages/Search";
import { WatchList } from "../pages/WatchList";
import { MovieId } from "../pages/MovieId";

export const publicRoutes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export const privateRoutes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  { path: "/watchlist", element: <WatchList /> },
  { path: "/search/:id", element: <MovieId /> },
];
