"use client";
import { Waveform } from "@uiball/loaders";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Waveform size={40} lineWeight={3.5} speed={1} color="crimson" />
    </div>
  );
};

export default Loader;
