import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Header from "./component/header";


const App = () => {
  return (
    <div>
      <div className="All mx-[100px]">
        <Header/>
        <div className="flex items-center justify-between ">
          <div className="">
            <p className="font-bold font-xl flex">
              <span className="text-orange">09171234567</span> :شماره تماس
              <img src="public/images/Calling.svg" alt="" />
            </p>
          </div>
          <div>
            <ul className="flex gap-6 ">
              <li className="list-none hover:text-orange cursor-pointer ">
                درباره ما
              </li>
              <li className="list-none hover:text-orange cursor-pointer ">
                تماس با ما
              </li>
              <li className="list-none hover:text-orange cursor-pointer ">
                وبلاگ
              </li>
              <li className="list-none hover:text-orange cursor-pointer flex items-center ">
                <img
                  src="public/images/Arrow---Down-2.svg"
                  alt=""
                  className="pt-2 px-1 "
                />
                <span> فروشگاه</span>
              </li>
              <li className="list-none hover:text-orange cursor-pointer flex items-center">
                <img
                  src="public/images/Arrow---Down-2.svg"
                  alt=""
                  className="pt-2 px-1"
                />
                <span>خانه </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" Hero relative rounded-xl bg-light-blu flex justify-between gap-[40px] px-[90px] py-[20px] my-[20px] h-[461px] overflow-hidden">
          <div className="  basis-1/2">
            <img
              src="public/images/dog.png"
              alt=""
              className="w-[449px] h-auto"
            />
          </div>
          <div className="flex basis-1/2 flex-col items-end justify-center gap-[20px] p-[10px]">
            <h2 className=" absolute text-3xl font-bold w-[120px] top-[60px] left-[492px] ">
              تخفیف تا
            </h2>
            <h2 className="text-3xl ">بهترین و جدید ترین</h2>
            <h2 className="text-3xl font-semibold ">لوازم سگ خانگی</h2>
            <p>
              لورم ایپسوم متن ساختگی باتولید سادگی نا مفهوم
              <tr>از صنقت چاپ,و بااستفاده از طراحان گرافیک است </tr>
            </p>
            <button className="flex items-center  gap-4 bg-purple rounded-full px-2 py-2">
              <img
                className=" pl-0"
                src="public/images/Arrow---Left-Circle.svg"
                alt=""
              />
              <h2 className=" pr-2 text-white font-bold text-2xl">خرید کنید</h2>
            </button>
            <img
              className=" absolute w-[102px] top-[113px] left-[495px]"
              src="public/images/label takhfif-10 (11) 1.svg"
              alt=""
            />
            <img
              className=" absolute w-[52px] h-[52px] top-[91px] left-[24px] z-10"
              src="public/images/radpa.png"
              alt=""
            />
            <img
              className=" absolute w-[57.65px] h-[52.64] top-[378.76px] left-[723.88px] z-10"
              src="public/images/radpa-blue-darker.png"
              alt=""
            />
            <img
              className=" absolute w-[125.13px]  top-[50px] right-[0px] h-[105.65px] "
              src="public/images/Vector-darkerblue.png"
              alt=""
            />
            <img
              className=" absolute w-[195px] h-[168px] top-[115px] left-[-50px] z-0"
              src="public/images/Vector-blue-large.svg"
              alt=""
            />
            <img
              className=" absolute w-[505.12px] h-[302px] bottom-[-100px] left-[421px] z-0"
              src="public/images/Vector-blue-larger.svg"
              alt=""
            />
          </div>
        </div>
        <div className="  grid grid-cols-3 items-center gap-[33px] my-8">
          <div className=" hover flex items-center justify-between bg-ligth-orange rounded-[19px] px-4 py-0">
            <div>
              <img src="public/images/Arrow - Left Circle.svg" alt="" />
            </div>
            <div className=" flex items-center gap-2">
              <p>غذاولوازم خانگی سگ</p>
              <img src="public/images/dog-sticker.svg" alt="" />
            </div>
          </div>
          <div className=" hover flex items-center justify-between bg-light-blu rounded-[19px] px-4 py-2 ">
            <div>
              <img src="public/images/Arrow - Left Circle -blue.svg" alt="" />
            </div>
            <div className=" flex items-center gap-2">
              <p>غذاولوازم گربه</p>
              <img src="public/images/cat-sticker.svg" alt="" />
            </div>
          </div>
          <div className=" hover  flex items-center justify-between bg-gray  rounded-[19px] px-4 py-2">
            <div>
              <img src="public/images/Arrow - Left-purple Circle.svg" alt="" />
            </div>
            <div className=" flex items-center gap-2">
              <p>غذا ماهی</p>
              <img src="public/images/fish-stiker.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-[17px]">
          <p className=" text-orange font-bold text-xl">مشاهده همه</p>
          <p className="font-bold text-2xl">جدید ترین محصولات</p>
        </div>
        <div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={4}
            slidesPerGroup={1}
            spaceBetween={20}
            speed={1000}
            loop={true}
          >
            <SwiperSlide>
              <div className=" flex flex-col items-center border-2 group border-dashed border-gray m-2 hover  hover:border-orange transition-colors duration-400">
                <img className=" bg-transparent" src="public/images/molti vitamin gorbeh.png" alt="" />
                <div className=" text-end my-1">
                  <p className="font-semibold text-xl">
                    nuloمولتی ویتامین گربه{" "}
                  </p>
                  <p className="font-semibold text-xl">( کیلوگرم4)</p>
                </div>
                <div className=" flex justify-between my-2 gap-14 ">
                  <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                    437/000
                  </p>
                  <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                    {" "}
                    :قیمت
                  </p>
                </div>
                <button className=" flex px-4 py-2 my-2 bg-blue items-center rounded-xl gap-2  group-hover:bg-orange transition-colors duration-300">
                  <p className="text-white">افزودن سبد خرید</p>
                  <img src="public/images/Combined-Shape.svg" alt="" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" flex flex-col items-center border-2 group border-dashed border-gray m-2  hover:border-orange transition-colors duration-400">
                <img src="public/images/molti vitamin gorbeh 1.svg" alt="" />
                <div className=" text-end my-1">
                  <p className="font-semibold text-xl">
                    nuloمولتی ویتامین گربه{" "}
                  </p>
                  <p className="font-semibold text-xl">( کیلوگرم4)</p>
                </div>
                <div className=" flex justify-between my-2 gap-14 ">
                  <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                    437/000
                  </p>
                  <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                    {" "}
                    :قیمت
                  </p>
                </div>
                <button className=" flex px-4 py-2 my-2 bg-blue items-center rounded-xl gap-2  group-hover:bg-orange transition-colors duration-300">
                  <p className="text-white">افزودن سبد خرید</p>
                  <img src="public/images/Combined-Shape.svg" alt="" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" flex flex-col items-center border-2 group border-dashed border-gray m-2  hover:border-orange transition-colors duration-400">
                <img src="public/images/molti vitamin gorbeh 1.svg" alt="" />
                <div className=" text-end my-1">
                  <p className="font-semibold text-xl">
                    nuloمولتی ویتامین گربه{" "}
                  </p>
                  <p className="font-semibold text-xl">( کیلوگرم4)</p>
                </div>
                <div className=" flex justify-between my-2 gap-14 ">
                  <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                    437/000
                  </p>
                  <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                    {" "}
                    :قیمت
                  </p>
                </div>
                <button className=" flex px-4 py-2 my-2 bg-blue items-center rounded-xl gap-2  group-hover:bg-orange transition-colors duration-300">
                  <p className="text-white">افزودن سبد خرید</p>
                  <img src="public/images/Combined-Shape.svg" alt="" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" flex flex-col items-center border-2 group border-dashed border-gray m-2  hover:border-orange transition-colors duration-400">
                <img src="public/images/molti vitamin gorbeh 1.svg" alt="" />
                <div className=" text-end my-1">
                  <p className="font-semibold text-xl">
                    nuloمولتی ویتامین گربه{" "}
                  </p>
                  <p className="font-semibold text-xl">( کیلوگرم4)</p>
                </div>
                <div className=" flex justify-between my-2 gap-14 ">
                  <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                    437/000
                  </p>
                  <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                    {" "}
                    :قیمت
                  </p>
                </div>
                <button className=" flex px-4 py-2 my-2 bg-blue items-center rounded-xl gap-2  group-hover:bg-orange transition-colors duration-300">
                  <p className="text-white">افزودن سبد خرید</p>
                  <img src="public/images/Combined-Shape.svg" alt="" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" flex flex-col items-center border-2 group border-dashed border-gray m-2 hover:border-orange transition-colors duration-400 ">
                <img src="public/images/molti vitamin gorbeh 1.svg" alt="" />
                <div className=" text-end my-1">
                  <p className="font-semibold text-xl">
                    nuloمولتی ویتامین گربه{" "}
                  </p>
                  <p className="font-semibold text-xl">( کیلوگرم4)</p>
                </div>
                <div className=" flex justify-between my-2 gap-14 ">
                  <p className="text-green font-semibold text-xl group-hover:text-orange transition-colors duration-300">
                    437/000
                  </p>
                  <p className="text-green font-semibold text-xl group-hover:text-orange transition-colors duration-300">
                    {" "}
                    :قیمت
                  </p>
                </div>
                <button className=" flex px-4 py-2 my-2 bg-blue items-center rounded-xl gap-2 group-hover:bg-orange transition-colors duration-300 ">
                  <p className="text-white">افزودن سبد خرید</p>
                  <img src="public/images/Combined-Shape.svg" alt="" />
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" relative flex items-center justify-end bg-blue-bg h-[132px] rounded-xl gap-4 px-10 my-10 relative">
          <button className=" flex items-center gap-4 py-1 px-2 rounded-full bg-white">
            <img
              className="px-0"
              src="public/images/Arrow - Left Circle.svg"
              alt=""
            />
            <p className=" text-orange font-bold text-2xl">محصولات ویژه</p>
          </button>
          <p className=" text-white text-3xl font-bold  ">
            دنیای عجیب حیوانات خانگی
          </p>
          <img
            className=" absolute bottom-0 left-60"
            src="public/images/Untitled-dog-mahsolatvizheh.svg"
            alt=""
          />
          <img
            className=" absolute bottom-0 left-30"
            src="public/images/Untitled-shoneh.svg"
            alt=""
          />
          <img
            className=" absolute bottom-5 left-10"
            src="public/images/Untitled-sabzeh.svg"
            alt=""
          />
          <img
            className=" absolute -top-13 left-30"
            src="public/images/Untitled -yelow-ball-21 2.svg"
            alt=""
          />
          <img
            className=" absolute -bottom-15 left-110"
            src="public/images/Untitled-dog-toy.svg"
            alt=""
          />
          {/* <img className=" w-[193px] h-[273px]" src="public/images/7315987f4f423009f2c3cd0a024cf2f3b3f3f9dc.png" alt="" /> */}
        </div>
        <div
          className=" grid grid-cols-4 gap-6 h-[415px] my-12
      "
        >
          <div className=" relative  bg-dark-purple rounded-3xl p-5 flex flex-col gap-2 overflow-hidden">
            <p className=" text-white text-xl font-semibold text-end mt-8">
              قرص وپودر های مولتی ویتامین
            </p>
            <button className=" flex items-center bg-ligth-purple gap-2 py-1 px-2 rounded-full ml-auto">
              <img
                className=" w-[20px]"
                src="public/images/Arrow---Left-Circle.svg"
                alt=""
              />
              <p className=" text-white">خرید کنید</p>
            </button>
            <img
              className=" absolute z-20 right-0 bottom-0 "
              src="public/images/gors-podr.svg"
              alt=""
            />
            <img
              className=" absolute w-302px z-0 bottom-0 right-0  "
              src="public/images/gors-podr-bg.svg"
              alt=""
            />
            <img
              className=" absolute  z-10 bottom-0 right-0"
              src="public/images/dashed.svg"
              alt=""
            />
          </div>

          <div className="orang relative  bg-orange rounded-3xl p-5 flex flex-col gap-2 overflow-hidden">
            <p className=" text-white text-xl font-semibold text-end mt-8">
              انواع کنسرو برای سگ
            </p>
            <button className=" flex items-center bg-dark-orange gap-2 py-1 px-2 rounded-full ml-auto">
              <img
                className=" w-[20px]"
                src="public/images/Arrow---Left-Circle.svg"
                alt=""
              />
              <p className=" text-white">خرید کنید</p>
            </button>
            <img
              className=" absolute z-20 right-12 bottom-6 "
              src="public/images/anva-konserv.svg"
              alt=""
            />
            <img
              className=" absolute w-302px z-0 bottom-0 right-0  "
              src="public/images/gors-podr-bg-orange.svg"
              alt=""
            />
            <img
              className=" absolute  z-10 bottom-0 right-0"
              src="public/images/dashed.svg"
              alt=""
            />
          </div>
          <div className=" green relative  bg-dark-green rounded-3xl p-5 flex flex-col gap-2 overflow-hidden ">
            <p className=" text-white text-xl font-semibold text-end mt-8">
              غذای سگ نژاد جونیور
            </p>
            <button className=" flex items-center bg-ligth-green gap-2 py-1 px-2 rounded-full ml-auto">
              <img
                className=" w-[20px]"
                src="public/images/Arrow---Left-Circle.svg"
                alt=""
              />
              <p className=" text-white">خرید کنید</p>
            </button>
            <img
              className=" absolute z-20 right-8 bottom-0 "
              src="public/images/gaza-sag-jonior.svg"
              alt=""
            />
            <img
              className=" absolute w-302px z-0 bottom-0 right-0  "
              src="public/images/gors-podr-bg-green.svg"
              alt=""
            />
            <img
              className=" absolute  z-10 bottom-0 right-0"
              src="public/images/dashed.svg"
              alt=""
            />
          </div>
          <div className=" pike relative  bg-pink rounded-3xl p-5 flex flex-col gap-2 overflow-hidden ">
            <p className=" text-white text-xl font-semibold text-end mt-8">
              فروش انواع غذا خشک
            </p>
            <button className=" flex items-center bg-dark-pink gap-2 py-1 px-2 rounded-full ml-auto">
              <img
                className=" w-[20px]"
                src="public/images/Arrow---Left-Circle.svg"
                alt=""
              />
              <p className=" text-white">خرید کنید</p>
            </button>
            <img
              className=" absolute z-20 right-0 bottom-0 "
              src="public/images/gaza-khoshk.svg"
              alt=""
            />
            <img
              className=" absolute w-302px z-0 bottom-0 right-0  "
              src="public/images/gors-podr-bg-pink.svg"
              alt=""
            />
            <img
              className=" absolute  z-10 bottom-0 right-0"
              src="public/images/dashed.svg"
              alt=""
            />
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-8 my-8 ">
          <div className=" grid grid-cols-3 col-span-2">
            <div className=" flex flex-col items-center border-2 group border-dashed border-gray m-2  hover:border-orange transition-colors duration-400">
              <div className=" w-full aspect-square p-8">
                <img
                  className="w-full h-full object-contain"
                  src="public/images/galade-ketfi.svg"
                  alt=""
                />
              </div>
              <div className=" text-end my-1">
                <p className="font-semibold text-xl">nuloمولتی ویتامین گربه </p>
                <p className="font-semibold text-xl">( کیلوگرم4)</p>
              </div>
              <div className=" flex justify-between my-2 gap-14 ">
                <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                  437/000
                </p>
                <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                  {" "}
                  :قیمت
                </p>
              </div>
              <button className=" flex px-4 py-2 my-2 bg-blue items-center rounded-xl gap-2  group-hover:bg-orange transition-colors duration-300">
                <p className="text-white">افزودن سبد خرید</p>
                <img src="public/images/Combined-Shape.svg" alt="" />
              </button>
            </div>
            <div className=" flex flex-col items-center border-2 group border-dashed border-gray m-2  hover:border-orange transition-colors duration-400">
              <div className=" w-full aspect-square p-8">
                <img
                  className="w-full h-full object-contain"
                  src="public/images/galade-ketfi.svg"
                  alt=""
                />
              </div>
              <div className=" text-end my-1">
                <p className="font-semibold text-xl">nuloمولتی ویتامین گربه </p>
                <p className="font-semibold text-xl">( کیلوگرم4)</p>
              </div>
              <div className=" flex justify-between my-2 gap-14 ">
                <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                  437/000
                </p>
                <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                  {" "}
                  :قیمت
                </p>
              </div>
              <button className=" flex px-4 py-2 my-2 bg-blue items-center rounded-xl gap-2  group-hover:bg-orange transition-colors duration-300">
                <p className="text-white">افزودن سبد خرید</p>
                <img src="public/images/Combined-Shape.svg" alt="" />
              </button>
            </div>
            <div className=" flex flex-col items-center border-2 group border-dashed border-gray m-2  hover:border-orange transition-colors duration-400">
              <div className=" w-full aspect-square p-8">
                <img
                  className="w-full h-full object-contain"
                  src="public/images/galade-ketfi.svg"
                  alt=""
                />
              </div>
              <div className=" text-end my-1">
                <p className="font-semibold text-xl">nuloمولتی ویتامین گربه </p>
                <p className="font-semibold text-xl">( کیلوگرم4)</p>
              </div>
              <div className=" flex justify-between my-2 gap-14 ">
                <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                  437/000
                </p>
                <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                  {" "}
                  :قیمت
                </p>
              </div>
              <button className=" flex px-4 py-2 my-2 bg-blue items-center rounded-xl gap-2  group-hover:bg-orange transition-colors duration-300">
                <p className="text-white">افزودن سبد خرید</p>
                <img src="public/images/Combined-Shape.svg" alt="" />
              </button>
            </div>
            <div className=" flex flex-col items-center border-2 group border-dashed border-gray m-2  hover:border-orange transition-colors duration-400">
              <div className=" w-full aspect-square p-8">
                <img
                  className="w-full h-full object-contain"
                  src="public/images/molti vitamin gorbeh 1.svg"
                  alt=""
                />
              </div>
              <div className=" text-end my-1">
                <p className="font-semibold text-xl">nuloمولتی ویتامین گربه </p>
                <p className="font-semibold text-xl">( کیلوگرم4)</p>
              </div>
              <div className=" flex justify-between my-2 gap-14 ">
                <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                  437/000
                </p>
                <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                  {" "}
                  :قیمت
                </p>
              </div>
              <button className=" flex px-4 py-2 my-2 bg-blue items-center rounded-xl gap-2  group-hover:bg-orange transition-colors duration-300">
                <p className="text-white">افزودن سبد خرید</p>
                <img src="public/images/Combined-Shape.svg" alt="" />
              </button>
            </div>
            <div className=" flex flex-col items-center border-2 group border-dashed border-gray m-2  hover:border-orange transition-colors duration-400">
              <div className=" w-full aspect-square p-8">
                <img
                  className="w-full h-full object-contain"
                  src="public/images/koleposhti-hobabdar.svg"
                  alt=""
                />
              </div>
              <div className=" text-end my-1">
                <p className="font-semibold text-xl">nuloمولتی ویتامین گربه </p>
                <p className="font-semibold text-xl">( کیلوگرم4)</p>
              </div>
              <div className=" flex justify-between my-2 gap-14 ">
                <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                  437/000
                </p>
                <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                  {" "}
                  :قیمت
                </p>
              </div>
              <button className=" flex px-4 py-2 my-2 bg-blue items-center rounded-xl gap-2  group-hover:bg-orange transition-colors duration-300">
                <p className="text-white">افزودن سبد خرید</p>
                <img src="public/images/Combined-Shape.svg" alt="" />
              </button>
            </div>
            <div className=" flex flex-col items-center border-2 group border-dashed border-gray m-2  hover:border-orange transition-colors duration-400">
              <div className=" w-full aspect-square p-8">
                <img
                  className="w-full h-full object-contain"
                  src="public/images/galade-ketfi.svg"
                  alt=""
                />
              </div>
              <div className=" text-end my-1">
                <p className="font-semibold text-xl">nuloمولتی ویتامین گربه </p>
                <p className="font-semibold text-xl">( کیلوگرم4)</p>
              </div>
              <div className=" flex justify-between my-2 gap-14 ">
                <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                  437/000
                </p>
                <p className="text-green font-semibold text-xl  group-hover:text-orange transition-colors duration-300">
                  {" "}
                  :قیمت
                </p>
              </div>
              <button className=" flex px-4 py-2 my-2 bg-blue items-center rounded-xl gap-2  group-hover:bg-orange transition-colors duration-300">
                <p className="text-white">افزودن سبد خرید</p>
                <img src="public/images/Combined-Shape.svg" alt="" />
              </button>
            </div>
          </div>
          <div className=" relative col-span-1   ">
            <img
              className=" absolute    rounded-2xl"
              src="public/images/Untitled design-lavasemnegahdarisag.svg"
              alt=""
            />
            <img
              className=" absolute -left-6 -top-3 -z-1  "
              src="public/images/Untitled design-22 1.svg"
              alt=""
            />
          </div>
        </div>
        <div className="  flex items-center justify-between py-8">
          <div className=" flex flex-col items-end py-2 gap-4  ">
            <img
              className=" w-[386px]  "
              src="public/images/fooder-sag1.svg"
              alt=""
            />
            <div className=" flex gap-3 px-2">
              <p className="  flex items-center gap-2">
                <span className=" font-bold">1400/02/24</span> تاریخ{" "}
                <img src="public/images/Calendar.svg" alt="" />
              </p>
              <p className=" flex items-center">
                <span className=" font-bold">آرمان</span> منتشر کننده{" "}
                <img src="public/images/Profile.svg" alt="" />
              </p>
            </div>
            <p className=" text-end font-bold">
              سه روش ساده برای اموزش فرمان نخور به سگ
              <br />
              که همه باید بدانند
            </p>
            <p className=" text-end">
              هر سگی باید یاد بگیره که از روی زمین چیری نخوره
              <br />
              چون این کار میتونه کلی دردسر ایجاد کنه ,از
            </p>
          </div>
          <div className=" flex flex-col items-end py-2 gap-4  ">
            <img
              className=" w-[386px]  "
              src="public/images/fooder-sag2.svg"
              alt=""
            />
            <div className=" flex gap-3 px-2">
              <p className="  flex items-center gap-2">
                <span className=" font-bold">1400/02/24</span> تاریخ{" "}
                <img src="public/images/Calendar.svg" alt="" />
              </p>
              <p className=" flex items-center">
                <span className=" font-bold">آرمان</span> منتشر کننده{" "}
                <img src="public/images/Profile.svg" alt="" />
              </p>
            </div>
            <p className=" text-end font-bold">
              سه روش ساده برای اموزش فرمان نخور به سگ
              <br />
              که همه باید بدانند
            </p>
            <p className=" text-end">
              هر سگی باید یاد بگیره که از روی زمین چیری نخوره
              <br />
              چون این کار میتونه کلی دردسر ایجاد کنه ,از
            </p>
          </div>
          <div className=" flex flex-col items-end py-2 gap-4  ">
            <img
              className=" w-[386px]  "
              src="public/images/fooder-sag-3.svg"
              alt=""
            />
            <div className=" flex gap-3 px-2">
              <p className="  flex items-center gap-2">
                <span className=" font-bold">1400/02/24</span> تاریخ{" "}
                <img src="public/images/Calendar.svg" alt="" />
              </p>
              <p className=" flex items-center">
                <span className=" font-bold">آرمان</span> منتشر کننده{" "}
                <img src="public/images/Profile.svg" alt="" />
              </p>
            </div>
            <p className=" text-end font-bold">
              سه روش ساده برای اموزش فرمان نخور به سگ
              <br />
              که همه باید بدانند
            </p>
            <p className=" text-end">
              هر سگی باید یاد بگیره که از روی زمین چیری نخوره
              <br />
              چون این کار میتونه کلی دردسر ایجاد کنه ,از
            </p>
          </div>
        </div>
      </div>
      <footer>
        <img className="mt-12 w-full " src="public/images/footer.svg" alt="" />
      </footer>
    </div>
  );
};

export default App;
