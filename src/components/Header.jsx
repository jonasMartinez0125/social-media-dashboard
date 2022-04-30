import { useState, useEffect } from "react";

const Header = () => {
  const [darkmode, setdarkmode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setdarkmode(true);
    }
  }, [])

  const toggleDarkmode = () => {

    if (darkmode) {
      document.documentElement.classList.remove("dark");
      setdarkmode(false);
    } else {
      document.documentElement.classList.add("dark");
      setdarkmode(true);
    }

    localStorage.setItem("theme", darkmode ? "dark" : "light"); 
  };

  return (
    <header className="bg-gray-100 h-56 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between py-5 gap-2 md:flex-row md:gap-0">
          <div className="flex flex-col items-center order-2 md:items-start md:order-1">
            <h1 className="font-bold text-xl text-gray-900 capitalize md:text-2xl dark:text-white">
              social media dashboard
            </h1>
            <h4 className="font-semibold text-base text-gray-600 capitalize md:text-lg">
              total followers: <span className="text-gray-500">123.500</span>
            </h4>
          </div>

          <div className="self-end flex items-center justify-center order-1 md:self-center md:order-2">
            <label
              htmlFor="dark-mode"
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="text-gray-900 text-sm font-medium capitalize md:text-base dark:text-white">
                dark mode
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  id="dark-mode"
                  className="sr-only"
                  onChange={toggleDarkmode}
                  checked={darkmode}
                />

                <div className="block bg-gradient-to-r from-cyan-300 to-blue-300 w-10 h-6 rounded-full dark:from-cyan-500 dark:to-blue-500"></div>

                <div className="dot absolute left-1 top-1 bg-gray-100 w-4 h-4 rounded-full transition active:bg-gray-200 md:hover:bg-gray-200 dark:bg-slate-900 dark:active:bg-slate-800 dark:hover:bg-slate-800"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
