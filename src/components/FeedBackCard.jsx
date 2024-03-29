import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title, img }) => (
  <div
    className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-5 sm:mr-5 mr-0 my-5 feedback-card
  "
  >
    {/* Gambar bektik 2 */}
    <img
      src={quotes}
      alt="double_quotes"
      className="w-full-[42px] h-[47px] object-contain "
    />
    {/* Paragraph komentar */}
    <p
      className={`font-poppins font-normal text-[18px] leading-[32px] text-white my-10`}
    >
      {content}
    </p>

    {/* foto dan nama serta jabatan */}

    <div className="flex flex-row items-center">
      <div className="">
        <img src={img} alt="foto" className="w-[48px] h-[48px] rounded-full " />
      </div>
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white ">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedBackCard;
