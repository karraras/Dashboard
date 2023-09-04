import "./index.css";
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import user from "../public/assets/user.png";
import { DashData } from "./component/mockData";
import { Routes, Route } from "react-router-dom";
import { BsMoon, BsFillGearFill, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Home from "./Pages/Home";
import BarChart from "./Pages/BarChart";
import Calender from "./Pages/Calender";
import Contacts from "./Pages/Contacts";
import GeoCharts from "./Pages/GeoCharts";
import FAQ from "./Pages/FAQ";
import Invoices from "./Pages/Invoices";
import LineChart from "./Pages/LineChart";
import PieCharts from "./Pages/PieCharts";
import Profile from "./Pages/Profile";
import Team from "./Pages/Team";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function App() {
  const [active, setActive] = useState("");
  return (
    <main className="  select-none flex">
      <aside className="p-4 bg-slate-800 text-white h-screen w-[200px]">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-[12px]">ADMINS</h1>
            <span className="text-[12px]">
              <FaBars />
            </span>
          </div>

          <div className="flex flex-col items-center mb-2">
            <img src={user} alt="" className="w-12 h-12 " />
            <h1 className="text-sm font-bold">Ed Roh</h1>
            <p className="text-[10px] text-green-600">VP Fancy Admine</p>
          </div>

          {DashData?.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={`/${item.Link}`}
                onClick={() => {
                  setActive(index);
                }}
                className={`${
                  item.Link || item.Link === ""
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
              >
                <div
                  className={`flex py-1   gap-2 items-center ${
                    active === index && "text-purple-600"
                  }`}
                >
                  {item.icon && (
                    <span className=" text-[10px]">{item.icon}</span>
                  )}
                  {item.name && (
                    <span className="text-[10px]">{item.name}</span>
                  )}
                  {item.space && (
                    <span className=" text-[10px] mt-1 -ml-1 text-gray-400">
                      {item.space}
                    </span>
                  )}
                </div>
              </NavLink>
            );
          })}
        </div>
      </aside>
      <section className="flex-1 p-2  bg-black">
        <nav className="flex justify-between  ">
          <div className="bg-slate-800 relative h-[30px] w-[180px] ">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent px-2 h-full  rounded w-full text-white text-[10px] border-none outline-none"
            />
            <span className="absolute text-white top-1/2 right-0  -translate-y-1/2">
              <FiSearch />
            </span>
          </div>
          <div className="text-white text-[10px] flex gap-2 items-center">
            <span>
              <BsMoon />{" "}
            </span>
            <span>
              <MdOutlineNotificationsNone />{" "}
            </span>
            <span>
              <BsFillGearFill />{" "}
            </span>
            <span>
              <BsFillPersonFill />{" "}
            </span>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Invoices" element={<Invoices />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Calender" element={<Calender />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/BarChart" element={<BarChart />} />
          <Route path="/PieCharts" element={<PieCharts />} />
          <Route path="/LineChart" element={<LineChart />} />
          <Route path="/GeoCharts" element={<GeoCharts />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
