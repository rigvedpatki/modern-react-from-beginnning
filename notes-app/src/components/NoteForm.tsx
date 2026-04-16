import { useState } from "react";
import {
  type Note,
  PriorityType,
  PriorityLabelMap,
  CategoryType,
  CategoryLabelMap,
  type NoteInput,
} from "../models/note";
import NoteInputField from "./note-form-fields/NoteInputField";
import NoteTextAreaField from "./note-form-fields/NoteTextAreaField";
import NoteSelectField from "./note-form-fields/NoteSelectField";

export type NoteFormProps = {
  onAddNote: (note: Note) => void;
};

const NoteForm: React.FC<NoteFormProps> = ({ onAddNote }) => {
  const [note, setNote] = useState<NoteInput>({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const { title, priority, category, description } = note;

  const submitNote = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    const newNote: Note = {
      id: Date.now(),
      ...note,
    };
    onAddNote(newNote);
    setNote({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const priorityOptions = PriorityType.map((p) => ({
    value: p,
    label: PriorityLabelMap[p],
  }));
  const categoryOptions = CategoryType.map((c) => ({
    value: c,
    label: CategoryLabelMap[c],
  }));

  return (
    <>
      {/* Toggle Button  */}
      <button
        type="button"
        className="w-full bg-gray-100 border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
        onClick={() => setIsFormVisible((prev) => !prev)}
      >
        {isFormVisible ? "Hide Form ✖️ " : "Add New Note ➕"}
      </button>

      {/* Form */}
      {isFormVisible && (
        <form className="mb-6" onSubmit={submitNote}>
          <NoteInputField
            label="Title"
            name="title"
            value={title}
            required={true}
            onChangeInputFieldChange={handleInputChange}
          />
          <NoteSelectField
            label="Priority"
            name="priority"
            value={priority}
            options={priorityOptions}
            required={true}
            onChangeSelectFieldChange={handleInputChange}
          />
          <NoteSelectField
            label="Category"
            name="category"
            value={category}
            options={categoryOptions}
            required={true}
            onChangeSelectFieldChange={handleInputChange}
          />
          <NoteTextAreaField
            label="Description"
            name="description"
            value={description}
            required={true}
            onChangeTextAreaFieldChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full p-2 bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600 transition-colors"
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
