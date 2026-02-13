import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "俄语发音评估",
  description: "基于 Azure Speech Services 的俄语发音评估应用",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}