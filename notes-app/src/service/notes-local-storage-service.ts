import type { Note } from "../models/note";

const NOTES_LOCAL_STORAGE_KEY = "notes";

export function saveNotesToLocalStorage(notes: Note[]) {
  localStorage.setItem(NOTES_LOCAL_STORAGE_KEY, JSON.stringify(notes));
}

export function loadNotesFromLocalStorage(): Note[] {
  const notesJson = localStorage.getItem(NOTES_LOCAL_STORAGE_KEY);
  let notes: Note[] = [];
  if (notesJson) {
    try {
      notes = JSON.parse(notesJson) as Note[];
    } catch (error) {
      console.error("Failed to parse notes from local storage:", error);
      notes = [];
    }
  }
  return notes;
}
