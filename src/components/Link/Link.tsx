const Link = ({
  href,
  children,
  className,
  label,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
}) => (
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
