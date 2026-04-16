import { CategoryLabelMap, PriorityLabelMap, type Note } from "../models/note";

type NoteItemProps = {
  note: Note;
  onNoteDelete: (id: number) => void;
};

const NoteItem: React.FC<NoteItemProps> = ({ note, onNoteDelete }) => {
  const borderColor = () => {
    switch (note.priority) {
      case "High":
        return "border-l-red-500";
      case "Medium":
        return "border-l-yellow-500";
      case "Low":
        return "border-l-green-500";
      default:
        return "border-l-gray-500";
    }
  };

  return (
    <>
      <div
        className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${borderColor()}`}
      >
        <h3 className="text-lg font-bold">{note.title}</h3>
        <p className="text-sm text-gray-600">
          <strong> Category: </strong>
          {CategoryLabelMap[note.category]}
        </p>
        <p className="text-sm text-gray-600">
          <strong> Priority: </strong>
          {PriorityLabelMap[note.priority]}
        </p>
        <p className="mt-2">{note.description}</p>
        <button
          type="button"
          className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
          onClick={() => onNoteDelete(note.id)}
        >
          🗑️ Delete
        </button>
      </div>
    </>
  );
};

export default NoteItem;
