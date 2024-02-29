import { HeaderWrapper } from "./HeaderWrapper";
import { Wrapper } from "./Wrapper";

export function Footer() {
  return (
    <footer className="w-full bg-primary-normal">
      <HeaderWrapper bgColor={"transparent"}>
        <div className="w-full flex items-center justify-center py-5 text-white">
          <p>Made with 💖 by Erasmus Mensah</p>
        </div>
      </HeaderWrapper>
    </footer>
  );
}
