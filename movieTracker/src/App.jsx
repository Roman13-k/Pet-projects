import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router/router";
import { useEffect, useState } from "react";
import { Context } from "./context/context";
import { Header } from "./components/Header";
import { Loarding } from "./components/Loarding";
import { Error } from "./pages/Error";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (localStorage.getItem("auth")) setIsAuth(true);
    setAuthLoading(false);
  }, []);

  if (authLoading) return <Loarding />;

  return (
    <Context.Provider value={{ isAuth, setIsAuth, search, setSearch }}>
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
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
