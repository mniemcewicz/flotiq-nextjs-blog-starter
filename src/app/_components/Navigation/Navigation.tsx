import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 py-4 bg-white w-full max-w-7xl border-b">
      <Link className="font-bold text-5xl" href="/">
        Home
      </Link>
    </nav>
  );
}
