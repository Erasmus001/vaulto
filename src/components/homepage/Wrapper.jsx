export function Wrapper({ children, bgColor }) {
  return (
    <div
      className={`xl:max-w-[1440px] mx-auto xl:w-full py-20 xl:flex xl:items-start xl:justify-between xl:gap-20 ${
        bgColor ? bgColor : "bg-white"
      } `}
    >
      {children}
    </div>
  );
}
