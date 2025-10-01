import rise1 from "../../../assets/icons/rise1.svg";
import person from "../../../assets/images/person.png";
export const HeroContent = () => {
  return (
    <div className="top-0 m-auto flex flex-col items-center gap-[10px]">
      <div className="relative inline-block">
        <img
          src={rise1}
          alt="rise1"
          className="absolute -top-[19px] -right-[23.51px] w-[27.5px] h-[28.5px]"
        />
        <div className="border-2 py-[9.5px] px-[25.49px] rounded-[38.24px] w-[103.98px] h-[45px] flex items-center justify-center">
          <span className="font-bold text-[20px]">Hello!</span>
        </div>
      </div>

      <div className="flex flex-col items-center text-[95.57px] font-medium leading-none">
        <span>
          I'm <span className="text-[#5EEAD4]">Truong</span>,
        </span>
        <span>Front-end Developer</span>
      </div>

      <div className="absolute rounded-t-full bg-[#5EEAD4] w-[811.78px] h-[405.89px] bottom-0"></div>
      <img src={person} alt="Person" className="absolute bottom-0"/>
    </div>
  );
};
