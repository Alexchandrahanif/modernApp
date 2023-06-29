import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6  `}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="flex-1 flex justify-start flex-row ss:m-3 items-center"
      >
        <h4 className="font-poppins font-semibold ss:text-[40px] text-[15px] xs:leading-[53px] leading-[43px] text-white ">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal ss:text-[20px] text-[10px] xs:leading-[26px] leading-[21px] text-gradient uppercase ss:ml-3 ml-1 ">
          {stat.title}
        </p>
      </div>
    ))}
  </div>
);

export default Stats;
