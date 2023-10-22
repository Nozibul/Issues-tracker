import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import NavBar from "./NavBar";
import AuthProvider from "./auth/AuthProvider";
import "./globals.css";
import "./theme-config.css";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Issue Tracker",
  description: "Issue Tracker scalable web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AuthProvider>
          <NextTopLoader color="rgb(5 150 105)" height={3} speed={200} />
          <Theme accentColor="violet">
            <NavBar />
            <main className="p-4">
              <Container>{children}</Container>
            </main>
            {/* <ThemePanel /> */}
          </Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
