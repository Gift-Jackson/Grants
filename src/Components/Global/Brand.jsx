
const Brand = () => {
  return (
    <>
      <a href="/">
        <div className="flex items-center gap-x-2">
          <div className="h-[40px] w-[40px] flex items-center justify-center bg-primary rounded ">
            <span className="material-symbols-outlined text-white">
              currency_exchange
            </span>
          </div>
          <div>
            <h1 className="font-bold text-xl">GrantWise</h1>
              <h1 className="text-subtext text-xs font-semibold">
                ...Grow, Earn, Grants...
              </h1>
          </div>
        </div>
      </a>
    </>
  );
};

export default Brand;
