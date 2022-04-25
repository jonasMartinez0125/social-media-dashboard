const Header = () => {
  return (
    <header className="bg-slate-900 h-56">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-2xl text-white capitalize">
              social media dashboard
            </h1>
            <h4 className="font-semibold text-lg text-gray-600 capitalize">
              total followers: <span className="text-gray-500">123.500</span>
            </h4>
          </div>

          <div className="flex items-center justify-center">
            <label
              htmlFor="dark-mode"
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="text-white font-medium capitalize">dark mode</div>
              <div className="relative">
                <input type="checkbox" id="dark-mode" className="sr-only" />

                <div className="block bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-6 rounded-full"></div>

                <div className="dot absolute left-1 top-1 bg-slate-900 w-4 h-4 rounded-full transition active:bg-slate-800 md:hover:bg-slate-800"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
