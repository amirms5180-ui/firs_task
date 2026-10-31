function nav() {
  return (
    <>
      <div className="my-8 grid grid-cols-3 items-center gap-[33px] max-lg:grid-cols-1">
        <div className=" hover bg-ligth-orange flex items-center justify-between rounded-[19px] px-4 py-0">
          <div>
            <img  src="public/images/Arrow - Left Circle.svg" alt="" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-end">غذاولوازم خانگی سگ</p>
            <img src="public/images/dog-sticker.svg" alt="" />
          </div>
        </div>
        <div className="hover bg-light-blu flex items-center justify-between rounded-[19px] px-4 py-2">
          <div>
            <img src="public/images/Arrow - Left Circle -blue.svg" alt="" />
          </div>
          <div className="flex items-center gap-2">
            <p>غذاولوازم گربه</p>
            <img src="public/images/cat-sticker.svg" alt="" />
          </div>
        </div>
        <div className="hover  flex items-center justify-between rounded-[19px] px-4 py-2">
          <div>
            <img src="public/images/Arrow - Left-purple Circle.svg" alt="" />
          </div>
          <div className="flex items-center gap-2">
            <p>غذا ماهی</p>
            <img src="public/images/fish-stiker.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-[17px]">
        <p className="text-orange text-xl font-bold">مشاهده همه</p>
        <p className="text-2xl font-bold">جدید ترین محصولات</p>
      </div>
    </>
  );
}
export default nav;
