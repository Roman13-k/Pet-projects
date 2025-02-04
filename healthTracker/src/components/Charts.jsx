import React, { useContext, useEffect, useState } from "react";
import { WeeklyChart } from "./WeeklyChart";
import { getAllIndicators } from "../services/health.service";
import { getWeekRange } from "../utils/getWeekRange";
import { Context } from "../context/Context";

export function Charts() {
  const { date, indicators } = useContext(Context);
  const [stepsChart, setStepsCharts] = useState([]);

  // нужен бек с норм бд
  useEffect(() => {
    async function fetchInd() {
      const weekRange = getWeekRange(date);
      const allIndicators = await getAllIndicators();
      const data = allIndicators.filter(
        (value) => value.id >= weekRange.start && value.id <= weekRange.end,
      );

      setStepsCharts(data.map((value) => value.indicators.Steps));
    }
    fetchInd();
  }, [indicators, date]);

  useEffect(() => console.log(stepsChart), [stepsChart]);

  return (
    <section>
      <h3 className='text-3xl font-semibold m-4 text-center'>Graphs</h3>
      <WeeklyChart weeklyData={stepsChart} />
      <div className='w-[500px] h-[500px]'></div>
    </section>
  );
}
