interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
}

const Link = ({ href, children, className, label }: LinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    aria-label={label}
    title={label}
  >
    {children}
  </a>
);

export default Link;
