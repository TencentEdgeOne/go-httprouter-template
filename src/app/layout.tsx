import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HttpRouter + EdgeOne Pages | EdgeOne Makers",
  description: "Go Functions allow you to run Go web frameworks like HttpRouter on EdgeOne Pages. Build full-stack applications with HttpRouter's lightweight, zero-allocation routing. · Demo only · EdgeOne Makers",
  keywords: "EdgeOne Makers, Demo only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="icon" href="/httprouter-favicon.svg" />
      </head>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
