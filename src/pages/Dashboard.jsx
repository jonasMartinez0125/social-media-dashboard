import Header from "../components/Header";
import Stats from "../components/Stats";
import TodaySlats from "../components/TodaySlats";


const Dashboard = () => {
  return (
    <div className="bg-gray-900 min-w-full min-h-screen">
        <Header />
        <main className="container mx-auto px-4 -translate-y-28">
          <Stats />
          <TodaySlats />
        </main>
    </div>
  )
}

export default Dashboard;