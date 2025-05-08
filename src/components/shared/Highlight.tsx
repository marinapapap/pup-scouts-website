import React, { ReactNode } from "react";
import styles from "./Highlight.module.css";

type HighlightProps = {
  children: ReactNode;
};

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Highlight;
