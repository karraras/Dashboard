import { AiOutlineClose } from "react-icons/ai";

function GlobalFilter(prop) {
  return (
    <div className="flex items-center gap-3">
      <span
        onClick={() => prop.click((e) => !e)}
        className="text-white cursor-pointer"
      >
        <AiOutlineClose size={15} />
      </span>
      <input
        value={prop.filter || ""}
        placeholder="Filter value"
        className="focus:outline-none text-[12px] placeholder:text-black text-white outline-none placeholder:text-[8px] bg-transparent border-b border-solid border-black  "
        onChange={(e) => prop.setFilter(e.target.value)}
      />
    </div>
  );
}

export default GlobalFilter;
