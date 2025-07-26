import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['devanagari'],
  weight : ['500','600','800','700','900']
})  

// const inter = Inter({
//   subsets: ['latin'],
//   weight : ["400",'500','600',"700","800","900"]
// })
export const metadata: Metadata = {
  title: "Portfolio website Template",
  description: "This portfolio website is an starting stage of building myself on working on my own portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-neutral-100 dark:bg-neutral-900 text-primary`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
