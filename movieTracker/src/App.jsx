import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router/router";
import { useEffect, useState } from "react";
import { Context } from "./context/context";
import { Header } from "./components/Header";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [movies, setMovies] = useState({ results: [] });
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (localStorage.getItem("auth")) setIsAuth(true);
  }, []);

  return (
    <Context.Provider
      value={{ isAuth, setIsAuth, movies, setMovies, search, setSearch }}>
      <BrowserRouter>
        {isAuth ? <Header /> : ""}
        <Routes>
          {isAuth
            ? privateRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                  exact={route.exact}
                />
              ))
            : publicRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                  exact={route.exact}
                />
              ))}
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
