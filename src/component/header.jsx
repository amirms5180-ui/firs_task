function header(){
    return(
<header className="header flex my-8   w-full items-center justify-between   ">
          <div className="header_rigth flex justify-between gap-[40px] ">
            <div className="header_icons flex items-center gap-[29px]">
              <img
                className="w-[26.399999618530273] h-[33.12px]"
                src="public/images/Group 8768.svg"
                alt=""
              />
              <img
                className="w-[33.33320236206055] h-[32.568145751953125]"
                src="public/images/Heart.svg"
                alt=""
              />
              <img
                className="w-[45.6px] h-[39.28px]"
                src="public/images/Buy.svg"
                alt=""
              />
            </div>
            <div className="flex gap-2 items-center ">
              <div className="text-center ">
                <p className="font-bold ">ارسال رایگان</p>
                <p className="opacity-26 "> تمامی خرید ها</p>
              </div>
              <img className=" w-[37.5PX] h-[37.5PX]" src="public/images/ersalrayegan.svg" alt="" />
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-center">
                <p className=""> ضمانت اصالت کالا</p>
                <p className="opacity-26"> تضمین اصالت 100 </p>
              </div>
              <img className=" w-[47.25px] h-[38.54px]" src="public/images/Tick-Square.svg" alt="" />
            </div>

            <div></div>
          </div>
          <div className=" header-rigth flex flex-1 min-w-0 items-center gap-4 justify-end">
            <div className="relative max-w-full w-[484px] min-w-[290px] flex items-center">
              <img
                src="public/images/Search.svg"
                alt=""
                className=" absolute bg-purple rounded-full p-2 m-0 left-2 "
              />
              <input
                type="text"
                className="bg-gray w-full h-[55px] rounded-full  text-end p-4"
                placeholder="محصول مورد نظر رو جستجو کنید "
              />
            </div>
            <p className="font-bold text-orange text-xl  ">شاپت</p>
            <img src="public/images/pagelogo.svg" alt="" />
          </div>
        </header>
)}
export default header;