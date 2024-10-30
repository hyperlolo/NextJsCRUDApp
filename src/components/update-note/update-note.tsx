"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./UpdateNote.module.css";
import { NoteData } from "@/utils/types";

interface UpdateNoteProps {
  note: NoteData;
  onClose: () => void;
}

export default function UpdateNote({ note, onClose }: UpdateNoteProps) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const router = useRouter();

  const update = async (event: React.FormEvent) => {
    event.preventDefault();
    await fetch(
      `http://127.0.0.1:8090/api/collections/notes/records/${note.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }
    );

    router.refresh();
    onClose();
  };

  return (
    <div className={styles.noteCard}>
      <form onSubmit={update} className="flex flex-col">
        <div className="note-header">
          <input
            type="text"
            className={`${styles.noteTitle} ${styles.UpdateNoteInput}`}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="note-created text-sm text-slate-800 font-semibold">
          Created: {new Date(note.created).toLocaleDateString()}
        </div>
        <div className="note-content mb-4">
          <textarea
            className={`${styles.noteContent} ${styles.UpdateNoteInput}`}
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex justify-between mt-1">
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
