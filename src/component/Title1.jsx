function Title1(prop) {
  return (
    <div className="text-[10px]">
      <h1 className="text-white text-xl">{prop.title}</h1>
      <p className="text-green-700">{prop.text}</p>
    </div>
  );
}

export default Title1;
