import LogoImage from "../assets/images/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t-border-primary mb-12 border-t pt-8 md:pt-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-5 flex flex-col gap-3 text-center md:col-span-2 md:text-left">
            <img
              src={LogoImage}
              alt="Logo"
              className="mx-auto h-8 w-fit md:mx-0 md:h-6"
            />

            <p className="text-text-tertiary mx-auto max-w-[384px] text-xs leading-[19.5px] md:mx-0">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <ul className="flex justify-center gap-4 pt-3 md:justify-start">
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-text-primary text-xs font-semibold transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-text-primary text-xs font-semibold transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-text-primary text-xs font-semibold transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden space-y-4 md:block">
            <h4 className="text-text-primary text-xs font-bold">PRODUCT</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#home"
                  className="text-text-tertiary hover:text-text-primary text-xs transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-text-tertiary hover:text-text-primary text-xs transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-tertiary hover:text-text-primary text-xs transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden space-y-4 md:block">
            <h4 className="text-text-primary text-xs font-bold">COMPANY</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-text-tertiary hover:text-text-primary text-xs transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-tertiary hover:text-text-primary text-xs transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-tertiary hover:text-text-primary text-xs transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden space-y-4 md:block">
            <h4 className="text-text-primary text-xs font-bold">LEGAL</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-text-tertiary hover:text-text-primary text-xs transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-tertiary hover:text-text-primary text-xs transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-border-primary mt-4 flex items-center justify-between border-t pt-4 md:mt-14 md:pt-8">
          <p className="text-text-muted text-xs">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#"
                className="text-text-muted hover:text-text-primary text-xs transition-colors"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-text-muted hover:text-text-primary text-xs transition-colors"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
