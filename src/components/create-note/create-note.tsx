"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./CreateNote.module.css";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setContent("");
    setTitle("");

    router.refresh();
  };

  return (
    <form onSubmit={create} className="flex flex-col max-w-sm">
      <h3>Create a new Note</h3>
      <input
        type="text"
        className={styles.CreateNoteInput}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={styles.CreateNoteInput}
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  );
}
