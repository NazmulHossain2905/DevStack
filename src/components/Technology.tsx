import { BiStar } from "react-icons/bi";
import type { ITechnology } from "../interfaces/ITechnology";

interface TechnologyProps {
  technology: ITechnology;
}

const Technology = ({ technology }: TechnologyProps) => {
  return (
    <div className="border-border-primary rounded-2xl border bg-white p-4 shadow-[0_2px_10px_-3px_#00000010] lg:p-5">
      <div className="flex flex-col gap-1.5 pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center">
              <img src={technology.icon} alt="React" className="size-7" />
            </div>
            <h3 className="text-text-primary pt-1.5 text-lg font-bold md:hidden">
              {technology.name}
            </h3>
          </div>

          {technology.badge && (
            <p className="rounded-full border border-[#E0F2FE] bg-[#F0F9FF] px-2.5 py-0.5 text-xs font-semibold text-[#0EA5E9]">
              {technology.badge}
            </p>
          )}
        </div>

        <h3 className="text-text-primary hidden pt-1.5 text-lg font-bold md:block">
          {technology.name}
        </h3>

        <p className="text-text-tertiary text-xs leading-[19.5px]">
          {technology.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-t border-t-[#F8FAFC] pt-2">
          <p className="text-text-secondary bg-border-primary rounded-sm px-2 py-0.5 text-xs font-medium">
            {technology.category}
          </p>
          <p className="text-text-tertiary text-xs font-medium">
            {technology.difficulty}
          </p>
          <div className="flex items-center gap-1.25 text-xs font-semibold text-[#334155]">
            <BiStar className="text-[#FBBF24]" /> {technology.rating}
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
