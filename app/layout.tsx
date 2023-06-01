import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import RegisterModal from "@/components/Modals/RegisterModal";
import LoginModal from "@/components/Modals/LoginModal";
import RentModal from "@/components/Modals/RentModal";
import Navbar from "@/components/Navbar/Navbar";
import getCurrentUser from "./actions/getCurrentUser";
import SearchModal from "@/components/Modals/SearchModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "StayVerse",
  description:
    "innovative online platform designed to connect travelers with unique and diverse accommodations worldwide",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className} suppressHydrationWarning={true}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <SearchModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
