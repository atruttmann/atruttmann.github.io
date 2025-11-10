interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
}

const Link = ({ href, children, className, label }: LinkProps) => {
  const isMailto = href.startsWith("mailto:");
  return (
    <a
      href={href}
      className={className}
      aria-label={label}
      title={label}
      // Only open non-mailto links in a new tab
      {...(!isMailto ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
};

export default Link;
