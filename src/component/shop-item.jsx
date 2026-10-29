function Item({ image, title, price }) {
  return (
    <div className="group border-gray hover hover:border-orange m-2 flex flex-col items-center border-2 border-dashed px-2 transition-colors duration-400 sm:px-1">
      <div className="h-[204px]">
        <img className="bg-transparent" src={image} alt="" />
      </div>
      <div className="my-1 w-full text-end">
        <p className="font-sans text-xl">{title} </p>
        <p className="font-sans text-xl">( کیلوگرم4)</p>
      </div>
      <div className="my-2 flex w-full justify-between gap-2">
        <p className="text-green group-hover:text-orange text-xl font-semibold transition-colors duration-300">
          {price}
        </p>
        <p className="text-green group-hover:text-orange text-xl font-semibold transition-colors duration-300">
          :قیمت
        </p>
      </div>
      <button className="bg-blue group-hover:bg-orange my-2 flex items-center justify-center gap-2 rounded-xl px-4 py-2 transition-colors duration-300">
        <p className="text-white">افزودن سبد خرید</p>
        <img src="public/images/Combined-Shape.svg" alt="" />
      </button>
    </div>
  );
}
export default Item;
