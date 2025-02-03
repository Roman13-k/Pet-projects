import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Circles } from "./components/Circles";
import { Aside } from "./components/Aside";
import { Context } from "./context/context";
import { getGoals } from "./services/health.service";

function App() {
  const [goals, setGoals] = useState({});
  const [indicators, setIndicators] = useState({
    Steps: 123,
    Calories: 2000,
    Water: 2,
    Sleep: 8,
  });
  useEffect(() => {
    async function fetchData() {
      const data = await getGoals();
      setGoals(data);
    }
    fetchData();
  }, []);

  return (
    <Context.Provider value={{ goals, setGoals, indicators, setIndicators }}>
      <Header />
      <main className='flex justify-center items-center gap-8 mb-[200px]'>
        <Circles />
        <Aside />
      </main>
    </Context.Provider>
  );
}

export default App;
