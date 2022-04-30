import { useEffect } from "react";
import Header from "../components/Header";
import Stats from "../components/Stats";
import TodaySlats from "../components/TodaySlats";

const Dashboard = () => {
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [localStorage.getItem("theme")]);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 -translate-y-28">
        <Stats />
        <TodaySlats />
      </main>
    </>
  );
};

export default Dashboard;
