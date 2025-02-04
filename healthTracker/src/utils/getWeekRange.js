export function getWeekRange(date) {
  const d = new Date(date);
  const day = d.getDay() || 7;

  const monday = new Date(date);
  monday.setDate(d.getDate() - day + 1);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  return {
    start: monday.toISOString().split("T")[0],
    end: sunday.toISOString().split("T")[0],
  };
}
