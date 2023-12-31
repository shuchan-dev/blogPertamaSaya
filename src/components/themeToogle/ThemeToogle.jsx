"use client";

import Image from "next/image";
import styles from "./themeToogle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToogle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggle();
  };
  return (
    <div
      className={styles.container}
      onClick={handleToggle}
      style={
        theme === "dark"
          ? { backgroundColor: "#f2ebc7" }
          : { backgroundColor: "#1f273a" }
      }
    >
      <Image src="/moon.png" alt="moon" height={14} width={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#1f273a" }
            : { right: 1, backgroundColor: "#f2ebc7" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" height={14} width={14} />
    </div>
  );
};

export default ThemeToogle;
