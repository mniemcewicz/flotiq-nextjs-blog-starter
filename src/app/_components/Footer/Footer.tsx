import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center gap-10 py-4 border-t">
      <Link
        className="font-bold text-3xl no-underline hover:text-black"
        href="/"
      >
        Tech & Threads
      </Link>

      <Link
        className="font-bold ml-auto no-underline"
        href="https://flotiq.com/?utm_source=poweredByFlotiq&utm_medium=poweredBy"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="inline align-middle mr-2"
          src={"/logo.svg"}
          alt="Flotiq"
          width={20}
          height={20}
        />
        Powered by Flotiq
      </Link>

      <span>Copyright &copy; Flotiq 2025</span>
    </footer>
  );
}
