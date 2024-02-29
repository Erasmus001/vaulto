import Link from "next/link";
import { HeaderWrapper } from "./HeaderWrapper";

export default function Header() {
  return (
    <header className="w-full xl:h-20 lg:h-20 md:h-20 border-b border-b-secondary-100 xl:top-0 xl:fixed xl:z-[999px] xl:left-0 xl:bg-white">
      <HeaderWrapper>
        <div className="flex items-center justify-start">
          <div>
            <h3 className="font-semibold text-xl">Vaulto</h3>
          </div>
        </div>

        <nav className="xl:flex xl:items-center xl:justify-start xl:gap-16 xl:text-base lg:text-base md:hidden hidden">
          <Link href="/#">Why Vaulto</Link>
          <Link href="/#">Solutions</Link>
          <Link href="/#">Pricing</Link>
          <Link href="/#">About Us</Link>
        </nav>

        <div className="xl:flex xl:items-center xl:justify-center xl:gap-3 hidden">
          <Link
            href="#"
            className="py-4 px-6 rounded-lg transition-colors ease-in-out"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="py-3.5 px-8 rounded-xl text-sm hover:bg-primary-deep transition-colors ease-in-out bg-primary-light text-white"
          >
            Get Started
          </Link>
        </div>
      </HeaderWrapper>
    </header>
  );
}
