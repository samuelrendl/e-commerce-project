import type { Metadata } from "next";

import { Poppins, Chakra_Petch } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/context/theme-provider";

import { ClerkProvider } from "@clerk/nextjs";

import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "TechNest",
  description:
    "Discover the latest in tech at TechNest. Shop for phones, tablets, laptops, and more. Experience unbeatable prices and top-notch customer service. Your one-stop tech shop!",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra-petch",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#50C878",
        },
      }}
    >
      <html lang="en">
        <body className={`${poppins.variable} ${chakraPetch.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
