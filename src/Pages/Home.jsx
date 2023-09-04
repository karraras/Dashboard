import { HiDownload } from "react-icons/hi";
import Title1 from "../component/Title1";
import { skills } from "../component/mockData";
import CircularSlider from "@fseehawer/react-circular-slider";
import Barcharts from "../component/BarCharts";
import LineCharts from "../component/LineCharts";
import GeoCharts from "../component/GeoChart";
import { mockTransactions } from "../component/mockData";

function Home() {
  return (
    <section>
      <div className="flex justify-between items-center pt-2">
        <Title1 />
        <div className="text-white bg-purple-400 flex p-1 rounded items-center gap-2 text-[10px] ">
          <span>
            <HiDownload />
          </span>
          <span>DOWNLOAD REPORTS</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[10px] gap-2 flex   ">
          {skills.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-1 p-3 justify-between bg-slate-700 "
              >
                <div className="flex flex-col gap-1">
                  <span className="text-green-400">{item.icon}</span>
                  <span className="text-white">{item.num}</span>
                  <span className="text-green-400">{item.name}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <CircularSlider
                    knobColor="#005a58"
                    knobSize={10}
                    progressColorFrom="#00bfbd"
                    progressColorTo="#009c9a"
                    progressSize={5}
                    trackColor="#b174e7ba"
                    trackSize={5}
                    dataIndex={5}
                    width={30}
                    height={30}
                    valueFontSize={0}
                    labelFontSize={0}
                  />
                  <span className="text-green-400">{`+${item.percentage}%`}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-700">
            <LineCharts />
          </div>
          <div className="text-white text-[10px] h-[213px]  gap-1  flex flex-col overflow-y-scroll ">
            <h1 className="px-2 py-4 bg-slate-700">Recent Transactions</h1>
            <div className="flex gap-1 flex-col ">
              {mockTransactions.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center p-2 justify-between w-full bg-slate-700 "
                  >
                    <div className="flex flex-col">
                      <p className="text-green-400">{item.txId}</p>
                      <p>{item.user}</p>
                    </div>
                    <p>{item.date}</p>
                    <span className="text-white bg-green-400 flex justify-center items-center px-2 py-1 rounded">{`${item.cost}`}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid-cols-3 grid gap-2 ">
          <div className="p-2 bg-slate-700">
            <h1 className="my-1 text-[10px] text-white">Campaign</h1>
            <div className="flex flex-col gap-2  w-full items-center">
              <CircularSlider
                knobColor="#005a58"
                knobSize={0}
                progressColorFrom="#00bfbd"
                progressColorTo="#009c9a"
                progressSize={5}
                trackColor="#b174e7ba"
                trackSize={5}
                dataIndex={5}
                width={54}
                height={54}
                valueFontSize={0}
                labelFontSize={0}
              />
              <span className="text-green-400 text-[10px] -mb-2">
                $48,352 revenue generated
              </span>
              <p className="text-white text-[10px]">
                Includes extra misc expenditures and costs
              </p>
            </div>
          </div>
          <div className="text-white h-[135px] p-2 bg-slate-700 ">
            <Barcharts height="118px" />
          </div>
          <div className="text-white p-2 bg-slate-700  ">
            <GeoCharts height="115px" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
