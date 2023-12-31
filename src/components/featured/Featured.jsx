"use client";
import React, { useContext } from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const Featured = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b
          style={theme === "dark" ? { color: "#348899" } : { color: "#962D3E" }}
        >
          Hey, Ryhan is here!
        </b>{" "}
        Find my stories, opinions, creative ideas and latest news.
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="Image" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            voluptate voluptatum doloremque error expedita eveniet quam tempore
            nesciunt sed sequi fuga cumque corrupti, delectus similique hic rem
            corporis non reiciendis!
          </p>
          <button
            className={styles.button}
            style={
              theme === "dark"
                ? { backgroundColor: "#f2ebc7" }
                : { backgroundColor: "#1f273a", color: "#f0f8ff" }
            }
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
