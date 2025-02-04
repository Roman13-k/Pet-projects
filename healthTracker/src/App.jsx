import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Circles } from "./components/Circles";
import { Aside } from "./components/Aside";
import { Context } from "./context/context";
import {
  getGoals,
  getIndicators,
  postInitDate,
} from "./services/health.service";
import { getCurDate } from "./utils/getCurDate";
import { Charts } from "./components/Charts";

function App() {
  const [isLoarding, setIsLoarding] = useState(false);
  const [date, setDate] = useState(getCurDate());
  const [goals, setGoals] = useState({});
  const [indicators, setIndicators] = useState({});
  const zeroInd = {
    id: date,
    indicators: {
      Steps: 0,
      Calories: 0,
      Water: 0,
      Sleep: 0,
    },
  };
  useEffect(() => {
    async function fetchData() {
      setIsLoarding(true);
      const data = await getGoals();
      setGoals(data);

      try {
        const ind = await getIndicators(date);
        setIndicators(ind.indicators || zeroInd.indicators);
      } catch {
        setIndicators(zeroInd.indicators);
        await postInitDate(zeroInd, date);
      }

      setIsLoarding(false);
    }
    fetchData();
  }, [date]);

  if (isLoarding) return <p>Loarding...</p>;

  return (
    <Context.Provider
      value={{ goals, setGoals, indicators, setIndicators, date, setDate }}>
      <Header />
      <main className='flex flex-wrap justify-center items-center gap-16 mb-[200px]'>
        <Circles />
        <Aside />
        <Charts />
      </main>
    </Context.Provider>
  );
}

export default App;
