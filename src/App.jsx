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
import PromoCard from "./component/promo-card";
import { promoCards } from "./component/promo-cards";
import BlogCard from "./component/blog-cart";
import { posts } from "./component/post";
import Mahsol from "./component/mahsolat-vizheh";
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
                slidesPerView: 3,
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

        <Mahsol />

        <div className="my-12 grid grid-cols-4 gap-6 max-xl:grid-cols-2">
          {promoCards.map((c) => (
            <PromoCard key={c.id} {...c} />
          ))}
        </div>

        <div className="my-8 grid grid-cols-3 gap-8 max-xl:grid-cols-1">
          <div className="col-span-2 grid grid-cols-3 max-xl:gap-0 max-sm:grid-cols-2">
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
              className="absolute rounded-2xl"
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

        <div className="flex items-center justify-between gap-3 py-8 max-md:flex-col max-md:justify-center ">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
      <footer>
        <img className="mt-12 w-full" src="public/images/footer.svg" alt="" />
      </footer>
    </div>
  );
};

export default App;
