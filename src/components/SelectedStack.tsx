import { IoClose } from "react-icons/io5";
import ReactLogo from "../assets/icons/react.svg";

const SelectedStack = () => {
  return (
    <aside className="border-border-primary sticky top-22 w-full flex-3 gap-1 rounded-2xl border bg-white p-5">
      <h4 className="text-text-primary font-bold">Your Stack</h4>
      <p className="text-text-muted mb-3 text-xs leading-4">
        No technologies selected yet.
      </p>
      {false ? (
        <div className="rounded-xl border border-dashed border-[#E2E8F0] p-6">
          <p className="text-text-muted text-center text-xs">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          <div className="border-border-secondary flex h-12.5 items-center rounded-lg border px-2.5">
            <img src={ReactLogo} alt="React" className="size-7" />
            <div className="ml-2.5 flex-1">
              <h4 className="text-text-primary text-xs font-bold">React</h4>
              <p className="text-text-muted text-[10px] font-bold">Fronted</p>
            </div>

            <IoClose className="text-text-muted cursor-pointer text-2xl transition-colors hover:text-red-500" />
          </div>

          <div className="border-border-secondary flex h-12.5 items-center rounded-lg border px-2.5">
            <img src={ReactLogo} alt="React" className="size-7" />
            <div className="ml-2.5 flex-1">
              <h4 className="text-text-primary text-xs font-bold">React</h4>
              <p className="text-text-muted text-[10px] font-bold">Fronted</p>
            </div>

            <IoClose className="text-text-muted cursor-pointer text-2xl transition-colors hover:text-red-500" />
          </div>
        </div>
      )}
    </aside>
  );
};

export default SelectedStack;
