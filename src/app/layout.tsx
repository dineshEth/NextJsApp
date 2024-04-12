import type { Metadata } from "next";
import { Inter, Macondo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"],
  weight:'600'
});
const maconda = Macondo({
  subsets: ['latin'],
  weight:'400'
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${maconda.className} dark:bg-black `}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
