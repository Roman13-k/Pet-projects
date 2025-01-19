import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Search } from "../pages/Search";
import { WatchList } from "../pages/WatchList";
import { MovieId } from "../pages/MovieId";
import Comments from "../pages/Comments";
import { Recommendations } from "../pages/Recommendations";

export const publicRoutes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export const privateRoutes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  { path: "/watchlist", element: <WatchList /> },
  { path: "/search/:id", element: <MovieId /> },
  { path: "/search/:id/comments", element: <Comments /> },
  { path: "/search/:id/recommendations", element: <Recommendations /> },
];
