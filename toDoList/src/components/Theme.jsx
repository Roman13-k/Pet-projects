import { useEffect, useState } from "react";

export function Theme() {
  const [safedTheme, setSafedTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    if (safedTheme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [safedTheme]);

  const tooggleTheme = () => {
    const newTheme = safedTheme == "dark" ? "light" : "dark";
    setSafedTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className='p-2 rounded-md' onClick={tooggleTheme}>
      <img
        src={
          localStorage.getItem("theme") == "dark"
            ? "../../public/sun.svg"
            : "../../public/night.svg"
        }
      />
    </button>
  );
}
