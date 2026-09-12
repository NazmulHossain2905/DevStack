import { BiStar } from "react-icons/bi";
import ReactIcon from "../assets/icons/react.svg";

const Technology = () => {
  return (
    <div className="border-border-primary rounded-2xl border bg-white p-4 md:p-5">
      <div className="flex flex-col gap-1.5 pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center">
              <img src={ReactIcon} alt="React" className="size-7" />
            </div>
            <h3 className="text-text-primary pt-1.5 text-lg font-bold md:hidden">
              React
            </h3>
          </div>

          <p className="rounded-full border border-[#E0F2FE] bg-[#F0F9FF] px-2.5 py-0.5 text-xs font-semibold text-[#0EA5E9]">
            Popular
          </p>
        </div>

        <h3 className="text-text-primary hidden pt-1.5 text-lg font-bold md:block">
          React
        </h3>

        <p className="text-text-tertiary text-xs leading-[19.5px]">
          A declarative, component-based JavaScript library for building modern
          user interfaces.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-t border-t-[#F8FAFC] pt-2">
          <p className="text-text-secondary bg-border-primary rounded-sm px-2 py-0.5 text-xs font-medium">
            Frontend
          </p>
          <p className="text-text-tertiary text-xs font-medium">
            Beginner-Friendly
          </p>
          <div className="flex items-center gap-1.25 text-xs font-semibold text-[#334155]">
            <BiStar className="text-[#FBBF24]" /> 4.9
          </div>
        </div>

        <button className="bg-secondary cursor-pointer rounded-lg py-2.5 text-xs leading-4 font-medium text-white">
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default Technology;
