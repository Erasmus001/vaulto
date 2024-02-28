export default function PricingCard({ isPopular, data }) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center rounded-3xl flex-col px-2 pb-2 ${
        isPopular ? "bg-primary-normal" : "bg-transparent"
      }`}
    >
      <div className={`py-2 ${isPopular ? "visible" : "bg-transparent"} h-10`}>
        <p className={`text-white/80 uppercase font-semibold text-md`}>
          {isPopular && "🔥Most Popular🔥"}
        </p>
      </div>
      <div className="bg-white w-full h-full p-7 flex items-start justify-start flex-col gap-10 rounded-2xl border border-gray-200  shadow">
        {/* Top */}
        <div className="w-full flex items-start justify-start flex-col gap-3">
          <div>
            <h3 className="text-2xl font-semibold text-primary-normal">
              {data?.plan}
            </h3>
          </div>

          <div>
            <h3 className="text-base text-gray-500">{data?.description}</h3>
          </div>
        </div>

        {/* Middle */}
        <div className="w-full flex items-center justify-center flex-col gap-6">
          <div className="w-full flex items-center justify-center flex-col gap-2">
            <h1 className="text-5xl font-semibold">{data?.price}</h1>
            <p className="text-base text-gray-500 font-semibold">{data?.range}</p>
          </div>

          <div className="w-full">
            <button className="w-full p-4 bg-primary-normal text-white rounded-xl cursor-pointer hover:bg-primary-deep transition-colors ease-in-out text-lg">
              Get started
            </button>
          </div>
        </div>

        {/* End */}
        <div className="w-full flex items-start justify-start flex-col gap-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Free features
            </h3>
          </div>

          <div className="w-full">
            <ol className="w-full space-y-3 pt-2">
              {data?.features?.map((feature) => (
                <li
                  key={feature?.featureId}
                  className={`${
                    feature?.isDisabled ? "text-gray-500" : ""
                  }`}
                >
                  {feature?.feature}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
