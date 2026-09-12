import { use, type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../interfaces/ITechnology";
import Technology from "./Technology";

interface AllStacksProps {
  technologiesPromise: Promise<ITechnology[]>;
  selectedStacks: ITechnology[];
  setSelectedStacks: Dispatch<SetStateAction<ITechnology[]>>;
}

const AllStacks = ({
  technologiesPromise,
  selectedStacks,
  setSelectedStacks,
}: AllStacksProps) => {
  const technologies = use(technologiesPromise);

  return (
    <div className="grid w-full flex-9 grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {technologies.map((technology) => (
        <Technology
          key={technology.id}
          technology={technology}
          selectedStacks={selectedStacks}
          setSelectedStacks={setSelectedStacks}
        />
      ))}
    </div>
  );
};

export default AllStacks;
