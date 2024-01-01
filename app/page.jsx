import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full flex justify-center items-center">
      <LoginButton>
        <Button>Sign in</Button>
      </LoginButton>
    </main>
  );
}
