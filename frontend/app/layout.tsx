import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "UFC Fighter",
  description: "UFC Fighter application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation></Navigation>
        <main className="p-2 w-full xl:w-7xl mx-auto my-4">{children}</main>
      </body>
    </html>
  );
}
