import RegisterModal from "@/components/Modals/RegisterModal";
import Navbar from "@/components/Navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "@/components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "@/components/Modals/RentModal";

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <ToasterProvider />
      <RegisterModal />
      <LoginModal />
      <RentModal />
      <Navbar currentUser={currentUser} />
    </div>
  );
}
