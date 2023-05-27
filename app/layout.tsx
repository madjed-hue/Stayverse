import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "StayVerse",
  description:
    "innovative online platform designed to connect travelers with unique and diverse accommodations worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
