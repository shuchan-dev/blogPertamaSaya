"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          {session.user.role === "ADMIN" && (
            <Link href="/write" className={styles.link}>
              Write
            </Link>
          )}
          <span className={styles.link} onClick={() => signOut()}>
            Logout
          </span>
        </>
      ) : (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      )}
      <div
        className={`${styles.burger} ${open ? styles.active : ""}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={`${styles.responsiveMenu}`}>
          <Link href="/">HomePage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {session ? (
            <>
              {session.user.role === "ADMIN" && (
                <Link href="/write" className={styles.writeLink}>
                  Write
                </Link>
              )}
              <span className={styles.link} onClick={() => signOut()}>
                Logout
              </span>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
