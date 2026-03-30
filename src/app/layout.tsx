import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HttpRouter + EdgeOne Pages",
  description: "Go Functions allow you to run Go web frameworks like HttpRouter on EdgeOne Pages. Build full-stack applications with HttpRouter's lightweight, zero-allocation routing.",
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
