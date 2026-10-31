import { Link } from "react-router-dom"
function hero() {
    return(

      <>
        <div className="flex items-center justify-between max-lg:hidden">
          <div className=" ">
            <p className="font-xl flex gap-1 font-bold">
              <span className="text-orange">09171234567</span> :شماره تماس
              <img src="public/images/Calling.svg" alt="" />
            </p>
          </div>
          <div>
            <ul className="flex gap-6 max-lg:gap-2.5">
              <li className="hover:text-orange cursor-pointer list-none">
                 <Link to="/about">درباره ما</Link>
              </li>
              <li className="hover:text-orange cursor-pointer list-none">
                <Link to="/contact">تماس با ما</Link>
              </li>
              <li className="hover:text-orange cursor-pointer list-none">
                <Link to="/blog">وبلاگ</Link>
              </li>
              <li className="hover:text-orange flex cursor-pointer list-none items-center">
                <img
                  src="public/images/Arrow---Down-2.svg"
                  alt=""
                  className="px-1"
                  />
                <Link to="/shop">فروشگاه</Link>
              </li>
              <li className="hover:text-orange flex cursor-pointer list-none items-center">
                <img
                  src="public/images/Arrow---Down-2.svg"
                  alt=""
                  className="px-1"
                />
                <Link to="/">خانه</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="Hero bg-light-blu relative my-[20px] flex h-[461px] justify-between gap-[40px] overflow-hidden rounded-xl px-[90px] py-[20px] max-xl:h-auto max-xl:flex-col max-xl:gap-[0px]">
          <div className="basis-1/2">
            <img
              src="public/images/dog.png"
              alt=""
              className="h-auto w-[449px] max-sm:hidden"
            />
          </div>
          <div className="flex basis-1/2 flex-col items-end justify-center gap-[20px] p-[10px]">
            <h2 className="absolute top-[60px] left-[492px] w-[120px] text-3xl font-bold max-xl:hidden">
              تخفیف تا
            </h2>
            <h2 className="text-end text-3xl">بهترین و جدید ترین</h2>
            <h2 className="text-3xl font-semibold">لوازم سگ خانگی</h2>
            <p className="text-end">
              لورم ایپسوم متن ساختگی باتولید سادگی نا مفهوم
              <tr>از صنقت چاپ,و بااستفاده از طراحان گرافیک است</tr>
            </p>
            <button className="bg-purple flex items-center gap-4 rounded-full px-2 py-2">
              <img
                className="pl-0"
                src="public/images/Arrow---Left-Circle.svg"
                alt=""
                />
              <h2 className="pr-2 text-2xl font-bold text-white">خرید کنید</h2>
            </button>
            <img
              className="absolute top-[113px] left-[495px] w-[102px] max-xl:hidden"
              src="public/images/label takhfif-10 (11) 1.svg"
              alt=""
              />
            <img
              className="absolute top-[91px] left-[24px] z-10 h-[52px] w-[52px]"
              src="public/images/radpa.png"
              alt=""
            />
            <img
              className="absolute top-[378.76px] left-[723.88px] z-10 h-[52.64] w-[57.65px] max-xl:hidden"
              src="public/images/radpa-blue-darker.png"
              alt=""
            />
            <img
              className="absolute top-[50px] right-[0px] h-[105.65px] w-[125.13px] max-xl:hidden"
              src="public/images/Vector-darkerblue.png"
              alt=""
              />
            <img
              className="absolute top-[115px] left-[-50px] z-0 h-[168px] w-[195px]"
              src="public/images/Vector-blue-large.svg"
              alt=""
              />
            <img
              className="absolute bottom-[-100px] left-[421px] z-0 h-[302px] w-[505.12px] max-xl:hidden"
              src="public/images/Vector-blue-larger.svg"
              alt=""
            />
          </div>
        </div>
              </>
    )
}
export default hero