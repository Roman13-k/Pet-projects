import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router/router";
import { Context } from "./components/Context";
import { Loader } from "./components/Loader";

function App() {
  const [isDeleting, setIsDeleting] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Context.Provider
      value={{
        isDeleting,
        setIsDeleting,
        isAuth,
        setIsAuth,
      }}>
      <BrowserRouter>
        <div className='flex flex-col justify-center items-center'>
          <NavBar />

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
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
