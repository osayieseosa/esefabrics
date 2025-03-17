import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppWrapper } from "@/context";
import "./globals.css";
import {Toaster} from 'sonner'
import BottomNav from "@/components/BottomNav";
import Wrapper from "@/components/Wrapper";
import { AuthProvider } from "@/providers/AuthProvider";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className+ "bg-background dark:bg-background-dark"}>
        <AuthProvider>
        <AppWrapper>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
          <Wrapper path="/admin">
          <Header/>
          </Wrapper>
        <div className="text-text dark:text-text-dark w-full h-full text bg-background dark:bg-background-dark pt-[63.99px]">
          {children}
        </div>
        <Wrapper path="/auth">
        <BottomNav/>
        </Wrapper>
          <Toaster position="bottom-right"/>
        </ThemeProvider>
        </AppWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
