interface FooterLinksProps {
  title: string;
  links: { href: string; label: string }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="hidden space-y-4 md:block">
      <h4 className="text-text-primary text-xs font-bold uppercase">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-text-tertiary hover:text-text-primary text-xs transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
