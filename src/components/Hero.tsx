import BannerStackImage from "../assets/images/banner-stack.png";
import BannerStackMobileImage from "../assets/images/banner-stack-mogile.png";

const Hero = () => {
  return (
    <header
      id="home"
      className="container mx-auto mb-3 flex flex-col items-center gap-8 px-5 pt-8 md:mb-28 md:flex-row md:pt-24"
    >
      <div className="flex-7 text-center md:text-left">
        <h1 className="text-text-primary font-inter mb-2.5 text-3xl font-bold tracking-[-1.5px] md:mb-6 md:text-6xl md:font-extrabold">
          Build Your Ideal <br />
          <span className="from-gradient-text-from via-gradient-text-via to-gradient-text-to bg-linear-to-r bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-text-secondary font-inter mb-3 max-w-142.5 text-sm leading-5.5 md:mb-10 md:font-sans md:text-lg md:leading-7.25">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex justify-center gap-3 pt-3 md:justify-start">
          <button className="from-gradient-button-from to-gradient-button-to font-inter cursor-pointer rounded-lg bg-linear-to-r px-4 py-3 text-xs text-white md:text-sm md:font-semibold">
            Explore Technologies
          </button>
          <button className="border-border-secondary hover:text-primary min-w-42.5 cursor-pointer rounded-lg border bg-white px-4 py-3 text-xs text-[#374151] transition-colors md:text-sm">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-5 items-center justify-center">
        <img
          src={BannerStackImage}
          alt="Banner Stack Image"
          className="hidden md:block"
        />
        <img
          src={BannerStackMobileImage}
          alt="Banner Stack Image"
          className="md:hidden"
        />
      </div>
    </header>
  );
};

export default Hero;
