import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full xl:h-20 lg:h-20 md:h-20 border-b border-b-secondary-100 xl:top-0 xl:sticky xl:z-50 xl:bg-white">
      <div className="w-full h-full flex items-center justify-between xl:max-w-[1440px] mx-auto">
        <div className="flex flex-1 items-center justify-start gap-20">
          <div>
            <h3 className="font-semibold text-xl">Logo</h3>
          </div>

          <nav className="xl:flex xl:items-center xl:justify-start xl:gap-10 xl:text-base lg:text-base md:hidden hidden">
            <Link href="/#">Why Vaulto</Link>
            <Link href="/#">Solutions</Link>
            <Link href="/#">Pricing</Link>
            <Link href="/#">About Us</Link>
          </nav>
        </div>

        <div className="xl:flex xl:items-center xl:justify-center xl:gap-6 hidden">
          <Link
            href="#"
            className="py-4 px-6 rounded-lg transition-colors ease-in-out"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="py-4 px-6 rounded-lg text-sm hover:bg-primary-deep transition-colors ease-in-out bg-primary-light text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
