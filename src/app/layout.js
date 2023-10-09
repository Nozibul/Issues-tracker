import NavBar from "./NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Issue Tracker",
  description: "Issue Tracker scalable web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="rgb(5 150 105)" height={3} speed={200} />
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
