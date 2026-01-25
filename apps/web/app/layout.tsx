import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "QA Skills",
  description: "Browse QA skills and best practices.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
