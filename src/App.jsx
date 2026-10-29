import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Header from "./component/header";

import Hero from "./component/hero";
import Item from "./component/shop-item";
import { items } from "./component/shop-items";
import Nav from "./component/navbar";
const App = () => {
  return (
    <div>
      <div className="All mx-[100px] max-lg:mx-[20px]">
        <Header />
        <Hero />
        <Nav />
        <div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPreView: 3,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            slidesPerGroup={1}
            speed={1000}
            loop={true}
          >
            {items.map((item, index) => (
              <SwiperSlide key={item.id}>
                <Item
                  key={index}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="bg-blue-bg relative my-10 flex max-sm:flex-col-reverse max-sm:py-2 h-[132px] items-center justify-end gap-4 rounded-xl px-10 max-xl:justify-between">
          <button className="flex items-center gap-4 rounded-full bg-white px-2 py-1">
            <img
              className="px-0"
              src="public/images/Arrow - Left Circle.svg"
              alt=""
            />
            <p className="text-orange text-2xl font-bold">محصولات ویژه</p>
          </button>
          <p className="text-3xl font-bold text-white">
            دنیای عجیب حیوانات خانگی
          </p>
          <img
            className="absolute bottom-0 left-60 max-xl:hidden"
            src="public/images/Untitled-dog-mahsolatvizheh.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 left-30 max-xl:hidden"
            src="public/images/Untitled-shoneh.svg"
            alt=""
          />
          <img
            className="absolute bottom-5 left-10 max-xl:hidden"
            src="public/images/Untitled-sabzeh.svg"
            alt=""
          />
          <img
            className="absolute -top-13 left-30 max-xl:hidden"
            src="public/images/Untitled -yelow-ball-21 2.svg"
            alt=""
          />
          <img
            className="absolute -bottom-15 left-110 max-2xl:hidden"
            src="public/images/Untitled-dog-toy.svg"
            alt=""
          />
          {/* <img className=" w-[193px] h-[273px]" src="public/images/7315987f4f423009f2c3cd0a024cf2f3b3f3f9dc.png" alt="" /> */}
        </div>
        <div className="my-12 grid grid-cols-4 gap-6 max-xl:grid-cols-2">
          <div className="bg-dark-purple relative flex h-[415px] flex-col gap-2 overflow-hidden rounded-3xl p-5">
            <p className="mt-8 text-end text-xl font-semibold text-white">
              قرص وپودر های مولتی ویتامین
            </p>
            <button className="bg-ligth-purple ml-auto flex items-center gap-2 rounded-full px-2 py-1">
              <img
                className="w-[20px]"
                src="public/images/Arrow---Left-Circle.svg"
                alt=""
              />
              <p className="text-white">خرید کنید</p>
            </button>
            <img
              className="absolute right-4 bottom-0 z-20"
              src="public/images/gors-podr.svg"
              alt=""
            />
            <img
              className="w-302px absolute right-0 bottom-0 z-0"
              src="public/images/gors-podr-bg.svg"
              alt=""
            />
            <img
              className="absolute right-0 bottom-0 z-10"
              src="public/images/dashed.svg"
              alt=""
            />
          </div>

          <div className="orang bg-orange relative flex flex-col gap-2 overflow-hidden rounded-3xl p-5">
            <p className="mt-8 text-end text-xl font-semibold text-white">
              انواع کنسرو برای سگ
            </p>
            <button className="bg-dark-orange ml-auto flex items-center gap-2 rounded-full px-2 py-1">
              <img
                className="w-[20px]"
                src="public/images/Arrow---Left-Circle.svg"
                alt=""
              />
              <p className="text-white">خرید کنید</p>
            </button>
            <img
              className="absolute right-12 bottom-6 z-20"
              src="public/images/anva-konserv.svg"
              alt=""
            />
            <img
              className="w-302px absolute right-0 bottom-0 z-0"
              src="public/images/gors-podr-bg-orange.svg"
              alt=""
            />
            <img
              className="absolute right-0 bottom-0 z-10"
              src="public/images/dashed.svg"
              alt=""
            />
          </div>
          <div className="green bg-dark-green relative flex h-[415px] flex-col gap-2 overflow-hidden rounded-3xl p-5">
            <p className="mt-8 text-end text-xl font-semibold text-white">
              غذای سگ نژاد جونیور
            </p>
            <button className="bg-ligth-green ml-auto flex items-center gap-2 rounded-full px-2 py-1">
              <img
                className="w-[20px]"
                src="public/images/Arrow---Left-Circle.svg"
                alt=""
              />
              <p className="text-white">خرید کنید</p>
            </button>
            <img
              className="absolute right-8 bottom-0 z-20"
              src="public/images/gaza-sag-jonior.svg"
              alt=""
            />
            <img
              className="w-302px absolute right-0 bottom-0 z-0"
              src="public/images/gors-podr-bg-green.svg"
              alt=""
            />
            <img
              className="absolute right-0 bottom-0 z-10"
              src="public/images/dashed.svg"
              alt=""
            />
          </div>
          <div className="pike bg-pink relative flex flex-col gap-2 overflow-hidden rounded-3xl p-5">
            <p className="mt-8 text-end text-xl font-semibold text-white">
              فروش انواع غذا خشک
            </p>
            <button className="bg-dark-pink ml-auto flex items-center gap-2 rounded-full px-2 py-1">
              <img
                className="w-[20px]"
                src="public/images/Arrow---Left-Circle.svg"
                alt=""
              />
              <p className="text-white">خرید کنید</p>
            </button>
            <img
              className="absolute right-0 bottom-0 z-20"
              src="public/images/gaza-khoshk.svg"
              alt=""
            />
            <img
              className="w-302px absolute right-0 bottom-0 z-0"
              src="public/images/gors-podr-bg-pink.svg"
              alt=""
            />
            <img
              className="absolute right-0 bottom-0 z-10"
              src="public/images/dashed.svg"
              alt=""
            />
          </div>
        </div>

        <div className="my-8 grid grid-cols-3 gap-8 max-xl:grid-cols-1 ">
          <div className="col-span-2 grid grid-cols-3 max-xl:gap-0  max-sm:grid-cols-2  ">
            {items.map((item, index) => (
              
                <Item
                  key={index}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
            ))}
          </div>
          <div className="relative col-span-1 max-xl:hidden">
            <img
              className="absolute rounded-2xl "
              src="public/images/Untitled design-lavasemnegahdarisag.svg"
              alt=""
            />
            <img
              className="absolute -top-3 -left-6 -z-1 max-xl:hidden"
              src="public/images/Untitled design-22 1.svg"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 py-8 max-md:flex-col">
          <div className="flex flex-col items-end gap-4 py-2">
            <img
              className="w-[386px]"
              src="public/images/fooder-sag1.svg"
              alt=""
            />
            <div className="flex gap-3 px-2 max-xl:flex-col max-xl:px-0">
              <p className="flex items-center gap-2 max-xl:gap-0 ">
                <span className="font-bold">1400/02/24</span> تاریخ{" "}
                <img src="public/images/Calendar.svg" alt="" />
              </p>
              <p className="flex items-center">
                <span className="font-bold">آرمان</span> منتشر کننده{" "}
                <img src="public/images/Profile.svg" alt="" />
              </p>
            </div>
            <p className="text-end font-bold">
              سه روش ساده برای اموزش فرمان نخور به سگ
              <br />
              که همه باید بدانند
            </p>
            <p className="text-end">
              هر سگی باید یاد بگیره که از روی زمین چیری نخوره
              <br />
              چون این کار میتونه کلی دردسر ایجاد کنه ,از
            </p>
          </div>
          <div className="flex flex-col items-end gap-4 py-2">
            <img
              className="w-[386px]"
              src="public/images/fooder-sag2.svg"
              alt=""
            />
            <div className="flex gap-3 px-2 text-end max-xl:flex-col max-xl:px-0">
              <p className="flex items-center gap-2 max-xl:gap-0 ">
                <span className="font-bold">1400/02/24</span> تاریخ{" "}
                <img src="public/images/Calendar.svg" alt="" />
              </p>
              <p className="flex items-center text-end">
                <span className="text-end font-bold">آرمان</span> منتشر کننده{" "}
                <img src="public/images/Profile.svg" alt="" />
              </p>
            </div>
            <p className="text-end font-bold">
              سه روش ساده برای اموزش فرمان نخور به سگ
              <br />
              که همه باید بدانند
            </p>
            <p className="text-end">
              هر سگی باید یاد بگیره که از روی زمین چیری نخوره
              <br />
              چون این کار میتونه کلی دردسر ایجاد کنه ,از
            </p>
          </div>
          <div className="flex flex-col items-end gap-4 py-2">
            <img
              className="w-[386px]"
              src="public/images/fooder-sag-3.svg"
              alt=""
            />
            <div className="flex gap-3 px-2 max-xl:flex-col max-xl:px-0">
              <p className="flex items-center gap-2 max-xl:gap-0">
                <span className="font-bold">1400/02/24</span> تاریخ{" "}
                <img src="public/images/Calendar.svg" alt="" />
              </p>
              <p className="flex items-center">
                <span className="font-bold">آرمان</span> منتشر کننده{" "}
                <img src="public/images/Profile.svg" alt="" />
              </p>
            </div>
            <p className="text-end font-bold">
              سه روش ساده برای اموزش فرمان نخور به سگ
              <br />
              که همه باید بدانند
            </p>
            <p className="text-end">
              هر سگی باید یاد بگیره که از روی زمین چیری نخوره
              <br />
              چون این کار میتونه کلی دردسر ایجاد کنه ,از
            </p>
          </div>
        </div>
      </div>
      <footer>
        <img className="mt-12 w-full" src="public/images/footer.svg" alt="" />
      </footer>
    </div>
  );
};

export default App;
