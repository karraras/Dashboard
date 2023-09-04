function Export(prop) {
  return (
    <div
      className={` ${
        prop.exp ? "flex " : "hidden"
      }  flex-col gap-3 bg-black rounded z-30 w-[80px]  absolute top-[20px] left-0 text-[8px] p-2 text-white`}
    >
      <p>Download as CSV</p>
      <p>Print </p>
    </div>
  );
}

export default Export;
