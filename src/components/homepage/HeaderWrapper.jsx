export function HeaderWrapper({ children, bgColor }) {
  return (
    <div
      className={`xl:max-w-[1440px] mx-auto xl:w-full h-full xl:flex xl:items-center xl:justify-between xl:gap-20 ${
        bgColor ? bgColor : "bg-white"
      } `}
    >
      {children}
    </div>
  );
}
