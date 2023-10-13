import "@radix-ui/themes/styles.css";
import './theme-config.css';
import "./globals.css";
import NavBar from "./NavBar";
import { Inter } from 'next/font/google';
import NextTopLoader from "nextjs-toploader";
import { Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({ 
  subsets: ["latin"] ,
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: "Issue Tracker",
  description: "Issue Tracker scalable web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <NextTopLoader color="rgb(5 150 105)" height={3} speed={200} />
        <Theme accentColor="violet">
          <NavBar />
          <main className="p-4">{children}</main>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
