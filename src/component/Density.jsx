import { MdOutlineDensityLarge } from "react-icons/md";
import {
  TbBaselineDensityMedium,
  TbBaselineDensitySmall,
} from "react-icons/tb";

function Density(prop) {
  return (
    <div
      className={` ${
        prop.density ? "flex" : "hidden"
      } p-2 flex flex-col gap-3 absolute top-[20px] z-30 rounded  left-0 bg-black`}
    >
      <div
        onClick={() => prop.setDen(5)}
        className="flex items-center gap-3 text-white"
      >
        <TbBaselineDensitySmall size={10} />
        <p>Compact</p>
      </div>
      <div
        onClick={() => prop.setDen(10)}
        className="flex items-center gap-3 text-white"
      >
        <TbBaselineDensityMedium size={10} />
        <p>Standard</p>
      </div>
      <div
        onClick={() => prop.setDen(15)}
        className="flex items-center gap-3 text-white"
      >
        <MdOutlineDensityLarge size={10} />
        <p>Comfortable</p>
      </div>
    </div>
  );
}

export default Density;
