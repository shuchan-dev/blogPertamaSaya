"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  const goToPreviousPage = () => {
    router.push(`?page=${page - 1}`);
  };

  const goToNextPage = () => {
    router.push(`?page=${page + 1}`);
  };
  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        className={styles.button}
        onClick={goToPreviousPage}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={goToNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
