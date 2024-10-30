export interface NoteData {
  id: string;
  title: string;
  content: string;
  created: string;
  updated?: string;
  collectionId?: string;
  collectionName?: string;
}
