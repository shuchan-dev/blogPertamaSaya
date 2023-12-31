"use client";
import NextTopLoader from "nextjs-toploader";
const ProgressBar = () => {
  return (
    <NextTopLoader
      color="crimson"
      initialPosition={0.08}
      crawlSpeed={100}
      height={2}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
    />
  );
};

export default ProgressBar;
