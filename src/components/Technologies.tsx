import { Suspense, useState } from "react";
import type { ITechnology } from "../interfaces/ITechnology";
import SelectedStacks from "./SelectedStacks";
import AllStacks from "./AllStacks";

const getTechnologies = async (): Promise<ITechnology[]> => {
  const response = await fetch("/technologies.json");
  const data = await response.json();
  return data;
};

const technologiesPromise = getTechnologies();

const Technologies = () => {
  const [selectedStacks, setSelectedStacks] = useState<ITechnology[]>([]);

  return (
    <section id="technologies" className="container mx-auto mb-15 px-4">
      <div className="flex flex-col gap-1 text-center md:gap-2 md:text-left">
        <h2 className="font-inter text-2xl leading-10 font-bold tracking-[-0.9px] md:text-4xl md:font-extrabold">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-text-tertiary font-inter text-xs leading-4 md:font-sans md:text-base md:leading-10">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mt-5 flex flex-col items-start gap-8 md:mt-10 lg:flex-row">
        <Suspense
          fallback={
            <h2 className="text-text-muted w-full flex-7 py-4 text-center text-xl uppercase md:text-3xl lg:flex-9">
              Loading...
            </h2>
          }
        >
          <AllStacks
            technologiesPromise={technologiesPromise}
            selectedStacks={selectedStacks}
            setSelectedStacks={setSelectedStacks}
          />
        </Suspense>

        <SelectedStacks
          selectedStacks={selectedStacks}
          setSelectedStacks={setSelectedStacks}
        />
      </div>
    </section>
  );
};

export default Technologies;
