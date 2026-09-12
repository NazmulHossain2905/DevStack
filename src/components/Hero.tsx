import BannerStackImage from "../assets/images/banner-stack.png";

const Hero = () => {
  return (
    <header className="container mx-auto mb-28 flex items-center gap-8 pt-24">
      <div className="flex-7">
        <h1 className="text-text-primary font-inter mb-6 text-6xl font-extrabold tracking-[-1.5px]">
          Build Your Ideal <br />
          <span className="from-gradient-text-from via-gradient-text-via to-gradient-text-to bg-linear-to-r bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-text-secondary mb-10 max-w-142.5 text-lg leading-7.25">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-3 pt-3">
          <button className="from-gradient-button-from to-gradient-button-to font-inter cursor-pointer rounded-lg bg-linear-to-r px-4 py-3 text-sm font-semibold text-white">
            Explore Technologies
          </button>
          <button className="border-border-secondary hover:text-primary min-w-42.5 cursor-pointer rounded-lg border bg-white px-4 py-3 text-sm text-[#374151] transition-colors">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-5 items-center justify-center">
        <img src={BannerStackImage} alt="Banner Stack Image" />
      </div>
    </header>
  );
};

export default Hero;
