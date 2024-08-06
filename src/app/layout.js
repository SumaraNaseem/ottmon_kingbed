import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Image from "next/image";
import search from "../assets/search.svg";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Ottomon Beds',
  description: "Ottoman bed, divan beds, custom bed, mattress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
        <Providers>
        <Navbar />{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
