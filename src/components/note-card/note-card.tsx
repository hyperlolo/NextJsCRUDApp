"use client";

import React, { useState } from "react";
import styles from "./NoteCard.module.css";
import { NoteData } from "@/utils/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UpdateNote from "../update-note/update-note";

interface NoteCardProps {
  note: NoteData;
  children?: React.ReactNode;
}

export default function NoteCard({ children, note }: NoteCardProps) {
  const { id, title, content, created } = note || {};
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);

  function onDelete(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id}`, {
      method: "DELETE",
    });
    router.refresh();
  }

  function onEdit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    setIsEditing(true);
  }

  function handleEditClose() {
    setIsEditing(false);
  }

  if (isEditing) {
    return <UpdateNote note={note} onClose={handleEditClose} />;
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
        <div className="flex justify-end flex-col mt-20">
          <button className={styles.noteEditButton} onClick={onEdit}>
            Edit
          </button>
        </div>
      </div>
    </Link>
  );
}
