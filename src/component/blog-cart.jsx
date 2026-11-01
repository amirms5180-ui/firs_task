
const BlogCard = ({ image, date, author, title, excerpt }) => (
  <div className="flex flex-col items-end gap-4 py-2 ">
    <img className="w-[386px] max-sm:w-full" src={image} alt="" />
    <div className="flex gap-3 px-2 max-xl:flex-col max-xl:px-0">
      <p className="flex items-center gap-2 max-xl:gap-0">
        <span className="font-bold">{date}</span> تاریخ
        <img src="/images/Calendar.svg" alt="" />
      </p>
      <p className="flex items-center">
        <span className="font-bold">{author}</span> منتشر کننده
        <img src="/images/Profile.svg" alt="" />
      </p>
    </div>
    <p className="text-end font-bold">{title}</p>
    <p className="text-end">{excerpt}</p>
  </div>
);

export default BlogCard;