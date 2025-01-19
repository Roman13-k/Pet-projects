import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router/router";
import { useEffect, useState } from "react";
import { Context } from "./context/context";
import { Header } from "./components/Header";
import { Loarding } from "./components/Loarding";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [movies, setMovies] = useState({ results: [] });
  const [authLoading, setAuthLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (localStorage.getItem("auth")) setIsAuth(true);
    setAuthLoading(false);
  }, []);

  if (authLoading) return <Loarding />;

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
                />
              ))
            : publicRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
