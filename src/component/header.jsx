import { useState } from "react";

function header() {
  const [hamber, sethamber] = useState(false);
  return (
    <>
      <header className="header my-8 flex w-full items-center justify-between">
        <div className="header_rigth flex justify-between gap-[40px]">
          <div className="header_icons flex items-center gap-[29px] max-lg:hidden">
            <img
              className="h-[33.12px] w-[26.399999618530273]"
              src="public/images/Group 8768.svg"
              alt=""
            />
            <img
              className="h-[32.568145751953125] w-[33.33320236206055]"
              src="public/images/Heart.svg"
              alt=""
            />
            <img
              className="h-[39.28px] w-[45.6px]"
              src="public/images/Buy.svg"
              alt=""
            />
          </div>
          <div className="flex items-center gap-2 max-xl:hidden">
            <div className="text-center">
              <p className="font-bold">ارسال رایگان</p>
              <p className="opacity-26"> تمامی خرید ها</p>
            </div>
            <img
              className="h-[37.5PX] w-[37.5PX]"
              src="public/images/ersalrayegan.svg"
              alt=""
            />
          </div>
          <div className="flex items-center gap-4 max-xl:hidden">
            <div className="text-center">
              <p className=""> ضمانت اصالت کالا</p>
              <p className="opacity-26"> تضمین اصالت 100 </p>
            </div>
            <img
              className="h-[38.54px] w-[47.25px]"
              src="public/images/Tick-Square.svg"
              alt=""
            />
          </div>
        </div>
        <div className="header-rigth flex w-full min-w-0 flex-1 items-center justify-end gap-4">
          <div className="relative flex w-[484px] max-w-full min-w-[290px] items-center max-lg:hidden">
            <img
              src="public/images/Search.svg"
              alt=""
              className="bg-purple absolute left-2 m-0 rounded-full p-2"
            />
            <input
              type="text"
              className="bg-gray h-[55px] w-full rounded-full p-4 text-end "
              placeholder="محصول مورد نظر رو جستجو کنید "
            />
          </div>
          <div className=" flex items-center justify-between max-lg:w-full">
            <div className=" flex items-center">
          <p className="text-orange text-xl font-bold">شاپت</p>
          <img src="public/images/pagelogo.svg" alt="" />
            </div>
        <div className="items-center">
          <img
            className=" lg:hidden"
            src="public/images/hamburger-2-svgrepo-com.svg"
            alt=""
            onClick={() => sethamber(!hamber)}
          />
          </div>
        </div>
          {hamber === true && (
            <>
              <div
                className="fixed inset-0 z-40 bg-black/40"
                onClick={() => sethamber(false)}
              />
              <div
                className={`fixed top-0 right-0 z-50 flex h-screen w-[280px] flex-col items-end justify-between gap-5 bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out ${hamber ? "tran slate-x-0" : "translate-x-full "}`}
              >
                <ul className="flex flex-col items-end gap-6">
                  <li className="hover:text-orange flex cursor-pointer list-none items-center">
                    <img
                      src="public/images/Arrow---Down-2.svg"
                      alt=""
                      className="px-1"
                    />
                    <span className="text-xl">خانه </span>
                  </li>
                  <li className="hover:text-orange flex cursor-pointer list-none items-center">
                    <img
                      src="public/images/Arrow---Down-2.svg"
                      alt=""
                      className="px-1"
                    />
                    <span className="text-xl"> فروشگاه</span>
                  </li>
                  <li className="hover:text-orange cursor-pointer list-none text-xl">
                    درباره ما
                  </li>
                  <li className="hover:text-orange cursor-pointer list-none text-xl">
                    تماس با ما
                  </li>
                  <li className="hover:text-orange cursor-pointer list-none text-xl">
                    وبلاگ
                  </li>
                </ul>
                <div className=" ">
                  <p className="font-xl flex gap-1 font-bold">
                    <span className="text-orange">09171234567</span> :شماره تماس
                    <img src="public/images/Calling.svg" alt="" />
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
export default header;
