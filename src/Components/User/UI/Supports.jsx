const items = [
  {
    icon: "public",
    main: "Ukraine",
    sub: "Humanitarian Service",
    digit: "182.5k",
  },
  {
    icon: "coronavirus",
    main: "Covid-19",
    sub: "Respondant",
    digit: "235.8k",
  },
  {
    icon: "detector_smoke",
    main: "Disaster & Crisis",
    sub: "Response",
    digit: "149k",
  },
  {
    icon: "sports_and_outdoors",
    main: "Sports",
    sub: "Football, Cricket Kit",
    digit: "119k",
  },
];
const Supports = () => {
  return (
    <>
      <div className="my-8">
        <h1 className="font-bold">Our Humantarian Support</h1>
        <ul className="mt-4 shadow-lg p-4 rounded-sm flex flex-col gap-y-2 cursor-default">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-x-2 p-2 hover:bg-secondary">
              <div>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className="flex-1">
                <h1 className="font-semibold text-sm">{item.main}</h1>
                <p className="text-xs">{item.sub}</p>
              </div>
              <p className="text-primary">{item.digit}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Supports;
