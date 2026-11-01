
const PromoCard = ({ title, bg, btnBg, mainImg, bgImg, mainImgClass, tall }) => (
  <div
    className={`${bg} relative flex flex-col gap-2 overflow-hidden rounded-3xl p-5 ${
      tall ? "h-[415px]" : ""
    }`}
  >
    <p className="mt-8 text-end text-xl font-semibold text-white">{title}</p>
    <button className={`${btnBg} ml-auto flex items-center gap-2 rounded-full px-2 py-1 cursor-pointer`}>
      <img className="w-[20px]" src="/images/Arrow---Left-Circle.svg" alt="" />
      <p className="text-white">خرید کنید</p>
    </button>
    <img className={`absolute bottom-0 z-20 ${mainImgClass}`} src={mainImg} alt="" />
    <img className="absolute right-0 bottom-0 z-0" src={bgImg} alt="" />
    <img className="absolute right-0 bottom-0 z-10" src="/images/dashed.svg" alt="" />
  </div>
);

export default PromoCard;