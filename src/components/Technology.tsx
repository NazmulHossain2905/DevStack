import type { ITechnology } from "../interfaces/ITechnology";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import getBadgeColor from "../utils/getBadgeColor";

interface TechnologyProps {
  technology: ITechnology;
  selectedStacks: ITechnology[];
  setSelectedStacks: Dispatch<SetStateAction<ITechnology[]>>;
}

const Technology = ({
  technology,
  selectedStacks,
  setSelectedStacks,
}: TechnologyProps) => {
  const isSelected = !!selectedStacks.find((s) => s.id === technology.id);

  const handleSelectTechnology = () => {
    if (isSelected) {
      toast.error(`${technology.name} is already selected in your stack`);
      return;
    }

    setSelectedStacks((prevStacks) => [...prevStacks, technology]);
    toast.success(`${technology.name} is added`);
  };

  return (
    <div
      className={`${isSelected ? "border-pink-300 shadow-md" : "border-border-primary shadow"} rounded-2xl border-2 bg-white p-4 transition-transform hover:-translate-y-0.5 hover:scale-[1.02] lg:p-5`}
    >
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
            // <p className="rounded-full border border-[#E0F2FE] bg-[#F0F9FF] px-2.5 py-0.5 text-xs font-semibold text-[#0EA5E9]">
            //   {technology.badge}
            // </p>
            <p
              className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getBadgeColor(technology.badge)}`}
            >
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
            <FaStar className="text-[#FBBF24]" /> {technology.rating}
          </div>
        </div>

        <button
          onClick={handleSelectTechnology}
          className="bg-secondary disabled:text-primary cursor-pointer rounded-lg py-2.5 text-xs leading-4 font-medium text-white disabled:cursor-not-allowed disabled:bg-pink-50 disabled:font-semibold"
          disabled={isSelected}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default Technology;
