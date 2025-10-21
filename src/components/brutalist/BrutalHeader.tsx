import Link from "next/link";

export const BrutalistHeader = () => {
  return (
    <header className="top-0 left-0 right-0 flex items-center justify-between border-b-2 border-brutalist-text px-8 py-4">
      {/* Left Side: Name/Logo */}
      <div>
        <Link
          href="/"
          className="relative translate-y-1 px-2 mt-10 font-display text-xl font-bold uppercase text-brutalist-accent md:text-2xl"
        >
          Matt Williams
        </Link>
      </div>

      {/* Right Side: Navigation */}
      <nav className="items-center gap-x-6 font-mono text-sm uppercase text-brutalist-text md:flex">
        <a
          href="#about"
          className="transition-colors hover:text-brutalist-accent hover:underline"
        >
          // About
        </a>
        <a
          href="#works"
          className="transition-colors hover:text-brutalist-accent hover:underline"
        >
          // Works
        </a>
        <a
          href="#contact"
          className="transition-colors hover:text-brutalist-accent hover:underline"
        >
          // Contact
        </a>
      </nav>
    </header>
  );
};
