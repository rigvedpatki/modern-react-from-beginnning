import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import { type Note } from "./models/note";
import {
  loadNotesFromLocalStorage,
  saveNotesToLocalStorage,
} from "./service/notes-local-storage-service";
import NoteList from "./components/NoteList";
import ConfirmationModal from "./components/ConfirmationModal";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(() => {
    console.log("Loading notes from localStorage...");
    const savedNotes = loadNotesFromLocalStorage();
    return savedNotes;
  });

  const [showModal, setShowModal] = useState<boolean>(false);
  const [noteToDelete, setNoteToDelete] = useState<Note | null>(null);

  const addNote = (note: Note) => {
    setNotes((prev) => {
      const updatedNotes = [...prev, note];
      return updatedNotes;
    });
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => {
      const updatedNotes = prev.filter((note) => note.id !== id);
      return updatedNotes;
    });
  };

  const openConfirmationModal = (id: number) => {
    const note = notes.find((n) => n.id === id) || null;
    if (!note) return;
    setNoteToDelete(note);
    setShowModal(true);
  };

  const confirmDelete = (confirmed: boolean) => {
    if (confirmed && noteToDelete) {
      deleteNote(noteToDelete.id);
    }
    setShowModal(false);
    setNoteToDelete(null);
  };

  useEffect(() => {
    const localStorageNotes = loadNotesFromLocalStorage();
    if (JSON.stringify(localStorageNotes) !== JSON.stringify(notes)) {
      console.log("Saving notes to localStorage:", notes);
      saveNotesToLocalStorage(notes);
    }
  }, [notes]);

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center"> 📝 Notes App</h2>
        <NoteForm onAddNote={addNote} />
        <NoteList notes={notes} onNoteDelete={openConfirmationModal} />
      </div>
      <ConfirmationModal
        showModal={showModal}
        note={noteToDelete}
        onConfirmation={confirmDelete}
      />
    </>
  );
};

export default App;
