import { CreateNote, NoteCard } from "@/components";
import { NoteData } from "@/utils/types";

async function getNotes() {
  // Example of fetching data from a PocketBase database using the PocketBase SDK
  // const db = new PocketBase("http://127.0.0.1:8090");
  // const data = await db.records.getList('notes');

  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await response.json();

  return data?.items as NoteData[];
}

export default async function Home() {
  const notes = await getNotes();
  return (
    <div className="bg-white p-6 max-w-full shadow-md max-h-full flex flex-col items-center">
      <div className="text-black text-xl font-medium pb-1 flex flex-row justify-center mb-6">
        Notes
      </div>
      <div className="flex flex-row max-w-vw flex-wrap justify-start ml-14">
        {notes.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </div>
      <CreateNote />
    </div>
  );
}
