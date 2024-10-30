"use client";

import React from "react";
import styles from "./NoteCard.module.css";
import { NoteData } from "@/utils/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NoteCardProps {
  note: NoteData;
  children?: React.ReactNode;
}

export default function NoteCard({ children, note }: NoteCardProps) {
  const { id, title, content, created } = note || {};
  const router = useRouter();

  function onDelete(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    console.log("called delete");
    fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id}`, {
      method: "DELETE",
    });
    router.refresh();
  }

  return (
    <Link href={`/${id}`} className={styles.noteCardLink}>
      <div className={styles.noteCard}>
        <div className="note-header">
          <div className={styles.noteTitle}>{title}</div>
          <button className={styles.noteDeleteButton} onClick={onDelete}>
            Delete
          </button>
        </div>
        <div className="note-created text-sm text-slate-800 font-semibold">
          Created: {new Date(created).toLocaleDateString()}
        </div>
        <div className="note-content text-gray-950 mb-4">
          <div>{content}</div>
        </div>
        {children && <div className="note-children mt-4">{children}</div>}
      </div>
    </Link>
  );
}
