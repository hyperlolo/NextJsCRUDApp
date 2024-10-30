import React from "react";
import styles from "./NoteCard.module.css";
import { NoteData } from "@/utils/types";
import Link from "next/link";

interface NoteCardProps {
  note: NoteData;
  children?: React.ReactNode;
}

export default function NoteCard({ children, note }: NoteCardProps) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/${id}`} className={styles.noteCardLink}>
      <div className={styles.noteCard}>
        <div className="note-header">
          <div className={styles.noteTitle}>{title}</div>
          <div className="note-created text-sm text-muted">
            Created: {new Date(created).toLocaleDateString()}
          </div>
        </div>
        <div className="note-content text-gray-950 mb-4">
          <div>{content}</div>
        </div>
        {children && <div className="note-children mt-4">{children}</div>}
      </div>
    </Link>
  );
}
