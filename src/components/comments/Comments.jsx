"use client";

import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import Loader from "../loader/Loader";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

const Comments = ({ postSlug }) => {
  const router = useRouter();
  const { data: status } = useSession("");

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");
  const textareaRef = useRef(null);

  const hendleSubmit = async () => {
    await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    textareaRef.current.value = "";
    mutate();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      hendleSubmit();
    }
  };

  function formatDate(dateString) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = new Date(dateString).toLocaleString(
      undefined,
      options
    );
    return formattedDate;
  }
  const sortedComments = data ? [...data].reverse() : [];

  const handleLoginRedirect = () => {
    localStorage.setItem("redirectAfterLogin", window.location.href);
    router.push("/login");
  };
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status ? (
        <div className={styles.write}>
          <textarea
            ref={textareaRef}
            placeholder="Write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className={styles.button} onClick={hendleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <p className={styles.loginMessage}>
          Please{" "}
          <span
            onClick={handleLoginRedirect}
            style={
              theme === "dark" ? { color: "#348899" } : { color: "#962D3E" }
            }
          >
            Login
          </span>{" "}
          to write a comment.
        </p>
      )}
      <div className={styles.comments}>
        {isLoading ? (
          <Loader />
        ) : (
          sortedComments?.map((item) => (
            <div className={styles.comment} key={item._id}>
              <div className={styles.user}>
                {item?.user?.image && (
                  <Image
                    src={item.user.image}
                    alt=""
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                )}
                <div className={styles.userInfo}>
                  <span className={styles.username}> {item.user.name} </span>
                  <span className={styles.date}>
                    {formatDate(item.createdAT)}
                  </span>
                </div>
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
