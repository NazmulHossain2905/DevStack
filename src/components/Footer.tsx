import LogoImage from "../assets/images/logo-text.png";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="border-t-border-primary mb-12 border-t pt-8 md:pt-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-5 flex flex-col gap-3 text-center md:col-span-2 md:text-left">
            <img
              src={LogoImage}
              alt="Logo"
              className="mx-auto h-8 w-fit md:mx-0 md:h-7"
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

          <FooterLinks
            title="Product"
            links={[
              { href: "#home", label: "Home" },
              { href: "#technologies", label: "Technologies" },
              { href: "#projects", label: "Projects" },
            ]}
          />
          <FooterLinks
            title="Company"
            links={[
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
              { href: "#careers", label: "Careers" },
            ]}
          />
          <FooterLinks
            title="Legal"
            links={[
              { href: "#privacy-policy", label: "Privacy Policy" },
              { href: "#term-fo-service", label: "Terms of Service" },
            ]}
          />
        </div>

        <div className="border-t-border-primary mt-4 flex items-center justify-between border-t pt-4 md:mt-14 md:pt-8">
          <p className="text-text-muted text-xs">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-text-muted hover:text-text-primary text-xs transition-colors"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-text-muted hover:text-text-primary text-xs transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
