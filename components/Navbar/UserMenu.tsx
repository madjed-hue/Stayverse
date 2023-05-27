"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import MenuItem from "./MenuItem";
import Avatar from "../Avatar";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeUser } from "@/types";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const router = useRouter();
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hiddenmd:blocktext-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          StayVerse your home
        </div>
        <div
          className="p-4md:py-1md:px-2border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-mdw-[40vw]md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm ">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  label="My trips"
                  onClick={() => router.push("/trips")}
                />
                <MenuItem
                  label="My favorites"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label="My reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  label="My properties"
                  onClick={() => router.push("/properties")}
                />
                <MenuItem label="Airbnb your home" />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sign up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
