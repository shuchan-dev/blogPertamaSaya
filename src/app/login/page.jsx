"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/Loader";

const LogiPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Loader />;
  }
  if (status === "authenticated") {
    const redirectURL = localStorage.getItem("redirectAfterLogin") || "/";
    localStorage.removeItem("redirectAfterLogin");
    router.push(redirectURL);
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton} onClick={() => signIn("github")}>
          Sign in with Github
        </div>
      </div>
    </div>
  );
};

export default LogiPage;
