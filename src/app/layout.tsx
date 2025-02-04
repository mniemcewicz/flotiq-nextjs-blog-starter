import type { Metadata } from "next";
import "./globals.css";

import Footer from "./_components/Footer/Footer";
import Navigation from "./_components/Navigation/Navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Flotiq Next.js starter for blog",
    default: "Flotiq Next.js starter for blog",
  },
  description: "Flotiq NextJs starter for blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <Navigation />
        <main className="mt-28 my-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
