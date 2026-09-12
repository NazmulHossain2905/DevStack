import SelectedStack from "./SelectedStack";
import Technology from "./Technology";

const Technologies = () => {
  return (
    <section className="container mx-auto mb-15 px-4 md:px-0">
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

      <div className="mt-5 flex flex-col items-start gap-8 md:mt-10 md:flex-row">
        <div className="grid flex-9 gap-3.5 md:grid-cols-3 md:gap-5">
          <Technology />
          <Technology />
          <Technology />
          <Technology />
          <Technology />
          <Technology />
          <Technology />
          <Technology />
          <Technology />
          <Technology />
          <Technology />
          <Technology />
          <Technology />
        </div>

        <SelectedStack />
      </div>
    </section>
  );
};

export default Technologies;
