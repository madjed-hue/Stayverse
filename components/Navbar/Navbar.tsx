"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/types";

interface NavbarProps {
  currentUser: SafeUser | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  console.log(currentUser);

  return (
    <div className="fixed w-full shadow-sm bg-white z-10">
      <div className="py-4 border-b-[4px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
