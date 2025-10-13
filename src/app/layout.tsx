import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "../components/theme-provider";
import LenisScroll from "../components/lenis-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vipan Sharma - Portfolio",
  description: "Sydney based front-end developer passionate about building accessible and user friendly websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisScroll />
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              className: "",
              style: {
                background: 'hsl(var(--card))',
                color: 'hsl(var(--card-foreground))',
                border: '1px solid hsl(var(--border))',
              },
              success: {
                style: {
                  background: 'hsl(var(--primary))',
                  color: 'hsl(var(--primary-foreground))',
                  border: '1px solid hsl(var(--primary))',
                },
              },
              error: {
                style: {
                  background: 'hsl(var(--destructive))',
                  color: 'hsl(var(--destructive-foreground))',
                  border: '1px solid hsl(var(--destructive))',
                },
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
