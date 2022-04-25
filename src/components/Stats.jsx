

const Stats = () => {
  return (
    <div className="grid gap-5 grid-cols-4 pt-5">

        <div
            className="max-w-sm relative text-center rounded-lg bg-slate-800 select-none transition ease-in-out overflow-hidden mx-auto my-0 px-6 pt-8 pb-6 w-full active:bg-slate-900 md:hover:cursor-pointer md:hover:bg-slate-900"
        >
            <div className="flex justify-center items-center">
                <figure className="bg-[url('/assets/images/icon-facebook.svg')] bg-contain bg-center bg-no-repeat self-end h-5 w-5"></figure>
                <span className="font-bold text-xs text-gray-500 ml-2">@nathanO</span>
            </div>
            <div className="flex flex-col pt-5">
                <span className="font-bold transition text-6xl text-white">2.050</span>
                <span className="transition text-base text-gray-500 tracking-widest uppercase">followers</span>
            </div>
            <div className="flex justify-center items-center gap-1 pt-5">
                <figure className="bg-[url('/assets/images/icon-up.svg')] bg-contain bg-center bg-no-repeat h-2 w-2"></figure>
                <span className="text-xs font-bold text-green-600 uppercase">12 today</span>
            </div>
            <div className="bg-slat--facebook absolute top-0 left-0 h-1 w-full"></div>
        </div>

        <div
            className="max-w-sm relative text-center rounded-lg bg-slate-800 select-none transition ease-in-out overflow-hidden mx-auto my-0 px-6 pt-8 pb-6 w-full active:bg-slate-900 md:hover:cursor-pointer md:hover:bg-slate-900"
        >
            <div className="flex justify-center items-center">
                <figure className="bg-[url('/assets/images/icon-twitter.svg')] bg-contain bg-center bg-no-repeat self-end h-5 w-5"></figure>
                <span className="font-bold text-xs text-gray-500 ml-2">@nathanO</span>
            </div>
            <div className="flex flex-col pt-5">
                <span className="font-bold transition text-6xl text-white">20.550</span>
                <span className="transition text-base text-gray-500 tracking-widest uppercase">followers</span>
            </div>
            <div className="flex justify-center items-center gap-1 pt-5">
                <figure className="bg-[url('/assets/images/icon-up.svg')] bg-contain bg-center bg-no-repeat h-2 w-2"></figure>
                <span className="text-xs font-bold text-green-600 uppercase">50 today</span>
            </div>
            <div className="bg-slat--twitter absolute top-0 left-0 h-1 w-full"></div>
        </div>

        <div
            className="max-w-sm relative text-center rounded-lg bg-slate-800 select-none transition ease-in-out overflow-hidden mx-auto my-0 px-6 pt-8 pb-6 w-full active:bg-slate-900 md:hover:cursor-pointer md:hover:bg-slate-900"
        >
            <div className="flex justify-center items-center">
                <figure className="bg-[url('/assets/images/icon-instagram.svg')] bg-contain bg-center bg-no-repeat self-end h-5 w-5"></figure>
                <span className="font-bold text-xs text-gray-500 ml-2">@nathanO</span>
            </div>
            <div className="flex flex-col pt-5">
                <span className="font-bold transition text-6xl text-white">100.100</span>
                <span className="transition text-base text-gray-500 tracking-widest uppercase">followers</span>
            </div>
            <div className="flex justify-center items-center gap-1 pt-5">
                <figure className="bg-[url('/assets/images/icon-up.svg')] bg-contain bg-center bg-no-repeat h-2 w-2"></figure>
                <span className="text-xs font-bold text-green-600 uppercase">900 today</span>
            </div>
            <div className="bg-slat--instagram absolute top-0 left-0 h-1 w-full"></div>
        </div>

        <div
            className="max-w-sm relative text-center rounded-lg bg-slate-800 select-none transition ease-in-out overflow-hidden mx-auto my-0 px-6 pt-8 pb-6 w-full active:bg-slate-900 md:hover:cursor-pointer md:hover:bg-slate-900"
        >
            <div className="flex justify-center items-center">
                <figure className="bg-[url('/assets/images/icon-youtube.svg')] bg-contain bg-center bg-no-repeat self-end h-5 w-5"></figure>
                <span className="font-bold text-xs text-gray-500 ml-2">@nathanO</span>
            </div>
            <div className="flex flex-col pt-5">
                <span className="font-bold transition text-6xl text-white">46.000</span>
                <span className="transition text-base text-gray-500 tracking-widest uppercase">followers</span>
            </div>
            <div className="flex justify-center items-center gap-1 pt-5">
                <figure className="bg-[url('/assets/images/icon-down.svg')] bg-contain bg-center bg-no-repeat h-2 w-2"></figure>
                <span className="text-xs font-bold text-red-500 uppercase">120 today</span>
            </div>
            <div className="bg-slat--youtube absolute top-0 left-0 h-1 w-full"></div>
        </div>
    </div>
  )
}

export default Stats