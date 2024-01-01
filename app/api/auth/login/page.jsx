"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { LoginForm } from "@/components/auth/login-form";

export default function SignIn() {
  const [providers, setProviders] = useState(null);
  const handlePost = async () => {
    fetch("/api/auth/callback/credentials", {
      method: "POST",
      body: { username: "shyam", password: "passs" },
    });
  };
  useEffect(() => {
    (async () => {
      const providerTemp = await getProviders();
      setProviders(providerTemp);
    })();
  }, []);
  return <LoginForm />;
}
