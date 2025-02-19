import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="sticky top-0 bg-white w-full z-10 py-9 border-b text-center md:text-left">
      <Link
        className="font-bold text-4xl no-underline hover:text-black"
        href="/"
      >
        Tech & Threads
      </Link>
    </nav>
  );
}
