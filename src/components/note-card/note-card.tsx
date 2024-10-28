import React from "react";
import styles from "./NoteCard.module.css";

interface NoteCardProps {
  children: React.ReactNode;
}

export default function NoteCard({ children }: NoteCardProps) {
  return (
    <div className={styles.noteCard}>
      <div className={styles.cornerBent}></div>
      {children}
    </div>
  );
}
