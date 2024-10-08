/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center flex-col gap-16 pt-28 xl:bg-[#f4f6f8] mt-20">
      <div className="w-full h-full flex items-center justify-center flex-col gap-14 xl:max-w-[1440px] mx-auto">
        {/* <h2 className="xl:text-7xl xl:text-center xl:max-w-6xl xl:leading-[1.05] xl:font-[545]">
          Join over 400 thousand registered schools who trust Vaulto.
        </h2> */}
        <h2 className="xl:text-8xl xl:text-center xl:max-w-6xl xl:leading-[1.05] xl:font-semibold">
          Google Drive Made Easy With Vaulto
        </h2>
        <div className="w-full xl:max-w-3xl mx-auto flex items-center justify-center">
          <p className="xl:text-2xl xl:text-center xl:leading-[1.5]">
            Easily access your google drive files with ease. It's no wonder
            Vaulto is the choice for accessing and sharing important files.
          </p>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Link
            href="#plans"
            className="py-5 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors ease-in-out font-medium"
          >
            Find your plan
          </Link>
          <Link
            href="/signup"
            className="py-4 px-10 rounded-xl text-lg hover:bg-primary-deep transition-colors ease-in-out bg-primary-light text-white"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="w-full flex items-center justify-between xl:max-w-[1440px] mx-auto xl:h-[800px] xl:rounded-t-3xl xl:overflow-hidden xl:shadow-sm">
        <div className="bg-[#e4e8ed] w-full h-full" />
      </div>
    </section>
  );
}
