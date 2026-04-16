import type { Note } from "../models/note";
import NoteItem from "./NoteItem";

type NoteListProps = {
  notes: Note[];
  onNoteDelete: (id: number) => void;
};

const NoteList: React.FC<NoteListProps> = ({ notes, onNoteDelete }) => {
  if (notes.length === 0) {
    return (
      <>
        <p className="text-center text-gray-500">No Notes Yet</p>
      </>
    );
  }
  return (
    <>
      <div className="space-y-4">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onNoteDelete={onNoteDelete}
          ></NoteItem>
        ))}
      </div>
    </>
  );
};

export default NoteList;
