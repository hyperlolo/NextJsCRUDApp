import React from "react";
import styles from "./NoteCard.module.css";

interface NoteCardProps {
  children: React.ReactNode;
}

const NoteCard: React.FC<NoteCardProps> = ({ children }) => {
  return (
    <div className={styles.noteCard}>
      <div className={styles.cornerBent}></div>
      {children}
    </div>
  );
};

export default NoteCard;
