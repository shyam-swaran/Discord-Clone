"use client";

import { useRouter } from "next/navigation";

export const LoginButton = ({ children, mode, asChild }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/api/auth/login");
  };
  if (mode === "modal") {
    return <span>Todo</span>;
  }
  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
};
