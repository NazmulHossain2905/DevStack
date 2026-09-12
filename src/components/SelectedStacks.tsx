import { IoClose } from "react-icons/io5";
import type { ITechnology } from "../interfaces/ITechnology";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface SelectedStacksProps {
  selectedStacks: ITechnology[];
  setSelectedStacks: Dispatch<SetStateAction<ITechnology[]>>;
}

const SelectedStacks = ({
  selectedStacks,
  setSelectedStacks,
}: SelectedStacksProps) => {
  const handleRemoveAll = () => {
    setSelectedStacks([]);

    toast.info("Removed all stacks");
  };

  const handleRemoveStack = (stack: ITechnology) => {
    setSelectedStacks((prevStacks) =>
      prevStacks.filter((s) => s.id !== stack.id),
    );

    toast.info(`${stack.name} is removed`);
  };

  return (
    <aside className="border-border-primary sticky top-22 w-full flex-3 gap-1 rounded-2xl border bg-white p-5 shadow">
      <h4 className="text-text-primary font-bold">Your Stack</h4>
      <p className="text-text-muted mb-3 text-xs leading-4">
        {selectedStacks.length
          ? `${selectedStacks.length} Technology Selected`
          : "No technologies selected yet."}
      </p>
      {!selectedStacks.length ? (
        <div className="rounded-xl border border-dashed border-[#E2E8F0] p-6">
          <p className="text-text-muted text-center text-xs">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          {selectedStacks.map((stack) => (
            <div
              key={stack.id}
              className="border-border-secondary flex h-12.5 items-center rounded-lg border px-2.5 hover:bg-pink-50"
            >
              <img src={stack.icon} alt={stack.name} className="size-7" />
              <div className="ml-2.5 flex-1">
                <h4 className="text-text-primary text-xs font-bold">
                  {stack.name}
                </h4>
                <p className="text-text-muted text-[10px] font-bold">
                  {stack.category}
                </p>
              </div>

              <IoClose
                onClick={() => handleRemoveStack(stack)}
                className="text-text-muted cursor-pointer text-2xl transition-colors hover:text-red-500"
              />
            </div>
          ))}
        </div>
      )}

      {selectedStacks.length ? (
        <button
          onClick={handleRemoveAll}
          className="font-inter mt-12 h-7.5 w-full cursor-pointer rounded-lg border-[0.5px] border-[#ED8C85] text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
        >
          Remove All
        </button>
      ) : null}
    </aside>
  );
};

export default SelectedStacks;
