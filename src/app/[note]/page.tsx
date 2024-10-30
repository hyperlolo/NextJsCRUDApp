import styles from "@/components/note-card/NoteCard.module.css";

// Fetching note data with an async function
async function getNote(noteId: string) {
  const response = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch note with id ${noteId}`);
  }

  const data = await response.json();
  return data;
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ note: string }>;
}) {
  const awaitedParams = await params;
  const noteId = awaitedParams.note;

  if (!noteId) {
    return (
      <div className="error-message">
        <p>Note ID is missing or invalid.</p>
      </div>
    );
  }

  try {
    const note = await getNote(noteId);

    return (
      <div className="bg-white p-6 max-w-full shadow-md flex flex-col max-h-full">
        <div className="text-black text-xl font-medium pb-1 flex flex-row justify-center mb-6">
          Note
        </div>
        <div className="flex flex-row max-w-vw flex-wrap justify-start">
          <div className={styles.noteCard}>
            <div className="note-header">
              <div className={styles.noteTitle}>{note.title}</div>
              <div className="note-created text-sm text-muted">
                Created: {new Date(note.created).toLocaleDateString()}
              </div>
            </div>
            <div className="note-content text-gray-950 mb-4">
              <div>{note.content}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="error-message">
        <p>Failed to load note data. Please try again later.</p>
      </div>
    );
  }
}
