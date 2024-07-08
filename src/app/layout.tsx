import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/MenuBar/MenuBar";
import { Providers } from "@/store/Providers";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doctor Appointment",
  description:
    "This is a doctor appointment that will be delivered to the patient service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MenuBar />
          {children}
          <Subscribe />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
