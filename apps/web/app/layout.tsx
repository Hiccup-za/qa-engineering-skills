import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Databuddy } from "@databuddy/sdk/react";

export const metadata: Metadata = {
  title: "QA Engineering Skills",
  description: "Browse QA skills and best practices.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} flex flex-col min-h-screen`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Always ensure dark mode is on
                  document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <Databuddy clientId="0b92343b-a922-4b87-9d46-12b12eafeda5" />
      </body>
    </html>
  );
}
