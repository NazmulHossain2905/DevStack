import { use } from "react";
import type { ITechnology } from "../interfaces/ITechnology";
import Technology from "./Technology";

interface AllStacksProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const AllStacks = ({ technologiesPromise }: AllStacksProps) => {
  const technologies = use(technologiesPromise);

  return (
    <div className="grid w-full flex-9 grid-cols-1 md:grid-cols-2 md:gap-3.5 lg:grid-cols-3 lg:gap-5">
      {technologies.map((technology) => (
        <Technology key={technology.id} technology={technology} />
      ))}
    </div>
  );
};

export default AllStacks;
