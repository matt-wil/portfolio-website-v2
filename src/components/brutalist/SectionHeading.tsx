interface SectionHeadingProps {
  number: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading = ({
  number,
  children,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div
      className={`flex md:flex-row flex-col items-baseline gap-x-4 ${className}`}
    >
      <span
        className="font-mono text-sm text-brutalist-accent"
        aria-hidden="true"
      >
        // {number.padStart(2, "0")} /
      </span>
      <h2 className="text-brutalist-h2 font-bold uppercase text-brutalist-text">
        {children}
      </h2>
    </div>
  );
};
