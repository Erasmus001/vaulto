import { Wrapper } from "./Wrapper";
import Link from "next/link";

export default function CallToActionBanner() {
  return (
    <section className="w-full bg-primary-light">
      <Wrapper bgColor={"transparent"}>
        <div className="w-full flex items-center justify-center bg-primary-light text-white">
          <div className="flex items-center justify-center flex-col gap-y-12 p-14">
            <h2 className="text-5xl font-semibold">
              Millions of people trust us
            </h2>
            <p className="text-[23px] font-medium max-w-2xl text-center leading-[1.4]">
              Join the millions of individual and organizations who trust us to
              store and protect their data in the cloud.
            </p>
            <Link
              href={"/"}
              className="py-3.5 px-8 rounded-xl text-xl hover:bg-white/80 transition-colors ease-in-out bg-white text-primary-normal"
            >
              Sign up for free
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
