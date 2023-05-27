"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer box-border"
      src="/images/logo.png"
      width="150"
      height="40"
      alt="Logo"
    />
  );
};

export default Logo;
